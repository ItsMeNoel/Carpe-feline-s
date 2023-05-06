document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Send the form data to your server-side script for processing
    // Replace the URL below with your server-side script URL
    var url = "https://www.example.com/contact.php";
    var data = {
        name: name,
        email: email,
        message: message
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                document.getElementById("response-message").innerHTML = "<p class='success-message'>Thank you for your message!</p>";
                document.getElementById("contact-form").reset();
            } else {
                document.getElementById("response-message").innerHTML = "<p class='error-message'>Oops! Something went wrong. Please try again.</p>";
            }
        }
    };
    xhr.send(JSON.stringify(data));
});