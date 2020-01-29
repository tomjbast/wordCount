# MatchesFashion - Word Count Task

When provided with a string of text, return the top 3 most occurring words, in descending order as an array of strings. 

### How to use wordCount

Within the repo we have the main wordCount function. This takes two arguments, a string and an object (although this is a default parameter so does not need to be passed). The function is heavily commented so I wont go into too much detail here.

When called the function performs three main things:

String sanitisation  
Creates an object to count each words occurrences   
Creates an array to sort the number of occurrences  
 
### Large Texts

You will note there is a file.txt as well as a stream.js file. This txt file contains 100 paragraphs worth of text. We can handle such large data without holding the whole text in memory by streaming each line.
Node has this as in built functionality as such: 

```
const lineReader = require('readline')
  .createInterface({
    input: require('fs')
      .createReadStream('file.txt')
  });
```

Run our function with the large text file as an input by running

```
node stream
```

### Run Tests

```
npm test
```

### Next Steps

I would like to split the function into smaller parts. This would allow for much more in depth testing, as currently our tests essentially test the whole function. It would also be interesting to learn and understand how to handle one massive line of text, but in this case I've made the assumption the text will be presented to us in lines. 

It was interesting to play with regex again after such a long time and limited exposure on a day a to day basis. And diving into streaming was really interesting and a lot less complex than I anticipated. 
