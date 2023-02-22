function userDisplay(){

    let tbody = document.getElementById("tbody");
    
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('user_id')

    fetch('https://vincentollivier.sites.3wa.io/04-php/res03-php-j19-api/api/user/'+id)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        let user=data;
        
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
    
        // td6.appendChild(button1);
        td6.appendChild(button2);
        td6.appendChild(button3);
        
        button1.appendChild(ouvrir);
        button2.appendChild(modifier);
        button3.appendChild(supprimer);
        
    });

}

export { userDisplay };