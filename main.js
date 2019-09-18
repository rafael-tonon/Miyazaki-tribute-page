var slider = document.getElementById("slider");
var cards = document.getElementsByClassName("cards");
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
var index = 0, touchStart, touchEnd;


slider.addEventListener('touchstart', e => {
    touchStart = e.touches[0].clientX;
    //console.log(touchStart); 
}, false);

slider.addEventListener('touchend', e => {
    touchEnd;

    touchEnd = e.changedTouches[0].clientX;
    //console.log(touchEnd);
    if (touchEnd > touchStart){
        changeSlide(prev);
    } else if (touchEnd < touchStart){
        changeSlide(next);
    } else {
        alert("Swipe right :D");
    }
    // Process the data ... 
}, false);

prev[0].addEventListener("touchend", e => {
    
    changeSlide(prev);
});
next[0].addEventListener("click", e => {
    changeSlide(next)
});

function changeSlide(element){
    var currentSlide = index;
    let prevSlide = index - 1;
    let nextSlide = index + 1;
    //Looping that goes through all the elements that have the "cards" class
    for (currentSlide=index; currentSlide<=nextSlide; currentSlide++){
        //If class visible exist then remove it and goes to the next card, if it's invisible then it will make it visible.
        if (element == next && cards[currentSlide].classList.contains("visible") && currentSlide < nextSlide && nextSlide < cards.length){
            
            cards[currentSlide].classList.remove("visible", "slideLeft", "slideRight");
            cards[nextSlide].classList.add("visible", "slideRight");

            index++;
            console.log("Current: ", nextSlide, "index: ", index);
            
        } else if (element == prev && cards[currentSlide].classList.contains("visible")){
            if (prevSlide < currentSlide && prevSlide >= 0){
                cards[currentSlide].classList.remove("visible", "slideLeft", "slideRight");
                cards[prevSlide].classList.add("visible", "slideLeft");
                
                index--;
                console.log("Current: ", prevSlide, "index: ", index);
            }
        } 
    }
}





//código funcionando
/*var carousel = document.getElementsByClassName('carousel');
var cards = document.getElementsByClassName("cards");
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
var x, y;


prev[0].addEventListener("click", e => {
    changeSlide(prev);
});
next[0].addEventListener("click", e => {
    
    changeSlide(next)
});

function changeSlide(element){
    if (element == prev){
        console.log("elemento");
    }
    //Looping that goes through all the elements that have the "cards" class
    for (x=0; x<cards.length; x++){
        //If class visible exist then remove it and goes to the next card, if it's invisible then it will make it visible.
        if (cards[x].classList.contains("visible")){
            cards[x].classList.remove("visible", "slideLeft", "slideRight");
        } else if (element == prev){
            cards[x].classList.add("slideLeft", "visible");
        } else {
            cards[x].classList.add("visible", "slideRight");
        }
    }
}*/