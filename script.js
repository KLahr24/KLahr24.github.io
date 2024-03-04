function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}