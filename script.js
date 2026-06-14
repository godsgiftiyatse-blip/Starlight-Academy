document.getElementById("admissionForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const student =
    document.getElementById("studentName").value;

    alert(
        "Application received for " + student
    );

});
