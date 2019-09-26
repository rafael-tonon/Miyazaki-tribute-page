//get slider and hidden Id/classes
var slider = document.getElementsByClassName("slider");
var hidden = document.getElementsByClassName("hidden");
//must declare index variable in global scope so it doesn't get modified by the function later on
//declared prev and next classes so it's easier to read them later on
var index = 0, prev=1, next=2, touchStart, touchEnd;

//adds event listener touching start controls
slider[0].addEventListener('touchstart', e => {
    touchStart = e.touches[0].clientX;
}, false);

//adds event listener touching end controls
slider[0].addEventListener('touchend', e => {
    touchEnd = e.changedTouches[0].clientX;

    //result variable so the user doesn't accidentally swipe the slider during while scrolling up or down
    let result = touchEnd - touchStart;
    if (touchEnd > touchStart && result > 60){
        changeSlide(prev);
    } else if (touchEnd < touchStart && result < -60){
        changeSlide(next);
    }
}, false);

//main function that changes the slides
function changeSlide(element){
    var currentSlide = index;
    let prevSlide = index - 1;
    let nextSlide = index + 1;
    //looping to remove "hidden" and add "cards" classes
    for (currentSlide; currentSlide < nextSlide; currentSlide++){
        //if class card exist then remove it and goes to the next card, if it's hidden then it add card class to make it visible.
        if (element == next && hidden[currentSlide].classList.contains("card") && currentSlide < nextSlide && nextSlide < hidden.length){
            
            hidden[currentSlide].classList.remove("card", "slideLeft", "slideRight");
            hidden[nextSlide].classList.add("card", "slideRight");

            //adds to index so it goes so slide to the right
            index++;
            //console.log("Current: ", nextSlide, "index: ", index);
            
        } else if (element == prev && hidden[currentSlide].classList.contains("card") && prevSlide < currentSlide && prevSlide >= 0){
            hidden[currentSlide].classList.remove("card", "slideLeft", "slideRight");
            hidden[prevSlide].classList.add("card", "slideLeft");
            
            //remove from index so it goes one slide to the left
            index--;
            //console.log("Current: ", prevSlide, "index: ", index);
        } else {
            break;
        }
    }
}

