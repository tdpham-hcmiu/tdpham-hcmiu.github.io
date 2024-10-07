function hydrate() {
    var cookie = document.cookie;

    var json = cookie.replace("details=", "");
    var obj = JSON.parse(json);

    let form = document.forms["register"];

    form.elements["email"].value = obj["email"];
    form.elements["phone"].value = obj["phone"];
    form.elements["country"].value = obj["country"];
    form.elements["contact-method"].value = obj["contact-method"];
    form.elements["tos"].checked = obj["tos"];
}

function validate() {
    let form = document.forms["register"];

    let email = form.elements["email"].value;
    let phone = form.elements["phone"].value;
    let country = form.elements["country"].value;
    let contact = form.elements["contact-method"].value;
    let tos = form.elements["tos"].checked;

    let hasError = false;
    let errorMessage = "";

    if (email == "") {
        errorMessage += "<li>Please enter an email address</li>";
        hasError = true;
    }

    if (phone == "") {
        errorMessage += "<li>Please enter a phone number</li>";
        hasError = true;
    }

    if (country == "None") {
        errorMessage += "<li>Please select a country</li>";
        hasError = true;
    }

    if (tos == false) {
        errorMessage += "<li>You must agree to the terms of service</li>";
        hasError = true;
    }

    if (hasError) {
        document.getElementsByClassName("errors")[0].style.display = "block";
        document.getElementsByClassName("errors")[0].innerHTML = `<ul>${errorMessage}</ul>`;
    }
    else {
        document.getElementsByClassName("errors")[0].style.display = "none";
    }
}

function submit() {
    let form = document.forms["register"];

    let email = form.elements["email"].value;
    let phone = form.elements["phone"].value;
    let country = form.elements["country"].value;
    let contact = form.elements["contact-method"].value;
    let tos = form.elements["tos"].checked;

    let cookie = {
        "email": email,
        "phone": phone,
        "country": country,
        "contact": contact,
        "tos": tos
    };

    document.cookie = `details=${JSON.stringify(cookie)}`;

    alert("Account registered.");

    return(true);
}