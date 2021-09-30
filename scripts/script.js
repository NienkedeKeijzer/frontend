// JavaScript Document

console.log('haaai')

// Const is een variabel wat NIET veranderd (tijd/data enz)
// Let is een variabel wat wel kan veranderen (berekeningen adhv verschillende input)

// JS voor burgermenu

// het const variabel noemen we burger en we halen het uit het document. Deze hoort bij de class .burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navheader');

// Naar voren halen van het menu

    // We zeggen dat de benoemde burger wordt geactiveerd als er op wordt 'geclickt' waarna de function burgerActivate wordt uitgevoerd
    burger.addEventListener('click', burgerActivate)

    // We zeggen dat als we hebben 'geclickt' dat de class (in css gemaakt)    // wordt geactiveerd door een toggle >(activeren en later weer uit kunnen zetten)
    function burgerActivate () {
        nav.classList.toggle('navactive');
        console.log('help'); 
    }
