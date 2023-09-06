function isStrongPassword(param){

if(param.length < 8 || param.includes("password")|| !/[A-Z]/.test(param)  ){
 return false
}else return true
}
  console.log(isStrongPassword("Qwerty312"))