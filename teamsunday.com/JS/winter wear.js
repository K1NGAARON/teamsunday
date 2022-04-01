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
let xMasBtn = document.querySelector("#christmas-sweater-btn");
let blanketsBtn = document.querySelector("#blankets-btn");
let beaniesBtn = document.querySelector("#beanies-btn");
let scarvesBtn = document.querySelector("#scarves-btn");
let jacketsBtn = document.querySelector("#jackets-btn");
let hoodiesBtn = document.querySelector("#hoodies-btn");
let sweatersBtn = document.querySelector("#sweaters-btn");
let socksBtn = document.querySelector("#socks-btn");
let buffsBtn = document.querySelector("#buffs-btn");

let firstSlide = document.querySelector("#first-slide");
let secondSlide = document.querySelector("#second-slide");
let thirdSlide = document.querySelector("#third-slide");

function showXmas() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Christmas-sweater-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Christmas-sweater-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Christmas-sweater-3.jpg";
};

function showBlankets() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/0Z9A0214.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/0Z9A7789.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/0Z9A0214.jpg";
};

function showBeanies() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Beanie-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Beanie-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Beanie-3.jpg";
};

function showScarves() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Scarf-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Scarf-3.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Scarf-4.jpg";
};

function showJackets() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Jacket-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Jacket-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/jacket-3.jpg";
};

function showHoodies() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Hoodie-1.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Hoodie-2.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Hoodie-3.jpg";
};

function showSweaters() {
  firstSlide.src = "/wp-content/uploads/2022/03/Sweaters2.jpg";
  secondSlide.src = "/wp-content/uploads/2022/03/Sweaters1.jpg";
  thirdSlide.src = "/wp-content/uploads/2022/03/Sweaters3.jpg";
};

function showSocks() {
  firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Socks-1.jpg";
  secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Socks-2.jpg";
  thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Socks-3.jpg";
};

function showBuffs() {
    firstSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Buff-3.jpg";
    secondSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Buff-1.jpg";
    thirdSlide.src = "https://teamsunday.com/wp-content/uploads/2022/03/Buff-2.jpg";
};


hoodiesBtn.addEventListener("click", showHoodies);
sweatersBtn.addEventListener("click", showSweaters);
socksBtn.addEventListener("click", showSocks);
jacketsBtn.addEventListener("click", showJackets);
socksBtn.addEventListener("click", showSocks);
buffsBtn.addEventListener("click", showBuffs);
beaniesBtn.addEventListener("click", showBeanies);
xMasBtn.addEventListener("click", showXmas);
blanketsBtn.addEventListener("click", showBlankets);
scarvesBtn.addEventListener("click", showScarves);



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