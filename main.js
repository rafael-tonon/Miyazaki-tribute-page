var carousel = document.getElementsByClassName('carousel');
var cards = document.getElementsByClassName("cards");
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
var x, y;


prev[0].addEventListener("click", e => changeSlide());
next[0].addEventListener("click", e => changeSlide());

function changeSlide(){
    //Looping that goes through all the elements that have the "cards" class
    for (x=0; x<cards.length; x++){
        //If class visible exist then remove it and goes to the next card, if it's invisible then it will make it visible.
        if (cards[x].classList.contains("visible")){
            cards[x].classList.remove("visible");
        } else {
            cards[x].classList.add("visible");
        }
    }
}