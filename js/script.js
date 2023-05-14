/* Data to Show*/
const data = [
  {
   quote: `“April Showers”`, 
   emoji: '🍀', 
   image: `url(assets/HeartFlowerThingy.jpeg)`
  }, 
  {
   quote: `“Bring may flowers”`, 
   emoji: '🌼', 
   image: `url(assets/Sage.jpg)`
  },  
  {
   quote: `“May flowers bloom in full array”`, 
   emoji: '🌸' , 
   image: `url(assets/Ribes_sanquineum.jpeg)`
  },
  {
    quote: `“Bringing colors to brighten our day”`, 
    emoji: '🌞', 
    image: `url(assets/gaillardia.jpeg)`
  },
  {
    quote: `“As the sun shines down, they dance and sway.”`, 
    emoji: ':D', 
    image: `url(assets/rhododendron.jpeg)`
  }
];

const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
quote.innerHTML = "April Showers";
// Check-Check: change emoji text
emoji.innerHTML = "👍️";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(assets/HeartFlowerThingy.jpeg)';

let itemNumber = 0;
const nextButton = document.querySelector("img.next");
const prevButton = document.querySelector("img.prev");
const randButton = document.querySelector("img.random");




nextButton.addEventListener("click", () => {

  itemNumber = itemNumber + 1;
  
  if ( itemNumber > data.length -1 ) {
    itemNumber = 0;
  }

  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  
prevButton.addEventListener("click", () => {
  itemNumber = itemNumber - 1;
  if ( itemNumber < 0 ) {
    itemNumber = data.length -1;
  }  
  
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

randButton.addEventListener('click', () => {
  
  randomNumber = Math.floor ( Math.random() * data.length );
  
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

document.addEventListener('keyup', (event) => {
  
  if ( event.key === "ArrowRight" ) {
   
  itemNumber = itemNumber + 1;
  
  if ( itemNumber > data.length -1 ) {
    itemNumber = 0;
  }
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  if ( event.key === "ArrowLeft" ) {
  
  itemNumber = itemNumber - 1;
  
  if ( itemNumber < 0 ) {
    itemNumber = data.length -1;
  }  
  
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  if ( event.key === " ") {
    
    randomNumber = Math.floor ( Math.random() * data.length );

 
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  
  }
  
});