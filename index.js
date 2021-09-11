"use strict";
window.addEventListener('load', onLoaded, false);


function onLoaded(_event)
{
    jsonListItems.forEach( item => document.body.appendChild(makeItemDisplay(item)) );
    
    function makeItemDisplay(data)
    {
        let src = document.getElementById('cardTemplate');
        let newCard = src.content.cloneNode(true);
        
        newCard.querySelector('.friendly').textContent = data.Friendly;
        newCard.querySelector('.model').textContent = data.Model;
        newCard.querySelector('.manufacturer').textContent = data.Manufacturer;
        
        newCard.querySelector('.type').textContent = data.Type;
        newCard.querySelector('.tech').textContent = data.Tech;
        newCard.querySelector('.software').textContent = data.Software;
        
        return newCard;
    }
}