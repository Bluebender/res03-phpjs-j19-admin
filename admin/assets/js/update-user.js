function updateUser(){

    let upadateButton=document.getElementById("upadateButton");

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('user_id');
    
    fetch('https://vincentollivier.sites.3wa.io/04-php/res03-php-j19-api/api/user/'+id)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        let user=data;

        let username=document.getElementById("username");
        username.setAttribute('value',user.username);
        let firstName=document.getElementById("firstName");
        firstName.setAttribute('value',user.firstName);
        let lastName=document.getElementById("lastName");
        lastName.setAttribute('value',user.lastName);
        let email=document.getElementById("email");
        email.setAttribute('value',user.email);

    });
        
    upadateButton.addEventListener("click", function(event){
        event.preventDefault();
        let user={
            id : id,
            username : document.getElementById("username").value,
            firstName : document.getElementById("firstName").value,
            lastName : document.getElementById("lastName").value,
            email : document.getElementById("email").value
        }
        console.log(user);

        let formData = new FormData();
        formData.append('id', user.id);
        formData.append('username', user.username);
        formData.append('firstName', user.firstName);
        formData.append('lastName', user.lastName);
        formData.append('email', user.email);
        
        
        const options = {
            method: 'POST',
            body: formData
        };
        
        fetch('https://vincentollivier.sites.3wa.io/04-php/res03-php-j19-api/api/update-user/'+id, options)
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

export { updateUser };