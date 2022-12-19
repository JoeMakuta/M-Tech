
export const validatePassword = (password) => {
   if(password == ''){
      return true
   }else {
      if(password.lenght <= 3)
         return false
      else{
         return true
      }
   }
}