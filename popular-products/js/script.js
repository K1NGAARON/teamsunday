function preventDefault(e) {
    e.preventDefault();
}

function showDesignSteps(e) {
    preventDefault(e);

    $('.design-steps > .primary-btn').removeClass('active');
    $(this).addClass('active');

    const activeDesignStep = e.target.id;
    
    if (activeDesignStep === 'step1') {
        designTitle.innerHTML = designSteps[0].title;
        designBody.innerHTML = designSteps[0].body;
        designImg.src = designSteps[0].img;
    } else if (activeDesignStep === 'step2') {
        designTitle.innerHTML = designSteps[1].title;
        designBody.innerHTML = designSteps[1].body;
        designImg.src = designSteps[1].img;
    } else if (activeDesignStep === 'step3') {
        designTitle.innerHTML = designSteps[2].title;
        designBody.innerHTML = designSteps[2].body;
        designImg.src = designSteps[2].img;
    } else {
        designTitle.innerHTML = designSteps[3].title;
        designBody.innerHTML = designSteps[3].body;
        designImg.src = designSteps[3].img;
    }
}

function showProducts(e) {
    preventDefault(e);

    $('.product-wrapper > .primary-btn').removeClass('active');
    $(this).addClass('active');

    const activeProduct = e.target.id;

    if (activeProduct === 'tshirt') {
        image1.src = productGallery[0].tshirt1;
        image2.src = productGallery[0].tshirt2;
        image3.src = productGallery[0].tshirt3;
    } else if (activeProduct === 'hoodie') {
        image1.src = productGallery[0].hoodie1;
        image2.src = productGallery[0].hoodie2;
        image3.src = productGallery[0].hoodie3;
    } else if (activeProduct === 'sportswear') {
        image1.src = productGallery[0].sportswear1;
        image2.src = productGallery[0].sportswear2;
        image3.src = productGallery[0].sportswear3;
    } else if (activeProduct === 'sweater') {
        image1.src = productGallery[0].sweater1;
        image2.src = productGallery[0].sweater2;
        image3.src = productGallery[0].sweater3; 
    } else if (activeProduct === 'socks') {
        image1.src = productGallery[0].socks1;
        image2.src = productGallery[0].socks2;
        image3.src = productGallery[0].socks3; 
    } else if (activeProduct === 'business-shirt') {
        image1.src = productGallery[0].bizshirt1;
        image2.src = productGallery[0].bizshirt2;
        image3.src = productGallery[0].bizshirt3;
    } else if (activeProduct === 'jacket') {
        image1.src = productGallery[0].jacket1;
        image2.src = productGallery[0].jacket2;
        image3.src = productGallery[0].jacket3;  
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(e) {
    showSlides(slideIndex += e);
}

function minSlides(e) {
    showSlides(slideIndex -= e);
}

function currentSlide(e) {
    showSlides(slideIndex = e);
}

function showSlides(e) {
    let slides = document.getElementsByClassName("mySlides");

    if (e > slides.length) {
        slideIndex = 1;
    }

    if (e < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

}


// PRODUCT GALLERY
const image1 = document.querySelector('#first-slide');
const image2 = document.querySelector('#second-slide');
const image3 = document.querySelector('#third-slide');


const productGallery = [
    {
        'tshirt1' : 'https://teamsunday.com/wp-content/uploads/2022/10/shirt1.jpg',
        'tshirt2' : 'https://teamsunday.com/wp-content/uploads/2022/10/shirt2.jpg',
        'tshirt3' : 'https://teamsunday.com/wp-content/uploads/2022/10/shirt3.jpg',

        'hoodie1' : 'https://teamsunday.com/wp-content/uploads/2022/10/hoodie1.jpg',
        'hoodie2' : 'https://teamsunday.com/wp-content/uploads/2022/10/hoodie2.jpg',
        'hoodie3' : 'https://teamsunday.com/wp-content/uploads/2022/10/hoodie3.jpg',

        'sweater1' : 'https://teamsunday.com/wp-content/uploads/2022/10/sweater1.jpg',
        'sweater2' : 'https://teamsunday.com/wp-content/uploads/2022/10/sweater2.jpg',
        'sweater3' : 'https://teamsunday.com/wp-content/uploads/2022/10/sweater3.jpg',

        'socks1' : 'https://teamsunday.com/wp-content/uploads/2022/10/socks1.jpg',
        'socks2' : 'https://teamsunday.com/wp-content/uploads/2022/10/socks2.jpg',
        'socks3' : 'https://teamsunday.com/wp-content/uploads/2022/10/socks3.jpg',

        'sportswear1' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportswear1.jpg',
        'sportswear2' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportswear2.jpg',
        'sportswear3' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportswear3.jpg',

        'bizshirt1' : 'https://teamsunday.com/wp-content/uploads/2022/10/bizshirt1.jpg',
        'bizshirt2' : 'https://teamsunday.com/wp-content/uploads/2022/10/bizshirt2.jpg',
        'bizshirt3' : 'https://teamsunday.com/wp-content/uploads/2022/10/bizshirt3.jpg',

        'jacket1' : 'https://teamsunday.com/wp-content/uploads/2022/10/jacket1.jpg',
        'jacket2' : 'https://teamsunday.com/wp-content/uploads/2022/10/jacket2.jpg',
        'jacket3' : 'https://teamsunday.com/wp-content/uploads/2022/10/jacket3.jpg'
    }
]


// DESIGN STEPS

const designTitle = document.querySelector('.designTitle');
const designBody = document.querySelector('.designBody');
const designImg = document.querySelector('.designImg');


const designSteps = [
    {
        'step' : 'step1',
        'title' : 'Design Briefing',
        'body' : 'We’ll sit together and go through everything we need to design amazing clothing for your: brand guidelines, target audience, styles you like, …',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step1-1.png'
    },
    {
        'step' : 'step2',
        'title' : '3D Virtual Design',
        'body' : 'Our team of design experts creates a 3D example of your item, so you get the most realistic vision of the product.',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step2.png'
    },
    {
        'step' : 'step3',
        'title' : 'Technical Details',
        'body' : 'We go through the technical details of your product, Pantone colours, decoration techniques, exact positioning, …',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step3.png'
    },
    {
        'step' : 'step4',
        'title' : 'End result',
        'body' : 'We produce & deliver the items exactly as you ordered, so your team can enjoy your awesome new company fashion.',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step4-1.png'
    }
]


// Call functions
$('.btn-wrapper.design-steps > .primary-btn').on('click', showDesignSteps);
$('.btn-wrapper.product-wrapper > .primary-btn').on('click', showProducts);