let eye = document.getElementById("eye");
let password  = document.querySelector(".password");
let hiddenPassword = true;


/////////////// show passwrord ////////////////

eye.addEventListener("click",()=>{
    if(hiddenPassword){
        toggle("fa-eye" ,"text", false);
    }else{
        toggle("fa-eye-slash", "password", true);
    }
})

function toggle(classname , atributeType , state){
    eye.className = `fa-solid ${classname}`;
    password.setAttribute("type", atributeType);
    hiddenPassword = state;
}