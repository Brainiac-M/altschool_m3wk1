//User Object
const userDatabase = {
    "mahmood": {
        firstName: "Mahmood",
        lastName: "Ademoye",
        email: "mahmood@mail.com",
        profession: "Computer programmer",
        password: "12345fox",
        accountActivated: true
    },
    "matrix": {
        firstName: "Matrix",
        lastName: "Adebisi",
        email: "matrix@gmail.com",
        profession: "Software Engineer",
        password: "12345fish",
        accountActivated: false
    }
}



function dispalyUserDetails(){
    //Request user details
    let username = prompt("Enter username: ");

    //Validate username
    while(validateUsername(username) == false){
        username = prompt('Kindly enter a username with less than 10 characters')
    }

    if(username == null){
        return
    }

    let password = prompt("Enter password: ");

    //Validate password
    while(validatePassword(password) == false){
        password = prompt('Kindly enter a password with more than 6 characters')
    } 

    if(password == null){
        return
    } 

    //Confirm password
    let confirmPassword = prompt('Kindly confirm password: ');
    while(confirmPassword !== password){
        confirmPassword = prompt("Password does not match. Enter correct password")
    }

    if(confirmPassword == null){
        return
    }

    //Check if user is alrady in userdatabase
    const user = userDatabase[username];
    //console.log(user)

    if(user == undefined){
        alert('User does not exist. Please regsiter on the website!')
        return
    }

    //Show user details
    alert(`
        User found with the following details:
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Email: ${user.email}
        Profession: ${user.profession}
        Account Activated: ${user.accountActivated}
    `)
}

dispalyUserDetails();
//Success message
    alert("Congratulations, user details confirmed!");



//Validate user details
function validateUsername(username){
    //check username data type
    if(username == null){
        return true
    }
    //confirm username is less than 10 characters
    if(username.length < 10){
        return true
    }else{
        return false
    }
}

function validatePassword(password){
    //Check password data type
    if(password == null){
        return true
    }
    //confirm username is less than 10 characters
    if(password.length > 6){
        return true
    }else{
        return false
    }

}

