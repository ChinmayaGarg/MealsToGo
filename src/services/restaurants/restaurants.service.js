import { mocks } from "./mock";
import camelize from "camelize";

// A request to get restaurants
// The parameters of the RestaurantRequest is what the request needs in order to get the specific data/information.
export const RestaurantsRequest = (location = "37.7749295,-122.4194155") => {
  // return a new promise, then new promise will take in resolve and reject function and inside the promise function we will say get the mock, if no mock for the location then reject and say 'not found'. If we do have a mock then resolve the mock.
  return new Promise((resolve, reject) => {
    const mock = mocks[location]; // get the mock from the data stored in mocks
    if (!mock) {
      // if mock not found for the parameter
      reject("not found"); // reject by saying not found
    }
    resolve(mock); // esle if mock found then resolve the mock
  });
};
// Whenever we do an API call, it is going to be something called a promise.
// A promise is something that you have to await, it is something that runs asynchronously, it is something that happens in the future.

//

// Every time you create a promise, it is [dot]thenable. So, it is awaiting something in the future.
// It is a way of saying, our restaurant request is not going to return immediately, it is going to return sometime in the future.
// We are doing [dot]then and [dot]then returns us the result as an inner function.
// By doing [dot]catch we could see what would happen if we got error.
// We have mimiced the request call from the real API in a very very simple fashion.
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours.open_now,
    };
  });
  const newResult = camelize(mappedResults);
  return newResult;
};

RestaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
// We will use it by setting up the context, which will be doing the request for us and also exposing the data globally

// There are certain functions out there that work with Promises, "fetch" is one of them.
// fetch is a standard that is built into evry browser, and what fetch does is it is an interface around promises that grabs the ability to talk to external APIs.
// const myFetch = fetch("URL from where JSON is to be fetched").then(response=>response.json()).then(json=>console.log(json));
// Anytime we are fetching json, when it is returned in the json format, we will do above 2 interactions ([dot]then statements) 1. respose=>response.json() (This is to parse the JSON) 2. Then another [dot]then i.e. json=>console.log(json) (Here we get the actual response and we console out the response)

//
//
//
//
//
// Promise Explained:
// "new Promise" it is the keyword, this keyword is used to define promise.
// A promise is like a binding contract, it is promising that you going to get something in the future.
// resolve contains the result that we were promised to get back at the later face
// There are certain functions out there that work with promises.
// "fetch" is one of them. fetch is something that is built into every browser.
// what fetch does is, it is an interface around promises that wraps the ability to talk to external APIs

// const myFetch = fetch("some_URL")
//   .then((response) => response.json()) // response will comeback as a JSON object, this command "(response) => response.json()" is used to parse the JSON and is done whenever the JSON object is returned
//   .then((json) => console.log(json)); // here we get the actual response in "json" and we console log it here.
