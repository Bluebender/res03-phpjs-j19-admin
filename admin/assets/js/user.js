function userDisplay(){

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('user_id');

    fetch('https://vincentollivier.sites.3wa.io/04-php/res03-php-j19-api/api/user/'+id)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        let user=data;
        
        let tbody = document.getElementById("tbody");

        let tr = document.createElement("tr");
    
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        let id = document.createTextNode(user.id);
        let username = document.createTextNode(user.username);
        let firstName = document.createTextNode(user.firstName);
        let lastName = document.createTextNode(user.lastName);
        let email = document.createTextNode(user.email);
        
        tbody.appendChild(tr);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        td1.appendChild(id);
        td2.appendChild(username);
        td3.appendChild(firstName);
        td4.appendChild(lastName);
        td5.appendChild(email);
    
    });
    
    let returnButton=document.getElementById("returnButton");
    returnButton.addEventListener("click", function(){
        window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/users.html";
    });

}

export { userDisplay };