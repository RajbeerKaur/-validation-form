const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


   form.addEventListener('submit', function(e){
    e.preventDefault();
if(username.value ==="")
{
     showError("please enter username");
}
   else{
       showSuccess(username);
   }

if(surname.value ==="")
{
     showError("please enter  surname");
}
  else{
    showSuccess(surname);

}
if(email.value ==="")
{
      showError("please enter email");
}
  else{
         showSuccess(email) ;
      }

if(password.value ==="")
{
     showError("please enter your password");
}
   else{
        showSuccess("password");
   }  

if(confirmPassword.value === '') {
    showError(confirmPassword, 'please enter: "confirmPassword"');
}
   else if(confirmPassword.value !== password.value){
    showError(confirmPassword, 'Fields do not match');
}  
   else {
    showSuccess(confirmPassword);
}  

});

