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
    
    const chart = new Chart(props)
    props.chart = chart

    root.appendChild(queryField(props));

    console.log(chart)
    const dummyData = chart.dummyData();
    console.log(dummyData)
    const otherData = [
        {x:0,y:1},
        {x:1,y:2},
        {x:2,y:4},
    ]
    chart.build(dummyData);
    console.log(chart)
    const svg = d3.select('svg')
    console.log(svg)
    
    
    setInterval(() => {
        console.log("Rerendering");
        const newData = chart.dummyData()
        chart.render(newData)}, 5000)
        //     svg.data()
        // }, 2000)
        
    
    
})
