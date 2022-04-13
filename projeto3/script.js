'use strict'

document.querySelector('.busca').addEventListener('submit', async (event)=>{
     event.preventDefault();

      let input=document.querySelector('#searchInput').value;

      if(input){
          showWarnning('carregando...');

          let url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=3c8b465bd8f53806fc84560fa9cd73ef&&units=metric&lang=pt_br`;


          let results=await fetch(url);
          let json=await results.json();

          console.log(json);
      }

});

function showWarnning(msg) {
    document.querySelector('.aviso').innerHTML=msg;
}