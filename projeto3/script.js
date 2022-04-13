'use strict'

document.querySelector('.busca').addEventListener('submit', async (event)=>{
     event.preventDefault();

      let input=document.querySelector('#searchInput').value;

      if(input){
          showWarnning('carregando...');

          let url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=3c8b465bd8f53806fc84560fa9cd73ef&&units=metric&lang=pt_br`;


          let results=await fetch(url);
          let json=await results.json();

          if(json.cod===200){
             showInfo({
                 name:json.name,
                 country:json.sys.country,
                 temp:json.main.temp,
                 tempIcon:json.weather[0].icon,
                 windSpeed:json.wind.speed,
                 windAngle:json.wind.deg
             });
             
          }else{
              showWarnning('cidade não encontrada.');
          }
      }

});

function showInfo(json) {
   
    document.querySelector('.resultado').style.display='block';

    document.querySelector('.titulo').innerHTML=`${json.name}, ${json.country}`;

    document.querySelector('.tempInfo').innerHTML=`${json.temp}<span>ºC</span>`;

    document.querySelector('.ventoInfo').innerHTML=`${json.windSpeed}<span>km/h</span>`;

    document.querySelector('.temp img').setAttribute(`src`,`http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    document.querySelector('.ventoPonto').style.transform=`rotate(${json.windAngle-90}deg)`; 
}
function showWarnning(msg) {
    document.querySelector('.aviso').innerHTML=msg;
}
