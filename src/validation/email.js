

export const validateEmail = (email) => {
   const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   console.log(email);
   if(regex.test(email)){
      return true
   }else if(email == ''){
      return true
   }
   else{
      return false
   }
}