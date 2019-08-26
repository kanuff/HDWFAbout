# HDWFAbout

## Background and Overview
H(ow) D(id) W(e) F(eel) About is a data-visualization project aimed at quantifying and displaying news' sentiment towards topics over time. Users can input a word or phrase, and a chart will be displayed showing recent news sentiment over the past week, with options to change the time-range.

When a topic has a particularly large change in sentiment (_dS_) over a short period of time (_dt_), HDWFAbout will attempt a second query to gather historical events that correspond with the time-range (_t2_ - _t1_ = _dt_) in which the large _dS_ occured and display interactive event markers on the chart, giving the user the ability to read articles and explore more about the topic.

## Functionality and MVP
With HDWFAbout, users will be able to:

- [ ] Search any word or phrase
- [ ] Sort articles based on sentiment
- [ ] Read any article from within the daterange


Additional features for this project are:
- [ ] Filtering articles by location
- [ ] Saving different query results and comparing them

## Architecture and Technologies

This project will use:
- Vanilla Javascript for logic and user interactions
- `D3` for data visualization
- The `newsapi` to fetch news article data per user queries
- The `sentiment` module to perform sentiment analysis

The main files will be:
- `hdwfa.js` which houses all sub-parts and handles rendering
- `sentiment.js` which holds the logic to perform sentiment analysis
- `news.js` which fetches news articles and prepares the data for analysis

## Wireframes

- ![HWDFAbout Main View Page](https://wireframe.cc/zpuAPH)
- <https://wireframe.cc/zpuAPH>


## Implementation Timeline

### Day 1
- [ ] Get setup with News API and be able to request and receive a response
- [ ] Pick and study D3 tutorials
- [ ] Setup basic Node backend

### Day 2
- [ ] Finish D3 tutorials
- [ ] Build out API interactions
- [ ] Build the basic sentiment analysis processes

### Day 3
- [ ] Be able to make requests to News API, have the data returned, processed, and graphed
- [ ] Build basic layout for the data rendering
- [ ] Create functionality for detecting large _dS/dt_
- [ ] Add functionality for in-depth analysis based on large _dS/dt_

### Day 4
- [ ] Finalize visuals
- [ ] Implement filtering by location
- [ ] Implement saving up to 3 queries to display all at once on the graph
