const form =document.getElementById('incidentForm');
const titleInput =document.getElementById('title');
const categoryInput =document.getElementById('category');
const descriptionInput =document.getElementById('description');
const severityInput =document.getElementById('severity');
const formMessage =document.getElementById('formMessage');
const submitButton = form.querySelector('button[type="submit"]')


let submitting=false;

// will remove the white space from starting and the end of the input
function checkText(input,minimumLength,fieldName) {
    const trimmedText = input.value.trim();
    
    if (input.value.length > 0 && trimmedText.length < minimumLength) {
        input.setCustomValidity(
           `${fieldName} must conatin at least ${minimumLength} characters, excluding surrounding spaces.`
        );
    } else {
        input.setCustomValidity("");

    }
}
// applies javascript rules to both text fields.
function validateTextFields() {
    checkText(titleInput, 5, "Title");
    checkText(descriptionInput, 10 ,'Description');
}
function showMessage(message, colorClass) {
    formMessage. textContent=message
    formMessage.className = `mt-3 mb-0 ${colorClass}`
}
function setSubmitting(value) {
    submitting = value;
    titleInput.disabled = value;
    categoryInput.disabled = value;
    descriptionInput.disabled = value;
    severityInput.disabled = value;
    submitButton.disabled = value;
    submitButton.textContent = value 
          ? 'Submitting..'
          : 'Submit Incident';
}

form.addEventListener("input", function () {
    validateTextFields();
    formMessage.textContent ="";
});

// for checking any initial values
validateTextFields();

// this runs when the browser allows the form to submit
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    if (submitting) {
        return;
    }
    validateTextFields();

    // display a browser error id field is invalid.
    if (!form.reportValidity()) {
        return;
    }
    setSubmitting(true);
    try {
        const response = await fetch('/api/incidents',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:titleInput.value.trim(),
                category: categoryInput.value,
                description:descriptionInput.value.trim(),
                severity: severityInput.value
            })
        });
        const result = await response.json();

        formMessage.className = response.ok
            ?"mt-3 mb-0 text-success"
            :"mt-3 mb-0 text-danger";

        formMessage.textContent= result.message;
        if (response.ok) {
            form.reset();
        }    
    } catch(error) {
        formMessage.className ="mt-3 mb-0 text-danger";
        formMessage.textContent= "Could not confirm the save. check the database before retrying.";
    } finally {
        setSubmitting(false);
    }

});
