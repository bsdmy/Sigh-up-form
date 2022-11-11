const password = document.getElementById("password")
const confirm1 = document.getElementById("confirm-password")
function valid(){
    if (password.value != confirm1.value){
        password.setAttribute("isvalid","false")
        confirm1.setAttribute("isvalid","false")
        return false
    }
    return true
}