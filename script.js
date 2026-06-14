document.getElementById("admissionForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const student =
    document.getElementById("student").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const message =
    document.getElementById("message").value;

    const text =
`New Admission Request

Student: ${student}

Parent Email: ${email}

Phone: ${phone}

Message: ${message}`;

    alert(
        "Application submitted successfully!"
    );

    console.log(text);

});
