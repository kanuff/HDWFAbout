import './styles/development.css';
import { 
    fetchHeadlines,
    fetchEverythingFor
 } from './news';
import Chart from './chart';
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
    // newDiv.addEventListener("click", fetchHeadlines); //this works, currently commented out to prevent unnessecarily using the api key
    // newDiv.addEventListener("click", fetchEverythingFor); //this works, currently commented out to prevent unnessecarily using the api key
    root.appendChild(newDiv);

    const props = {}
    Chart(props);
    
})
