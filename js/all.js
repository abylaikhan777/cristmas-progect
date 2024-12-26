






// /*!
// // Snow.js - v0.0.3
// // kurisubrooks.com
// */
// // Amount of Snowflakes
// var snowMax = 500;

// // Snowflake Colours
// var snowColor = ["#DDD", "#EEE"];

// // Snow Entity
// var snowEntity = "&#x2022;";

// // Falling Velocity
// var snowSpeed = 0.55;

// // Minimum Flake Size
// var snowMinSize = 12;

// // Maximum Flake Size
// var snowMaxSize = 24;

// // Refresh Rate (in milliseconds)
// var snowRefresh = 40;

// // Additional Styles
// var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

// /*
// // End of Configuration
// // ----------------------------------------
// // Do not modify the code below this line
// */

// var snow = [],
// 	pos = [],
// 	coords = [],
// 	lefr = [],
// 	marginBottom,
// 	marginRight;

// function randomise(range) {
// 	rand = Math.floor(range * Math.random());
// 	return rand;
// }

// function initSnow() {
// 	var snowSize = snowMaxSize - snowMinSize;
// 	marginBottom = document.body.scrollHeight - 770;
// 	marginRight = document.body.clientWidth - 15;

// 	for (i = 0; i <= snowMax; i++) {
// 		coords[i] = 0;
// 		lefr[i] = Math.random() * 15;
// 		pos[i] = 0.03 + Math.random() / 10;
// 		snow[i] = document.getElementById("flake" + i);
// 		snow[i].style.fontFamily = "inherit";
// 		snow[i].size = randomise(snowSize) + snowMinSize;
// 		snow[i].style.fontSize = snow[i].size + "px";
// 		snow[i].style.color = snowColor[randomise(snowColor.length)];
// 		snow[i].style.zIndex = 1000;
// 		snow[i].sink = snowSpeed * snow[i].size / 5;
// 		snow[i].posX = randomise(marginRight - snow[i].size);
// 		snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
// 		snow[i].style.left = snow[i].posX + "px";
// 		snow[i].style.top = snow[i].posY + "px";
// 	}

// 	moveSnow();
// }

// function resize() {
// 	marginBottom = document.body.scrollHeight - 20;
// 	marginRight = document.body.clientWidth - 15;
// }

// function moveSnow() {
// 	for (i = 0; i <= snowMax; i++) {
// 		coords[i] += pos[i];
// 		snow[i].posY += snow[i].sink;
// 		snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
// 		snow[i].style.top = snow[i].posY + "px";

// 		if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
// 			snow[i].posX = randomise(marginRight - snow[i].size);
// 			snow[i].posY = 0;
// 		}
// 	}

// 	setTimeout("moveSnow()", snowRefresh);
// }

// for (i = 0; i <= snowMax; i++) {
// 	document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
// }

// window.addEventListener('resize', resize);
// window.addEventListener('load', initSnow);



const  img = document.querySelector('#image');

const NUMBER_OF_SNOWFLAKES = 400;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 0.55;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = img.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('DOMContentLoaded', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


// setInterval(animate, 15);
animate()

const newHeader = document.querySelector(".header-changed");
const logo = document.querySelector('.logo')

window.addEventListener("scroll", () => {
  if(window.scrollY > 100) {
    logo.style.marginTop = '200'
    newHeader.classList.add("header-animation");
    newHeader.style.transition = "0.8s all";
  } else {
    newHeader.classList.remove("header-animation");
  }
});

let cards = [
    {
      URL: "https://ae04.alicdn.com/kf/Se762ebb02b924386863bfe7e63c874435.jpg_640x640.jpg",
      Name: "snowflake earrings",
      price: "300",
      bt: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 18H7M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    },
    {
      URL: "https://ae04.alicdn.com/kf/S51e6afb9c4bc46cab696bdd96cb1651av.jpg",
      Name: "wearth",
      price: "200",
      bt: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http:www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    },
    {
      URL: "https://ae04.alicdn.com/kf/Sae180ab551964dc09d77830304f8e657f.jpg",
      Name: "Gingerbread portret",
      price: "1599",
      bt: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    },
    {
      URL: "https://ae04.alicdn.com/kf/S0a7e9acf25d642509ecfd35d9c2f640cQ.jpg_640x640.jpg",
      Name: "soldier",
      price: "4.99", 
      bt: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    },
    {
      URL: "https://ae04.alicdn.com/kf/Sec99db13ee4c4350b762a664ede50584w.jpg",
      Name: "father frost hudi",
      price: "99.9",
      bt: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    },
    {
      URL: "https://ae04.alicdn.com/kf/Sa75e23ece7db477c8e6631b356d10cc6g.jpg",
      Name: " table game",
      price: "79.9",
      bt: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    }
  ]
  
  const gridCard = document.querySelector(".grid-card");
  
  cards.forEach((e) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('img')
    const cardName = document.createElement('h2');
    const price = document.createElement('p');
    const cart = document.createElement('button');
  
    card.classList.add('product');
  
    cardImage.src = e.URL;
    cart.innerHTML = e.bt;
    cardName.textContent = e.Name;
    price.textContent = e.price + '$';
   
    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(price);
    card.appendChild(cart)
    gridCard.appendChild(card);

    
    
    cardName.style.color = 'black';
    price.style.color = "rgb(195, 197, 199)";
    cart.style.width = "291px";
    cart.style.transform = "scalex(1.1)";
    //cart.style.= "50px";
    cart.style.borderBottomLeftRadius = "50px";
    cart.style.borderBottomRightRadius = "50px";

    card.addEventListener('mouseenter', () => {
      card.style.background = "rgba(174, 172, 172, 0.14)";
      price.style.color = "grey";
      card.style.transition = "all 0.7s";

    });
  
    card.addEventListener('mouseleave', () => {
      card.style.background = "rgb(247, 248, 249)";
      price.style.color = "rgb(195, 197, 199)";
    });

 });


 const loginForm = document.getElementById("form");
const errorMessage = document.getElementById("errormessage");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = document.getElementById("email").value;
  if (!emailValue.includes("@gmail.com") && !emailValue.includes("@mail.ru")) {
    errorMessage.classList.toggle("ani");
    errorMessage.textContent = "Please enter a valid email address";
  errorMessage.style.transition = "all 0.7s";
    errorMessage.style.color = "red";
  }else if (emailValue.length < 14) {
    errorMessage.classList.toggle("left");
    errorMessage.textContent = 'more than 6 characters required'
    errorMessage.style.color = "red";
  } else {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful";
  };
  
});

