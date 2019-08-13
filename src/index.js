import './styles/development.css';
import './styles/main.css';


if (process.env.NODE_ENV !== "production") {
    console.log("Development Mode!");
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("main");

    // Testing because I forgot how to vanilla js
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode("I'm being created within the index.js file to test if changes show");
    newDiv.appendChild(newContent);
    root.appendChild(newDiv);
    // Testing because I forgot how to vanilla js



    
})
