
function validateForm() {

    var username = document.forms["loginForm"]["Username"].value;
    var password = document.forms["loginForm"]["Password"].value;

    if(username == "admin" && password == "12345") {
        window.location.href = "dashboard.html";
    }

    else {
        alert("You're not an admin");
    }
}