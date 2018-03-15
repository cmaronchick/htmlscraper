const rp = require('request-promise');
var Twitter = require('twitter');
const cheerio = require('cheerio');
const Table = require('cli-table');
let tweetArray = [];

// const options = {
//     url: 'https://twitter.com/search?q=%23PHIvsNE&src=typd',
//     json: true
// }

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

//Get this data from your twitter apps dashboard

// make a directory in the root folder of your project called data
// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file

var client = new Twitter( {
    "consumer_key": "Uyw0DmxJu0gVP1f2UyaJgF2wG",
    "consumer_secret": "oqIyTa3lpFztdChepuRMOpkOr1slBNPzO25g2hPuGVVcV9nZN9",
    "access_token_key": "772904868340076544-zdTOuleoLgM5Vt7ra7dnXJPWZMcJdxZ",
    "access_token_secret": "uSqHvpdmo9qcZOe2P2L8v0ob4WxPrTSBCqVIKnn7Cq9Or",
});

//Example calls

// twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);

// twitter.getMentionsTimeline({ count: '10'}, error, success);

// twitter.getHomeTimeline({ count: '10'}, error, success);

// twitter.getReTweetsOfMe({ count: '10'}, error, success);

// twitter.getTweet({ id: '1111111111'}, error, success);


//
// Get 10 tweets containing the hashtag haiku
//

var searchResults = client.get('search/tweets',{'q':'#umbcvsuba','count': 2}, function(error, tweets, response) {
    if(error) throw error;
    //console.log(tweets);  // The favorites. 
    var responseTweets = response.statuses;
    //console.log(responseTweets.length);
    for (tweet in response.statuses) {
        tweetArray.push({twitterUser: tweet.user.name, twitterText: tweet.text})
    }
    
console.log(tweetArray);
console.log(response);  // Raw response object. 
  });

//
// Get 10 popular tweets with a positive attitude about a movie that is not scary
//

// twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);


// rp(options).then((data) => {
//     let promises = [];
//     let userData = [];
//     for (let user of data.page) {

//     }
// })