//ini javascript

function formValidation() {
    console.log ("ini form");
    return false;
}

var slideIndex =1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlide");
    if (n > x.length) { slideIndex = 1 };
    if (n < x.length) { slideIndex = x.length};
}