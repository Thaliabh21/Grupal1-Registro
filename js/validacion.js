function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function idem (){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let check = document.getElementById("terminos").checked;

    if (nombre !== "" && 
        apellido !== "" &&
        email !== "" &&
        password1.length >= 6 && 
        password1.value === password2.value &&
        check){
            showAlertSuccess()
        
    } else {
        showAlertError()
        location.href="index.html"
    };
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("regBtn").addEventListener("click", () => {
        idem();
    });
});