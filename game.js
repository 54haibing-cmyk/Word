let xp=0,level=1,combo=0;
const speak=t=>{if(/[a-z]/i.test(t)){speechSynthesis.speak(new SpeechSynthesisUtterance(t));}};
function startLevel(){
const board=document.getElementById('board');
board.innerHTML='';
const pick=WORDS.slice(0,Math.min(8,WORDS.length));
let cards=[];
pick.forEach(w=>{cards.push({t:w[0],m:w[1]});cards.push({t:w[1],m:w[0]});});
cards.sort(()=>Math.random()-0.5);
let first=null,matched=0;
cards.forEach(c=>{
 const d=document.createElement('div');
 d.className='card';
 d.textContent=c.t;
 d.onclick=()=>{
  if(d.classList.contains('matched'))return;
  speak(c.t);
  if(!first){first={d,c};d.classList.add('selected');return;}
  if(first.c.m===c.t){
    combo++;xp+=10+combo;
    matched+=2;
    d.classList.add('matched');
    first.d.classList.add('matched');
    if(matched===cards.length){
      level++;
      document.getElementById('level').textContent=level;
      setTimeout(startLevel,800);
    }
  }else{
    combo=0;
    first.d.classList.remove('selected');
  }
  document.getElementById('xp').textContent=xp;
  document.getElementById('combo').textContent=combo;
  first=null;
 };
 board.appendChild(d);
});
}
document.getElementById('start').onclick=startLevel;
