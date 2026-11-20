document.addEventListener('DOMContentLoaded', loadIncidents);

async function loadIncidents() {
    const tableBody = document.getElementById('incidentTableBody');

    try {
        const response = await fetch('/api/incidents');

        if (!response.ok) {
            throw new Error('Failed to retrieve incidents');
        }

        const incidents = await response.json();

// Create category summary
const categoryCounts = {};

incidents.forEach(incident => {
    categoryCounts[incident.category] =
        (categoryCounts[incident.category] || 0) + 1;
});

const summary = document.getElementById('categorySummary');

summary.innerHTML = '';

if (Object.keys(categoryCounts).length === 0) {
    summary.innerHTML = `
        <div class="col-12">
            <p>No incidents reported yet.</p>
        </div>
    `;
} else {
    Object.entries(categoryCounts).forEach(([category, count]) => {
        summary.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">${category}</h5>
                        <h2>${count}</h2>
                        <p class="text-muted mb-0">
                            ${count === 1 ? 'Incident' : 'Incidents'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}

tableBody.innerHTML = '';

        if (incidents.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5">No incidents have been reported.</td>
                </tr>
            `;
            return;
        }

        incidents.forEach(incident => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${incident._id}</td>
                <td>${incident.title}</td>
                <td>${incident.category}</td>
                <td>${incident.severity}</td>
                <td>${incident.status}</td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Failed to load incidents:', error);

        tableBody.innerHTML = `
            <tr>
                <td colspan="5">Unable to load incidents.</td>
            </tr>
        `;
    }
}