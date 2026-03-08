export async function getuser(name){
  let response = await fetch(`https://api.github.com/search/users?q=${name}`);

  if(!response.ok){
    throw new Error('server error')
  }

  return (await response.json()).items.slice(0,5);
}

export async function gettopuser(users){
  let response = await fetch(`https://api.github.com/users/${users}/repos`);
 
  if(!response.ok){
    throw new Error('server error')
  }

  let listusers =  await response.json();
  listusers = listusers.sort((a,b)=>
    b.stargazers_count - a.stargazers_count
  )

  return listusers.slice(0,5);
}
