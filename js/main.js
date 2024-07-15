

function validation(){
    let userName=document.getElementById('user-name').value
    let email=document.getElementById('E-mail').value
    let password=document.getElementById('password').value
    let confurmPassword =document.getElementById('confurm-password').value
    let errorMessege =document.getElementById('error')
    let createdUser =document.getElementById('createdUser')

    if(userName==""&& email==""&&password==""&&confurmPassword==""){

        errorMessege.innerHTML="enter full  data"
            errorMessege.style.display='block'
        errorMessege.style.transition='all 1s ease'
   
    return false

    } else if( userName.length>20||userName.length<5 ){
        errorMessege.innerHTML=" please ranged name from 5 char to 20 char "
        errorMessege.style.transition='all 1s ease'
        errorMessege.style.display='block'
      
        return false
    } 
    else if (email.indexOf("@")==-1){



        errorMessege.innerHTML=" please enter valied E-mail "
        errorMessege.style.transition='all 1s ease'
        errorMessege.style.display='block'
      
        return false


    }else if (password.length<8) {



        errorMessege.innerHTML=" please enter minemum password 8 "
        errorMessege.style.display='block'
      
        return false


    } else if (confurmPassword!=password){



        errorMessege.innerHTML=" the confurm password not same "
        errorMessege.style.display='block'
      
        return false

    }
    
    }
