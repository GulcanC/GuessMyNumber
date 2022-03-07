# Guess My Number - JavaScript Game - DOM, Web APIs

### About The Project
This project is to guess a secret number which is between 1 and 20. There is an input that we can write a number. When we click the "check" button we will get a message at the right side. The message depends on our number and it will say "Too low", "Too high" or "Correct number".
The score starts with a score of 20 and after one failed guess it will decrease to 19. So basically after each guess that we fail, the score decrease by one. 
If we want to play again, we can simply click "Again" button and it all resets everything except for "Highscore". "Highscore" is another feature of this small application that 
shows our Higher score. 

### The Goal of the Project 
🖍️ To practice DOM manipulation

🖍️ Selecting and manipulating the elements with JS 

   console.log(document.querySelector('.className').textContent);
   
   document.querySelector('.className');
   
   document.querySelector('.className').value;
   
   document.querySelector('.className').textContent;
   
   document.querySelector('#idName');
   
   

### DOM Manipulation
DOM stands Document Object Model, it is basically, a structured representation of HTML documents. It allows JS to access HTML elements and styles to manipulate them. DOM is 
basically a connection point between HTML document and JS code. DOM is automatically created by the browser as soon as the HTML page loads. In DOM tree we use the terms "parent element", "child element" and "sibling element" and so on. DOM always start with the document object, at the very top. Document is a special object that is the entry point to the DOM. Then the first child element of the document is usually the HTML element because it is the root element in all HTML documents. Next, HTML element has two child elements head and body. Inside head and body we have more child elements. 

### Web APIs (Application Programming Interface)
DOM and DOM Methods are part of web APIs. Web APIs are like libraries that written in JS and they are automatically available for us to use. 

![DOM tree](https://www.tutorialstonight.com/assets/js/dom-tutorial.webp)
