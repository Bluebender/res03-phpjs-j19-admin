import { usersDisplay } from './users.js';
import { userDisplay } from './user.js';


let returnButton=document.getElementById("returnButton");

window.addEventListener("DOMContentLoaded", function(){  
    
    returnButton.addEventListener("click", function(){
        window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/users.html";
    });
                    
    if (window.location.toString().includes("/users.html")) {
        usersDisplay();
    }
    if (window.location.toString().includes("/user.html")) {
        userDisplay();
    }


    
});
