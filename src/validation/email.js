

export const validateEmail = (email) => {
   const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   if(regex.test(email.trim())){
      return true
   }else if(email.trim() == ''){
      return true
   }
   else{
      return false
   }
}