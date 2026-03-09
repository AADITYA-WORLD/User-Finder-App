import {getuser,gettopuser} from './api.js';
import {bounce} from './debounce.js';
import {showuser,showtopuser} from './ui.js';

let searchinput = document.querySelector('#searchinput');
let userprofile= document.querySelector('#userprofile');
let toprepo= document.querySelector('#toprepo');
let loading= document.querySelector('#loading');
let toggle = document.querySelector('#toggle');
let body = document.querySelector('body');
let historylist = document.querySelector('#historylist');
let info = document.querySelector('.info');
let cache={};



toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

});


function savehistory(name){
  let  history = JSON.parse(localStorage.getItem('history')) || [];
  history.unshift(name);
  localStorage.setItem('history', JSON.stringify(history.slice(0,5)));
}

function loadhistory(){
  historylist.innerHTML = '';
  let history = JSON.parse(localStorage.getItem('history')) || [];
  historylist.innerHTML += history.slice(0,5).map(name=>`<span>${name}</span>`).join('');
}

loadhistory();

async function handelsearch(){
    let nameinput = searchinput.value.toLowerCase().trim();
    if(!nameinput){
      userprofile.innerHTML = '';
      toprepo.innerHTML = '';
      info.style.display = 'none'; 
      return;
    }
    loadhistory();
    savehistory(nameinput);
    loading.style.display = 'block';
    if(cache[nameinput]){
      showuser(cache[nameinput].user);
      showtopuser(cache[nameinput].topuser);
      loading.style.display = 'none';
      return;
    }

    try{
      let user = await getuser(nameinput);
      let topuser = await gettopuser(nameinput);
      cache[nameinput] = {user,topuser};
      console.log(user,topuser);
      showuser(user);
      showtopuser(topuser);
      info.style.display = 'block'; 
    }catch(error){
      userprofile.innerHTML = 'User not found';
      toprepo.innerHTML = '';
    }

    loading.style.display = 'none';

}

let debouncedsearch = bounce(handelsearch,500);

searchinput.addEventListener('input',debouncedsearch)






