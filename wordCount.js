function wordCount(string, wordStore = {}) {

  // here we use some horrible regex to sanitise the string for use.
  const sanitisedString = string
    .replace(/[^a-zA-Z0-9'\s]/g, '') // remove everything that is not alphanumeric, apostrophe or whitespace
    .replace(/\s+/g, ' ') // replace multiple spaces with a single space
    .toLowerCase() // lowercase everything for easy comparison
    .trim();// remove whitespace from end and start of string

  // lets get out of our function asap if the string has no characters following sanitisation
  if (!sanitisedString.length) {
    return []
  }

  // split our sting into an array for traversal and manipulation
  const words = sanitisedString.split(' ');

  // here we add values to our wordStore object that will hold each word as a key, if the word already exists we increment its value
  words.forEach(word => {
    if (!wordStore[word]) {
      wordStore[word] = 1;
    } else {
      wordStore[word]++;
    }
  });

  let sortArray = [];
  // now we convert our object into an array of arrays so we can sort the data
  for (let word in wordStore){
    sortArray.push([word, wordStore[word]])
  }

  // this gives us a sorted array, with the most common occurring word at position [0]
  const sortedArray = sortArray.sort((a,b) => {
    return b[1]-a[1]
  });

  // lets do a small loop just taking the first three, extracting the word into a new array and return that array
  let mostCommonWords = [];
  for (let i=0;i<3;i++){
    // check here to see if value exists. If it doesnt it means we have less than three words in our original string.
    if (!sortedArray[i]){
      break
    }
    mostCommonWords.push(sortedArray[i][0].replace(/[^a-zA-Z0-9'\s]/g, ''))
  }

  return mostCommonWords;
}

module.exports = wordCount;
