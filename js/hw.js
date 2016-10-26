

var hwString = "From fairest creatures we desire increase, That thereby beauty's rose might never die, But as the riper should by time decease, His tender heir might bear his memory: But thou contracted to thine own bright eyes, Feed'st thy light's flame with self-substantial fuel, Making a famine where abundance lies, Thy self thy foe, to thy sweet self too cruel: Thou that art now the world's fresh ornament, And only herald to the gaudy spring, Within thine own bud buriest thy content, And tender churl mak'st waste in niggarding: Pity the world, or else this glutton be, To eat the world's due, by the grave and thee";



// Function to split the string

function wordFrequency(stringToSplit) {

  // Funtion to split words into to strings
  var arrayOfStrings = stringToSplit.split(" ");

  // reated an Object to put array values
  var wordCount = {};

  // Adding array properties and values to Object
  arrayOfStrings.forEach(function(currentItem){
    var word=currentItem.toLowerCase();
    // if (currentItem.length > 1) {

    console.log(word.length);
    wordCount[word] = (wordCount[word] || 0);
    wordCount[word] += 1;



  });




  console.log(wordCount);

  return arrayOfStrings;
}



console.log(wordFrequency(hwString));
