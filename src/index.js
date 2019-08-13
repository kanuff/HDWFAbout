import './styles/development.css';
import Chart from './chart';
import queryField from './query_field';
import './styles/main.css';

 

if (process.env.NODE_ENV !== "production") {
    console.log("Development Mode!");
}

document.addEventListener('DOMContentLoaded', () => {
    const props = {}
    const root = document.getElementById("main");

    // Testing because I forgot how to vanilla js
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode("I'm being created within the index.js file to test if changes show");
    newDiv.appendChild(newContent);
    root.appendChild(newDiv);
    // Testing because I forgot how to vanilla js

    const dummyData = Chart.dummyData();
    Chart.build(dummyData);
    root.appendChild(queryField(props));

    
})
