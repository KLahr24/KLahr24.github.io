document.getElementById('your-form-id').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('error-message');

    if (name === "" || email === "") {
        errorElement.style.display = 'block';
        errorElement.textContent = "Please fill in all fields.";
        return false;
    } else {
        errorElement.style.display = 'none';
    }

    return true;
}
