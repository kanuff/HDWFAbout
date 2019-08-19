import './styles/development.css';
import Chart from './chart';
import queryField from './query_field';
import './styles/main.css';

 

if (process.env.NODE_ENV !== "production") {
    console.log("Development Mode!");
}

document.addEventListener('DOMContentLoaded', () => {
    const props = {}
    const main = document.getElementById("main");
    const secondTitle = document.getElementById("second-title")
    
    const chart = new Chart(props)
    props.chart = chart

    main.insertBefore(queryField(props), secondTitle);


    const dummyData = chart.dummyData();
    chart.build(dummyData);

})
