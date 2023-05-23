class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class ="card card-body mb-3">
            <div class ="row">
                <div class ="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target=_blank class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class = "col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>

                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>

                    <span class="badge badge-success">Followers: ${user.followers}</span>

                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Bio: ${user.bio}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Lastest Repos</h3>
        <div id="repos"></div>
        `;
    }

    clearProfile(){
        this.profile.innerHTML = "";
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    showAlert(message,className){
        // Clear Alert 
        this.clearAlert();

        // Create a div
        const div = document.createElement('div');

        // Add className
        div.className = className;

        //Add Text
        div.appendChild(document.createTextNode(message));

        // Get Parent Element
        const container = document.querySelector('.searchContainer');

        // Get Search Box
        const search = document.querySelector('.search');

        // Insert ALert
        container.insertBefore(div, search);

        // Set Timer for 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
}