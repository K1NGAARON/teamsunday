// Add active class to nav items
let menuDropdowns = document.querySelectorAll(".dropdown-btn");

function removeActiveClass() {
    for(let i = 0; i < menuDropdowns.length; i++) {
        menuDropdowns[i].classList.remove("active");
    }
};

menuDropdowns.forEach(function(EventTarget) {
    EventTarget.addEventListener("click", function() {
        if (EventTarget.className == "nav-item dropdown-btn active") {
            removeActiveClass();
        } else {
            removeActiveClass();
            EventTarget.classList.toggle("active");
        }
    })
});



// Close menu on outside nav div click
function clickNavItem(event) {
    event.stopPropagation();

    console.log('clicked on nav item');
    $('body').on('click', bodyClickEvent => {
        console.log('clicked on body');
        if ($(bodyClickEvent.target).closest('.dropdown-content').length === 0) {
            console.log('clicked outside dropdown');
            // A click occurred outside the nav-item.
            $('.nav-item').off('click', clickNavItem);
            hideMenuDropdown();
        }
    });
}

function hideMenuDropdown() {
    console.log('hides dropdown');
    $('.dropdown-content.show').removeClass('show').addClass('hidden');
    removeActiveClass();
}

$('.nav-item').on('click', clickNavItem);



// Dropdowns
var whysundaydropdown = document.getElementById("whysundaydropdown");
var soldropdown = document.getElementById("soldropdown");
var resourcesdropdown = document.getElementById("resourcesdropdown");
var fashiondropdown = document.getElementById("fashiondropdown");

// Buttons
var whysundaybtn = document.getElementById("whysundaybtn");
var soldropdownbtn = document.getElementById("soldropdownbtn");
var resourcesbtn = document.getElementById("resourcesbtn");
var fashiondropdownbtn = document.getElementById("fashiondropdownbtn");

// Why Sunday Dropdown
whysundaybtn.onclick = function() {
    if(whysundaydropdown.className == "show") {
    whysundaydropdown.className = "hidden";
    } 
    else {
    whysundaydropdown.className = "show";
    soldropdown.className = "hidden";
    resourcesdropdown.className = "hidden";
    fashiondropdown.className = "hidden";
    }
};


// Solutions Dropdown
soldropdownbtn.onclick = function() {
    if(soldropdown.className == "show") {
    soldropdown.className = "hidden";
    }
    else {
    soldropdown.className = "show";
    whysundaydropdown.className = "hidden";
    resourcesdropdown.className = "hidden";
    fashiondropdown.className = "hidden";
    }
};

// Fashion Dropdown
fashiondropdownbtn.onclick = function() {
    if(fashiondropdown.className == "show") {
        fashiondropdown.className = "hidden";
    }
    else {
    fashiondropdown.className = "show";
    whysundaydropdown.className = "hidden";
    resourcesdropdown.className = "hidden";
    soldropdown.className = "hidden";
    }
};



// Resources Dropdown
resourcesbtn.onclick = function() {
    if(resourcesdropdown.className == "show") {
    resourcesdropdown.className = "hidden";
    }
    else {
    resourcesdropdown.className = "show";
    whysundaydropdown.className = "hidden";
    soldropdown.className = "hidden";
    fashiondropdown.className = "hidden";
    }
};

var hamburgerbtn = document.getElementById("hamburger-dropdown");
var smallDropdown = document.getElementById("small-menu-dropdown");

hamburgerbtn.onclick = function(){
    if(smallDropdown.className == "show-small-menu") {
    smallDropdown.className = "hidden";
}
    else {
    smallDropdown.className = "show-small-menu";
    }
};

// Small menu script
// Why Sunday
let sundayWrapper = document.querySelector(".sunday-wrapper-sm");
let solutionsWrapper = document.querySelector(".solutions-wrapper-sm");
let contentWrapper = document.querySelector(".content-wrapper-sm");

