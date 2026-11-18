const form =document.getElementById('incidentForm');
const titleInput =document.getElementById('title');
const descriptionInput =document.getElementById('description');
const formMessage =document.getElementById('formMessage');
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

form.addEventListener("input", function () {
    validateTextFields();
    formMessage.textContent ="";
});

// for checking any initial values
validateTextFields();

// this runs when the browser allows the form to submit
form.addEventListener('submit',function(event) {
    event.preventDefault();
    validateTextFields();

    // display a browser error id field is invalid.
    if (!form.reportValidity()) {
        return;
    }
    formMessage.className ="mt-3 mb-0 text-success";
    formMessage.textContent= "Validation Passed! Your report has not been saved yet.";
});
