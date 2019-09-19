var slider = document.getElementById("slider");
var hidden = document.getElementsByClassName("hidden");
//var prev = document.getElementsByClassName("prev");
//var next = document.getElementsByClassName("next");
var index = 0, touchStart, touchEnd;


slider.addEventListener('touchstart', e => {
    touchStart = e.touches[0].clientX;
    //console.log(touchStart); 
}, false);

slider.addEventListener('touchend', e => {
    touchEnd = e.changedTouches[0].clientX;
    let result = touchEnd - touchStart;
    //console.log(touchEnd);
    //console.log("result", result);
    if (touchEnd > touchStart && result > 60){
        changeSlide(1);
    } else if (touchEnd < touchStart && result < -60){
        changeSlide(2);
    }
    // Process the data ... 
}, false);

function changeSlide(element){
    var currentSlide = index;
    let prevSlide = index - 1;
    let nextSlide = index + 1;
    //Looping that goes through all the elements that have the "hidden" class
    for (currentSlide=index; currentSlide<=nextSlide; currentSlide++){
        //If class card exist then remove it and goes to the next card, if it's incard then it will make it card.
        if (element == 2 && hidden[currentSlide].classList.contains("card") && currentSlide < nextSlide && nextSlide < hidden.length){
            
            hidden[currentSlide].classList.remove("card", "slideLeft", "slideRight");
            hidden[nextSlide].classList.add("card", "slideRight");

            index++;
            console.log("Current: ", nextSlide, "index: ", index);
            
        } else if (element == 1 && hidden[currentSlide].classList.contains("card") && prevSlide < currentSlide && prevSlide >= 0){
            hidden[currentSlide].classList.remove("card", "slideLeft", "slideRight");
            hidden[prevSlide].classList.add("card", "slideLeft");
                
            index--;
            console.log("Current: ", prevSlide, "index: ", index);
            
        } else {
            break;
        }
    }
}





//código funcionando
/*var carousel = document.getElementsByClassName('carousel');
var hidden = document.getElementsByClassName("hidden");
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
    //Looping that goes through all the elements that have the "hidden" class
    for (x=0; x<hidden.length; x++){
        //If class card exist then remove it and goes to the next card, if it's incard then it will make it card.
        if (hidden[x].classList.contains("card")){
            hidden[x].classList.remove("card", "slideLeft", "slideRight");
        } else if (element == prev){
            hidden[x].classList.add("slideLeft", "card");
        } else {
            hidden[x].classList.add("card", "slideRight");
        }
    }
}*/