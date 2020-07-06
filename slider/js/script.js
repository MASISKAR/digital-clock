const img = document.querySelector('.image>img');

const images = ['1.png', '2.png', '3.png', '4.png'];

const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');

/*  let circleHTML = '';
for(let i=0; i<images.length; i++){
    circleHTML+=`<div class="circle" data-index="${i}"></div>`;
}
document.querySelector('.circles').innerHTML = circleHTML;  */

document.querySelector('.circles').innerHTML = '<div class="circle"></div>'.repeat(images.length);


leftArrow.addEventListener('click', goLeft);
rightArrow.addEventListener('click', goRight);

const circles = document.querySelectorAll('.circle');

let currentImgIndex = 0;
let prevImgIndex = images.length-1;

circles[currentImgIndex].classList.add('active');

 circles.forEach((circle, index)=>{
    circle.onclick = ()=> circleClickHandler(index);
}); 

function circleClickHandler(index){
    prevImgIndex = currentImgIndex;
    currentImgIndex = index;
    changeImage();
}

function goLeft(){  
    prevImgIndex = currentImgIndex;
    if(currentImgIndex === 0){
        currentImgIndex = images.length-1;
    }
    else {
        currentImgIndex--;
    }
    changeImage();
}

function goRight(){
    prevImgIndex = currentImgIndex;
    if(currentImgIndex === images.length-1){
        currentImgIndex = 0;
    }
    else {
        currentImgIndex++;
    }
    changeImage();
}

function changeImage(){
    img.src = 'images/'+images[currentImgIndex];
    circles[currentImgIndex].classList.add('active');
    circles[prevImgIndex].classList.remove('active');
}

let interval = null;
startInterval();

function startInterval(){
    interval = setInterval(goRight, 5000);
}

function stopInterval(){
    clearInterval(interval);
    interval = null;
}

const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('mouseover', stopInterval);

sliderContainer.addEventListener('mouseleave', startInterval);

