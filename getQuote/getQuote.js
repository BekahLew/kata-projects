/*
Problem Description: write a method that retrieves a quote of the from the quotes api.
The method will need to:
- Take a name (string) of a person to get a quote from.

Focus:
Working Code - the most important part to focus on is that the code is working. Get the core functionality working before moving on to error handling or testing.
Testing - when you test an api endpoint, you need to mock that endpoint. As a team, our standard library is axios-mock-adapter.
Variable naming - Make the names read well. This is an opportunity to make your code read like a book. Don't make the user guess what something means.

Notes:
Take the lessons from last week and move forward with them!
Take your time and focus on just getting the base code to work as expected.
Don't overcomplicate things!

Libraries:
axios
axios-mock-adapter

API:
https://pprathameshmore.github.io/QuoteGarden/
Example API Call:
https://quote-garden.herokuapp.com/api/v3/quotes?author=Mark%20Twain
*/

const axios = require("axios");

const getQuote = (nameOfPerson) => {
    if(typeof nameOfPerson !== 'string') {
        throw new Error('Name of person must be a string');
    }
    if (nameOfPerson.length === 0) {
        throw new Error("Please add the name of a person");
    }

    const quote = axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${nameOfPerson}`
    );

    axios.get("https://api.dictionaryapi.dev/api/v2/entries/en_US/mark-twain")
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
        });

    return {
        name: response.data,
        quote: response.quote,
    };
};

getQuote('Mark Twain');

module.exports = getQuote;
