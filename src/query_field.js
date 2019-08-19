import { fetchEverythingFor } from './news'
import { processData } from './sentiment';


export default (props) => {
    const form = document.createElement("form");
    
    const queryInput = document.createElement("input");
    queryInput.setAttribute("type", "text");
    queryInput.setAttribute("class", "query-field");

    setTimeout( () =>{
        typingWord(queryInput);
    }, 1000)
    
    form.appendChild(queryInput)
    form.addEventListener("input", () => debouncedTyping(event, props, queryInput))
    // form.addEventListener("submit", () => { handleTyping(event, props, queryInput)})
    form.addEventListener("submit", () => { event.preventDefault()})
                            
    return (
        form
    )
}

const typingWord = (queryInput) => {
    const options = [
        "Hong Kong",
        "bees",
        "bears",
        "beets",
        "Congress",
        "paper Sales",
        "cheese",
        "the news"
    ]
    const str = options[Math.floor(Math.random() * options.length)]
    let i = 0;

    const cycle = setInterval( function(){
        const rand = Math.random()
        if (rand > 0.3) {
            i++
            queryInput.setAttribute("placeholder", str.slice(0, i))
        }
        if (i >= str.length){
            clearInterval(cycle)
            queryInput.removeEventListener("focus", clearInput(queryInput, cycle))
            setTimeout(()=>{
                queryInput.setAttribute("placeholder", "")
                typingWord(queryInput)
            }, 1500)
            
        }
    }, 300)
    queryInput.addEventListener("focus", clearInput(queryInput, cycle))
}

const clearInput = (queryInput, cycle) => () => {
    clearInterval(cycle)
    queryInput.setAttribute("placeholder", "")
}

const handleTyping = (event,props, queryInput) => {
    event.preventDefault();
    const chart = props.chart
    const value = queryInput.value;
    console.log(`I WAS SUBMITTED WITH THE TEXT ${value}`)
    fetchEverythingFor(value)
        .then(response => {
            const payload = {}
            payload.query = value
            payload.articles = response.articles
            return payload
        })
        .then(payload => processData(payload)) 
        .then((payload) => {
            chart.render(payload)
        })
}


// Use for testing functionality, sourced from: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
const debounce = (delay, fn) => {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}

const debouncedTyping = debounce(700, handleTyping);

