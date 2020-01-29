const wordCount = require('../wordCount');

describe('test wordCount', () => {

  it('removes line breaks and punctuation correctly', () => {

    const mostCommonWords = wordCount(firstString);
    expect(mostCommonWords).toEqual(['a', 'of', 'on']);
  });

  it('lowerCases', () => {

    const mostCommonWords = wordCount(secondString);
    expect(mostCommonWords).toEqual(['e', 'ddd', 'aa']);
  });

  it('trims spacing at beginning and end', () => {

    const mostCommonWords = wordCount(thirdString);
    expect(mostCommonWords).toEqual(['won\'t', 'wont']);
  });

  it('returns empty array if string contains no words', () => {

    const mostCommonWords = wordCount(fourthString);
    expect(mostCommonWords).toEqual([]);
  });
});

const firstString = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad won't on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;

const secondString = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e';

const thirdString = '  //wont won\'t won\'t   ';

const fourthString = '';

