class GitHub{
    constructor(){
        this.client_id = 'cf963572b2b640fd94a3';
        this.client_secret = '31f7fcb749f6f68ce08aff56bda7e79e8309c316';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // functions to get a user asynchronously
    async getUser(user){
        // Fetching the Profiles
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos   =  await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}