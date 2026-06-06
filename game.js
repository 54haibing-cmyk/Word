let xp=0,lv=1;
document.getElementById('start').onclick=()=>{
const b=document.getElementById('board'); b.innerHTML='';
let arr=[]; WORDS.forEach(w=>{arr.push({t:w[0],m:w[1]});arr.push({t:w[1],m:w[0]});});
arr.sort(()=>Math.random()-0.5);
let first=null;
arr.forEach(x=>{
 const d=document.createElement('div');
 d.className='card'; d.textContent=x.t;
 d.onclick=()=>{
   if(first===null){first={d,x}; return;}
   if(first.x.m===x.t){d.style.opacity=.4; first.d.style.opacity=.4; xp+=10;
   document.getElementById('xp').textContent=xp;}
   first=null;
 };
 b.appendChild(d);
});
};