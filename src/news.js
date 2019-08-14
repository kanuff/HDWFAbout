import { news_api_key } from '../config/keys';

const headlines = 'https://newsapi.org/v2/top-headlines?';
const everything = "https://newsapi.org/v2/everything?";
const addCountry = country => (`country=${country}&`);
const addSource = source => (`sources=${source}&`);
const addQuery = query => (`q=${query}&`); //searches for query in both title and body
const addFrom = start => (`from=${start}&`);
const addTo = end => (`to=${end}&`);
const addLanguage = ln => (`language=${ln}&`);
const addPagesize = int => (`pageSize=${int}&`);
const page = int => (`page=${int}&`);

const apiKey = `apiKey=${news_api_key}`

export const fetchHeadlines = () => {
    const url = headlines + addCountry('us') + apiKey;
    const req = new Request(url);
    console.log("Requesting top 20 headlines!")
    return fetch(req)
            .then(response => console.log(response.json()))    
};

export const fetchEverythingFor = (query) => {
    const url = everything + addQuery(query) + apiKey;
    const req = new Request(url);
    console.log(`Requesting top 20 articles about ${query}!`)
    return fetch(req)
        .then(response => response.json())
}


