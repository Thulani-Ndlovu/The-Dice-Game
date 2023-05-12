let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

document.querySelector("img").setAttribute("src","./images/dice"+randomNumber1+".png");
