export function showuser(user){

userprofile.innerHTML="";

user.forEach(elem=>{

userprofile.innerHTML+=`

<div class="user">

<img src="${elem.avatar_url}">

<h2>${elem.login}</h2>

<p>GitHub User</p>

<a href="${elem.html_url}" target="_blank" id="profilelink">
View Profile
</a>

</div>

`

})

}

export function showtopuser(repos) {
  toprepo.innerHTML = "";

  repos.forEach((repo) => {
    toprepo.innerHTML += `

<div class="repo">

<h3>${repo.name}</h3>

<p>${repo.description || "No description available"}</p>

<div class="stats">

⭐ ${repo.stargazers_count}
&nbsp;&nbsp;

🍴 ${repo.forks_count}
&nbsp;&nbsp;

👀 ${repo.watchers_count}

</div>

<a href="${repo.html_url}" target="_blank">
View Repository
</a>

</div>

`;
  });
}
