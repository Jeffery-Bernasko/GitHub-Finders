class GitHub{
    constructor(){
        this.client_id = 'cf963572b2b640fd94a3';
        this.client_secret = '31f7fcb749f6f68ce08aff56bda7e79e8309c316';
    }

    // functions to get a user asynchronously
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}