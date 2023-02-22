function creatUser(){

    let createButton=document.getElementById("createButton");
    createButton.addEventListener("click", function(event){
        event.preventDefault();
        let user={
            username : document.getElementById("username").value,
            firstName : document.getElementById("firstName").value,
            lastName : document.getElementById("lastName").value,
            email : document.getElementById("email").value
        }

        let formData = new FormData();
        formData.append('username', user.username);
        formData.append('firstName', user.firstName);
        formData.append('lastName', user.lastName);
        formData.append('email', user.email);
        
        console.log(formData);
        
        const options = {
            method: 'POST',
            body: formData
        };
        
        fetch('https://vincentollivier.sites.3wa.io/04-php/res03-php-j19-api/api/create-user', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });        
        
        window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/users.html";
        
    });
    

    
    let returnButton=document.getElementById("returnButton");
    returnButton.addEventListener("click", function(){
        window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/users.html";
    });

}

export { creatUser };