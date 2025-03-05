document.getElementById("submit-btn").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for signing up!");
    }
});
