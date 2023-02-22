function deleteUser(id){

    console.log(id);

        fetch('https://vincentollivier.sites.3wa.io/04-php/res03-php-j19-api/api/delete-user/'+id)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
    
            });        
            
        window.location.href="https://vincentollivier.sites.3wa.io/03-javascript/res03-js-j19-admin/admin/users.html";
        


}

export { deleteUser };