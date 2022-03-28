# Guess My Number - JavaScript Game - DOM, Web APIs

### About The Project
In this project we will guess a secret number which is between 1 and 20. There is an input that we can write a number. When we click the "check" button we will get a message at the right side. The message depends on our number and it will say "Too low", "Too high" or "Correct number".

The score starts with a score of 20 and after one failed guess it will decrease to 19. So basically after each guess that we fail, the score decreases by one.

If we want to play again, we can simply click "Again" button and it all resets everything except for "Highscore". "Highscore" is another feature of this small application that shows our Higher score. 

### The Goal of the Project 
🖍️ To practice DOM manipulation and web APIs

🖍️ Selecting and manipulating the elements with JS 

      console.log(document.querySelector('.className').textContent);
   
      document.querySelector('.className');
   
      document.querySelector('.className').value;
   
      document.querySelector('.className').textContent;
   
      document.querySelector('#idName');
   
🖍️ Using event listener, mouse click, mouse moving, key press, ...

🖍️ To practice the built-in methods and built-in objects, Math.random(), Math.trunc(), Number(), Math()

🖍️ Practicing the conditional statements; if, else, else-if and ternary operator

🖍️ Manipulating CSS style with JavaScript

### Event Listener
In order to listen for events, we first need to select the element where the event should happen, and then we can call addEventListenere() method. After that, we need to pass in the type of the event and then we should tell the event listener what to do by defining a function. This function will contain exactly the code that should be executed whenever this click event happens. That function is called as the event handler. addEventListener() method is a special kind of function. That's because as a second argument we need to pass in a function value. A function is also just a value, so we can also pass it into another function as an argument, just like any other value like string, number, ... We do not call this function anywhere, we only define the function and then pass it into the event handler. This function will not be called immediately once the script is executed. This function will only be called as soon as the event happens.

### Number Function 
Whenever we get something from the user interface, for example from an input field, it usually is a string. We need to first convert this string to a number, for this purpose we use Number function.

### The Math.trunc() Method
The Math.trunc() function returns the integer part of a number by removing any fractional digits.

### The Math.random() Method
The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1).
   
### DOM Manipulation
DOM stands Document Object Model, it is basically, a structured representation of HTML documents. It allows JS to access HTML elements and styles to manipulate them. DOM is 
basically a connection point between HTML document and JS code. DOM is automatically created by the browser as soon as the HTML page loads. In DOM tree we use the terms "parent element", "child element" and "sibling element" and so on. DOM always start with the document object, at the very top. Document is a special object that is the entry point to the DOM. Then the first child element of the document is usually the HTML element because it is the root element in all HTML documents. Next, HTML element has two child elements head and body. Inside head and body we have more child elements. 

### Web APIs (Application Programming Interface)
DOM and DOM Methods are part of web APIs. Web APIs are like libraries that written in JS and they are automatically available for us to use. 

![DOM tree](https://www.tutorialstonight.com/assets/js/dom-tutorial.webp)
