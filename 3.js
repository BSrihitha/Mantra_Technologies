let cheerio = require('cheerio');
let req = require('request');
let testUrl = "https://en.wikipedia.org/wiki/Node.js";

//Given an URL, prints all the properties associated with all the <meta> tags in the URL
//Considers the node JS wiki as test data
req({
      method: 'GET',
      url: testUrl},
      (err, res, body) =>
      {
        if(err)
            console.error(err);
        let $ = cheerio.load(body);
        let metaData = $('meta');

        for(let i = 0; i < metaData.length; i++)
        {
            let val = JSON.stringify(metaData[i].attribs);
            console.log(val + '\n');
        }
      }
);
