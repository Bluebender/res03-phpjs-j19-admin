import { usersDisplay } from './users.js';
import { userDisplay } from './user.js';
import { creatUser } from './create-user.js';
import { updateUser } from './update-user.js';
import { deleteUser } from './delete-user.js';


window.addEventListener("DOMContentLoaded", function(){  

    if (window.location.toString().includes("/users.html")) {
        usersDisplay();
    }
    if (window.location.toString().includes("/user.html")) {
        userDisplay();
    }
    if (window.location.toString().includes("/create-user.html")) {
        creatUser();
    }
    if (window.location.toString().includes("/update-user.html")) {
        updateUser();
    }

});
