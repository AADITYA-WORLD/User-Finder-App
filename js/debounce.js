export function bounce(fnc,delay){
  let timer;

  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fnc.apply(this,args)
    },delay)
  }
}