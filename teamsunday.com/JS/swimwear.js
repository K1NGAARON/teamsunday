// product tags
let productInspirationTags = document.querySelectorAll(".product-tags");

function removeActiveClassProducts() {
    for(let i = 0; i < productInspirationTags.length; i++) {
      productInspirationTags[i].classList.remove("active");
    }
};

productInspirationTags.forEach(function(EventTarget) {
    EventTarget.addEventListener("click", function() {
      removeActiveClassProducts();
        EventTarget.classList.add("active");
    })
});

// Design step tags
let designStepsTags = document.querySelectorAll(".design-tags");

function removeActiveClassDesign() {
    for(let i = 0; i < designStepsTags.length; i++) {
      designStepsTags[i].classList.remove("active");
    }
};

designStepsTags.forEach(function(EventTarget) {
    EventTarget.addEventListener("click", function() {
      removeActiveClassDesign();
        EventTarget.classList.add("active");
    })
});

// Change images based on active class
let swimShortsBtn = document.querySelector("#swimshorts-btn");
let swimSuitsBtn = document.querySelector("#swimsuits-btn");
let beachTowelBtn = document.querySelector("#beach-towel-btn");
let slidersBtn = document.querySelector("#sliders-btn");
let flipFlopsBtn = document.querySelector("#flip-flops-btn");


let firstSlide = document.querySelector("#first-slide");
let secondSlide = document.querySelector("#second-slide");
let thirdSlide = document.querySelector("#third-slide");


function showSwimShorts() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Swimshorts-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Swimshorts-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Swimshorts-3.jpg";
};
function showSwimSuits() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Swimsuits-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Swimsuits-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Swimsuits-3.jpg";
};
function showBeachTowels() {
    firstSlide.src = "/wp-content/uploads/2022/03/Gymproject-towel-8.jpg";
    secondSlide.src = "/wp-content/uploads/2022/03/Towel-sleeve-6.jpg";
    thirdSlide.src = "/wp-content/uploads/2022/03/Towels-2.jpg";
};

function showSliders() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Sliders-1-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Sliders-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Sliders-4.jpg";
};
function showFlipFlops() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Flipflops-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Flipflops-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Flipflops-3.jpg";
};


swimShortsBtn.addEventListener("click", showSwimShorts);
swimSuitsBtn.addEventListener("click", showSwimSuits);
beachTowelBtn.addEventListener("click", showBeachTowels);
slidersBtn.addEventListener("click", showSliders);
flipFlopsBtn.addEventListener("click", showFlipFlops);

// Design steps
let titleHolder = document.querySelector(".design-steps-text-holder .title-holder")
let textHolder = document.querySelector(".design-steps-text-holder .text-holder")
let step1Text = "We’ll have a meeting together and go through everything we need to design amazing clothing for you. For example: The brand guidelines & colors, the target audience, the products & styles you like, …";
let step2Text = "Our team of design experts creates a 3D example of your item, so you get the most realistic vision of the product.";
let step3Text = "We go through the technical details of your product, Pantone colours, decoration techniques, exact positioning,…";
let step4Text = "We produce & deliver the items exactly as you ordered, so your team can enjoy your awesome new company fashion and become true brand ambassadors.";

let titleHolder1 = "Design Briefing";
let titleHolder2 = "3D Virtual Design";
let titleHolder3 = "Technical Details";
let titleHolder4 = "End result";


let imageHolder = document.querySelector(".img-steps-holder");
let step1 = document.querySelector("#step-1");
let step2 = document.querySelector("#step-2");
let step3 = document.querySelector("#step-3");
let step4 = document.querySelector("#step-4");

function showStep1() {
  imageHolder.src = "/wp-content/uploads/2022/03/step1-1.png";
  titleHolder.innerHTML = titleHolder1;
  textHolder.innerHTML = step1Text;
};

function showStep2() {
  imageHolder.src = "/wp-content/uploads/2022/03/step2.png";
  titleHolder.innerHTML = titleHolder2;
  textHolder.innerHTML = step2Text;
};

function showStep3() {
  imageHolder.src = "/wp-content/uploads/2022/03/step3.png";
  titleHolder.innerHTML = titleHolder3;
  textHolder.innerHTML = step3Text;
};

function showStep4() {
  imageHolder.src = "/wp-content/uploads/2022/03/step4-1.png";
  titleHolder.innerHTML = titleHolder4;
  textHolder.innerHTML = step4Text;
};

step1.addEventListener("click", showStep1);
step2.addEventListener("click", showStep2);
step3.addEventListener("click", showStep3);
step4.addEventListener("click", showStep4);


// slideshow
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
};

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
};