import getQuote from "./getQuote";
const MockAdapter = require("axios-mock-adapter");
var axios = require("axios");

/*
Think about how you want to structure the tests, try to be intentional with everything you add.
Try to think of the specific cases that you'll want to cover.

Don't forget to mock the endpoint, it can make a lot of calls to an api if you aren't careful.
*/

var mock = new MockAdapter(axios);

describe('getQuote Method', () => {
	it("Should throw an error if not given a string", () => {
        expect.assertions(1);
        try {
			getQuote(3);
        } catch (error) {
            expect(error.message).toEqual("Name of person must be a string");
        }
    });

	it("Should throw an error if string is empty", () => {
        expect.assertions(1);
        try {
            getQuote('');
        } catch (error) {
            expect(error.message).toEqual("Please add the name of a person");
        }
    });

	it("Should return a random quote by Mark Twain", () => {
        expect(getQuote('Mark Twain')).toEqual(undefined);
    });

	it("should return name and quote if successful", async () => {
		const mockData = {
			name: "Mark Twain",
			quote: "test",
		};

		mock.onGet(
			"https://api.dictionaryapi.dev/api/v2/entries/en_US/mark-twain"
		).replyOnce(200, mockData);

		const name = await getQuote("Mark Twain");

		expect(name).toEqual(mockData);
	});
});
