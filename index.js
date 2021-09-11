"use strict";
window.addEventListener('load', onLoaded, false);


function onLoaded(_event)
{
    jsonListItems.forEach( item => document.body.appendChild(makeItemDisplay(item)) );
    
    function makeItemDisplay(data)
    {
        let src = document.getElementById('cardTemplate');
        let newCard = src.content.cloneNode(true);
        let path = "ico/devices/";
        let ext = ".png";
        let file = path.concat("prop/",data.Manufacturer,"/",data.Model,ext);
        let bkup = path.concat("generic/",data.Type,ext)
        //in the future, i would like to have an if/else where if a model-exact icon is unavailable, it pulls a generic icon instead.
        
        newCard.querySelector('.friendly').textContent = data.Friendly;
        newCard.querySelector('.model').textContent = data.Model;
        newCard.querySelector('.manufacturer').textContent = data.Manufacturer;
        newCard.querySelector('.icon').src = file;
        newCard.querySelector('.type').textContent = data.Type;
        newCard.querySelector('.tech').textContent = data.Tech;
        newCard.querySelector('.software').textContent = data.Software;
        
        return newCard;
    }
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("persistent").style.fontSize = "8px";
    document.getElementById("persistent").style.textAlign = "left";
  } else {
    document.getElementById("persistent").style.fontSize = "16px";
    document.getElementById("persistent").style.textAlign = "center";
  }
} 