let whySundayToggle = document.querySelector(".why-dropdown");
whySundayToggle.onclick = function() {
    sundayWrapper.classList.toggle("hidden");
    sundayWrapper.classList.toggle("active-nav-item-sm");
    whySundayToggle.classList.toggle("active-nav-item-sm");

    solutionsWrapper.classList.remove("active-nav-item-sm");
    solutionsToggle.classList.remove("active-nav-item-sm");
    contentWrapper.classList.remove("active-nav-item-sm");
    contentToggle.classList.remove("active-nav-item-sm");
    
    solutionsWrapper.classList.add("hidden");
    contentWrapper.classList.add("hidden");
};

// Solutions
let solutionsToggle = document.querySelector(".solutions-dropdown");

solutionsToggle.onclick = function() {
    solutionsWrapper.classList.toggle("hidden");
    solutionsWrapper.classList.toggle("active-nav-item-sm");
    solutionsToggle.classList.toggle("active-nav-item-sm");

    sundayWrapper.classList.remove("active-nav-item-sm");
    whySundayToggle.classList.remove("active-nav-item-sm");
    contentWrapper.classList.remove("active-nav-item-sm");
    contentToggle.classList.remove("active-nav-item-sm");

    sundayWrapper.classList.add("hidden");
    contentWrapper.classList.add("hidden");
};

// Content
let contentToggle = document.querySelector(".content-dropdown");

contentToggle.onclick = function() {
    contentWrapper.classList.toggle("hidden");

    contentWrapper.classList.toggle("active-nav-item-sm");
    contentToggle.classList.toggle("active-nav-item-sm");

    sundayWrapper.classList.remove("active-nav-item-sm");
    whySundayToggle.classList.remove("active-nav-item-sm");
    solutionsWrapper.classList.remove("active-nav-item-sm");
    solutionsToggle.classList.remove("active-nav-item-sm");

    sundayWrapper.classList.add("hidden");
    solutionsWrapper.classList.add("hidden");
};

// Second dropdown -- Why Sunday
let overviewToggle = document.querySelector(".overview-toggle");
let visionToggle = document.querySelector(".vision-toggle");
let servicesToggle = document.querySelector(".services-toggle");

let overviewContent = document.querySelector(".overview-content-sm");
let visionContent = document.querySelector(".vision-content-sm");
let servicesContent = document.querySelector(".services-content-sm");

overviewToggle.onclick = function() {
    overviewContent.classList.toggle("hidden");
    visionContent.classList.add("hidden");
    servicesContent.classList.add("hidden");
};

visionToggle.onclick = function() {
    visionContent.classList.toggle("hidden");
    overviewContent.classList.add("hidden");
    servicesContent.classList.add("hidden");
};

servicesToggle.onclick = function() {
    servicesContent.classList.toggle("hidden");
    visionContent.classList.add("hidden");
    overviewContent.classList.add("hidden");
};

// // Second dropdown -- Solution
// let salesToggle = document.querySelector(".sales-toggle-sm");
// let marketingToggle = document.querySelector(".marketing-toggle-sm");
// let hrToggle = document.querySelector(".hr-toggle-sm");

// let salesContent = document.querySelector(".sales-content-sm");
// let marketingContent = document.querySelector(".marketing-content-sm");
// let hrContent = document.querySelector(".hr-content-sm");

// salesToggle.onclick = function() {
//     salesContent.classList.toggle("hidden");
//     marketingContent.classList.add("hidden");
//     hrContent.classList.add("hidden");
// };

// marketingToggle.onclick = function() {
//     marketingContent.classList.toggle("hidden");
//     salesContent.classList.add("hidden");
//     hrContent.classList.add("hidden");
// };

// // hrToggle.onclick = function() {
// //     hrContent.classList.toggle("hidden");
// //     salesContent.classList.add("hidden");
// //     marketingContent.classList.add("hidden");
// // };

// // Second dropdown -- Content
// let blogsToggle = document.querySelector(".blog-toggle-sm");
// let connectToggle = document.querySelector(".content-toggle-sm");

// let blogsContent = document.querySelector(".blog-content-sm");
// let connectContent = document.querySelector(".content-content-sm");

// blogsToggle.onclick = function() {
//     blogsContent.classList.toggle("hidden");
//     connectContent.classList.add("hidden");
// };

// connectToggle.onclick = function() {
//     connectContent.classList.toggle("hidden");
//     blogsContent.classList.add("hidden");
// };