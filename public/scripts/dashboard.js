document.addEventListener('DOMContentLoaded', loadIncidents);

async function loadIncidents() {
    const tableBody = document.getElementById('incidentTableBody');

    try {
        const response = await fetch('/api/incidents');

        if (!response.ok) {
            throw new Error('Failed to retrieve incidents');
        }

        const incidents = await response.json();

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