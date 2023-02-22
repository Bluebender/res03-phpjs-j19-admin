import { userDisplay } from './user.js';
import { deleteUser } from './delete-user.js';

function usersDisplay(){

    let tbody = document.getElementById("tbody");

    fetch('https://vincentollivier.sites.3wa.io/04-php/res03-php-j19-api/api/users')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        let users=data;
        
    
        for (let user of users){
            let tr = document.createElement("tr");
        
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
        
            let button1 = document.createElement("button");
            let button2 = document.createElement("button");
            let button3 = document.createElement("button");
        
            let id = document.createTextNode(user.id);
            let username = document.createTextNode(user.username);
            let firstName = document.createTextNode(user.firstName);
            let lastName = document.createTextNode(user.lastName);
            let email = document.createTextNode(user.email);
            
            let ouvrir = document.createTextNode("Ouvrir");
            let modifier = document.createTextNode("Modifier");
            let supprimer = document.createTextNode("Supprimer");
        
            tbody.appendChild(tr);
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
        
            td1.appendChild(id);
            td2.appendChild(username);
            td3.appendChild(firstName);
            td4.appendChild(lastName);
            td5.appendChild(email);
        
            td6.appendChild(button1);
            td6.appendChild(button2);
            td6.appendChild(button3);
            
            button1.appendChild(ouvrir);
            button1.classList.add("openButton");
            button1.setAttribute('userId',user.id);

            button2.appendChild(modifier);
            button2.classList.add("updateButton");
            button2.setAttribute('userId',user.id);
            
            button3.appendChild(supprimer);
            button3.classList.add("deleteButton");
            button3.setAttribute('userId',user.id);
            
        }

        let openButton=document.querySelectorAll(".openButton");
        for (let i=0; i<users.length; i++){
            openButton[i].addEventListener("click", function(){
                let id=openButton[i].getAttribute('userid');
                window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/user.html?user_id=" + id; 
            });
        }
        
        let updateButton=document.querySelectorAll(".updateButton");
        for (let i=0; i<users.length; i++){
            updateButton[i].addEventListener("click", function(){
                let id=deleteButton[i].getAttribute('userid');
                window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/update-user.html?user_id=" + id; 
            });
        }

        let deleteButton=document.querySelectorAll(".deleteButton");
        for (let i=0; i<users.length; i++){
            deleteButton[i].addEventListener("click", function(){
                let id=deleteButton[i].getAttribute('userid');
                deleteUser(id);
            });
        }
        
        let creatUser=document.getElementById("creatUser");
        creatUser.addEventListener("click", function(){
        window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/create-user.html";
    });
        
        
    });

}

export { usersDisplay };