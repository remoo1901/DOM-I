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

// nav

 let navLinks = document.querySelectorAll("a");

navLinks.forEach((item, i) => {
  console.log(item,i)
  item.textContent = siteContent["nav"]["nav-item-" +(i+1)];
})

// navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
 //navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
 //navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
 //navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
 //navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
 //navLinks[5].textContent = siteContent["nav"]["nav-item-6"];


 

 // cta

 let h1Link = document.querySelector("h1");
 h1Link.textContent = siteContent["cta"]["h1"];

 let btn = document.querySelector("button")
 btn.textContent = siteContent["cta"]["button"];

 let headerImg = document.querySelector("#cta-img");
 headerImg.setAttribute("src", siteContent["cta"]["img-src"])


 // main-content & contact

 let h4Links = document.querySelectorAll("h4");

h4Links[0].textContent = siteContent["main-content"]["features-h4"];
 h4Links[1].textContent = siteContent["main-content"]["about-h4"];
 h4Links[2].textContent = siteContent["main-content"]["services-h4"];
 h4Links[3].textContent = siteContent["main-content"]["product-h4"];
 h4Links[4].textContent = siteContent["main-content"]["vision-h4"];

 // H4 contact
 
 h4Links[5].textContent = siteContent["contact"]["contact-h4"];


 let pLinks = document.querySelectorAll("p");

 pLinks[0].textContent = siteContent["main-content"]["features-content"];
 pLinks[1].textContent = siteContent["main-content"]["about-content"];
 pLinks[2].textContent = siteContent["main-content"]["services-content"];
 pLinks[3].textContent = siteContent["main-content"]["product-content"];
 pLinks[4].textContent = siteContent["main-content"]["vision-content"];

 // P contact
 pLinks[5].textContent = siteContent["contact"]["address"];
 pLinks[6].textContent = siteContent["contact"]["phone"];
 pLinks[7].textContent = siteContent["contact"]["email"];

 // footer

 pLinks[8].textContent = siteContent["footer"]["copyright"];

 let midImg = document.querySelector(".middle-img");
 midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

 
 //.appendChild()

let addA = document.createElement("a");
let addEle = document.createTextNode("Login");
addA.appendChild(addEle);
document.querySelector("nav").appendChild(addA);

//.prepend()

let addAA = document.createElement("a");
let addEleA = document.createTextNode("Admin");
addAA.prepend(addEleA);
document.querySelector("nav").prepend(addAA);


//nav color

let navColor = document.querySelectorAll("a");

navColor.forEach((element) => {element.style.color = "green";})


//navColor[0].style.color  ="green";
//navColor[1].style.color  ="green";
//navColor[2].style.color  ="green";
//navColor[3].style.color  ="green";
//navColor[4].style.color  ="green";
//navColor[5].style.color  ="green";
//navColor[6].style.color  ="green";
//navColor[7].style.color  ="green";


navColor.forEach((element) => {element.style.cursor = "pointer";})
