const wordCount = require('./wordCount');

// this gives us the ability to asses large blocks of text on line by line basis and is provided from within node.js
const lineReader = require('readline')
  .createInterface({
    input: require('fs')
      .createReadStream('file.txt')
  });

// global object that we mutate from within our wordCount function allows us to keep track of all wordCounts as we run line by line
const wordStore = {};
let topWords = [];

// this runs our function for each line of text, which reassess the top 3 words each time
lineReader.on('line', function(line){
  topWords = wordCount(line, wordStore);
});

// once line reader is done this function is run, which returns/logs our top words overall.
lineReader.on('close', () => {
  console.log(topWords)
});

// this file allows us to only store each line in memory at a time, instead of what could be hundreds and hundreds of lines.
// Note: if the text is one long line, this will simply assess it as one big line and not save us any memory. That instance would require further research

