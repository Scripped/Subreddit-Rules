var errortext = "error | an error occured.";

console.log()
console.log("* | about | *");
console.log()

console.log("this is a subreddit rule generator.");
console.log("it reads out the rules of a subreddit.");

console.warn("this was made by a beginner");

console.log()
console.log("* | contact | *");
console.log()
console.log("github | https://github.com/Scripped");
console.log("roblox | https://www.roblox.com/users/1957038621/profile");

// --------------------------------- //
const prompt = require('prompt-sync')({sigint: true});
var subreddit = prompt("enter a subreddit: r/");
console.log("generating rules... (this will take a while depending on how many rules there are)");

// --------------------------------- //

const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = "https://www.reddit.com/r/"+ subreddit +"/";


// --------------------------------- //

puppeteer
    .launch()
    .then(function(browser) {
        return browser.newPage();
    })
    .then(function(page) {
        return page.goto(url).then(function() {
            return page.content();
        })
    })
    .then(function(html) {
        $('._8ZLJI1-ZiP7pHJ_yO1L4Z', html).each(function() {
            console.log($(this).text());
        })
    })
    .catch(function(err) {
        console.log(errortext)
    });


// --------------------------------- //

console.log("tip: click CTRL + C when you have finished reading.")
console.log()