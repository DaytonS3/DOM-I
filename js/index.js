const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])






//NAVIGATION

let NavA = document.querySelectorAll('a');



NavA[0].textContent = siteContent.nav["nav-item-1"]
NavA[1].textContent = siteContent.nav["nav-item-2"]
NavA[2].textContent = siteContent.nav["nav-item-3"]
NavA[3].textContent = siteContent.nav["nav-item-4"]
NavA[4].textContent = siteContent.nav["nav-item-5"]
NavA[5].textContent = siteContent.nav["nav-item-6"]


const navItems = document.querySelectorAll('a');
navItems.forEach( function( currentValue ){
  currentValue.style.color = 'green';
});


//CALL TO ACTION

//h1
let CTAh1 = document.querySelectorAll('h1');

CTAh1[0].textContent = siteContent.cta["h1"]


//button
let CTAButton = document.querySelectorAll('button');

CTAButton[0].textContent = siteContent.cta['button'];

//img
let CTAImg = document.querySelector('#cta-img');

CTAImg.src = "img/header-img.png";
CTAImg.alt = "Logo Image"


//MAIN-CONTENT


//Features
let featuresH4 = document.querySelectorAll('h4');

featuresH4[0].textContent = siteContent["main-content"]["features-h4"];


let featuresP = document.querySelectorAll('p');

featuresP[0].textContent = siteContent["main-content"]["features-content"];


//About
let aboutH4 = document.querySelectorAll('h4');

aboutH4[1].textContent = siteContent["main-content"]["about-h4"];


let aboutP = document.querySelectorAll('p');

aboutP[1].textContent = siteContent["main-content"]["about-content"];


//Middle-Img
let middleImg = document.getElementById('middle-img');

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//services
let servicesH4 = document.querySelectorAll('h4');

servicesH4[2].textContent = siteContent["main-content"]["services-h4"];


let servicesP = document.querySelectorAll('p');

servicesP[2].textContent = siteContent["main-content"]["services-content"];


//Product
let ProductH4 = document.querySelectorAll('h4');

ProductH4[3].textContent = siteContent["main-content"]["product-h4"];


let ProductP = document.querySelectorAll('p');

ProductP[3].textContent = siteContent["main-content"]["product-content"];


//Vision
let visionH4 = document.querySelectorAll('h4');

visionH4[4].textContent = siteContent["main-content"]["vision-h4"];


let visionP = document.querySelectorAll('p');

visionP[4].textContent = siteContent["main-content"]["vision-content"];


//Contact
let contactH4 = document.querySelectorAll('h4');

contactH4[5].textContent = siteContent["contact"]["contact-h4"];

let contactPOne = document.querySelectorAll('p');

contactPOne[5].textContent = siteContent["contact"]["address"];

let contactPTwo = document.querySelectorAll('p');

contactPTwo[6].textContent = siteContent["contact"]["phone"];

let contactPThree = document.querySelectorAll('p');

contactPThree[7].textContent = siteContent["contact"]["email"];


//Footer
let footerP = document.querySelectorAll('p');

footerP[8].textContent = siteContent["footer"]["copyright"];










// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// },
// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },
// };