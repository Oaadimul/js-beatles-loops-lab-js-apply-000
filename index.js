
function theBeatlesPlay(musicians, instruments) {
var phrases = [];
for (var i = 0; i < musicians.length; i++) {
  phrases.push(musicians[i] + " plays " + instruments[i]);
}
return phrases;
}

function johnLennonFacts() {
  var funfacts = [ "He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var i = 0
  while (funFacts.length < length) {
    funFacts.push ("!!!");
    i++;
  }
  return funFacts;
}

function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    num++
    
  } while (num < 15);
  return phrases;
}