export function showuser(user){
    userprofile.innerHTML = "<h2>Users</h2>";
    user.forEach(user => {
    userprofile.innerHTML += `<h3>${user.login}</h3>
    <img src="${user.avatar_url}" alt="${user.login} profile picture" width="100">
    <br>
    <a href="${user.html_url}" target="_blank">View Profile</a><br><br>`;
    });
};

export function showtopuser(user){
   toprepo.innerHTML = "<h2>Top Repositories</h2>";
   user.forEach(element => {
    toprepo.innerHTML += `<h2>${element.name}</h2>
    <p>${element.description || 'No description available'}</p>
    <p>Stars: ${element.stargazers_count}</p>
    <a href="${element.html_url}" target="_blank">View Repository</a><br><br>`;
  });
  
}