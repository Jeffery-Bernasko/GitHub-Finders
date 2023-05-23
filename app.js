
const github = new GitHub();
const ui = new UI();

// Search Input

const searchUser = document.getElementById('searchUser');

// Search Input EventListner
searchUser.addEventListener('keyup',(e) =>{
    // Get Inut Text
    const userText = e.target.value;
    
    // Check if user text is not empty
    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert that user doesn't exist
                ui.showAlert('User not found','alert alert-danger');
            }else{
                // Show profile of the user
                ui.showProfile(data.profile);

                // Show User's latest repos
                ui.showRepos(data.repos);
            }
        });
    } else{
        // Clear Profile
        ui.clearProfile();
    }
});