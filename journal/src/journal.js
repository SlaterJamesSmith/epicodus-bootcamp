export function Entry(date, title, body) {
  this.date = date;
  this.title = title;
  this.body = body;
  this.consonantCount = this.countConsonant();
  this.vowelCount = this.countVowel();
  this.wordCount = this.countWord();
  this.teaser = this.getTeaser();
}

Entry.prototype.countConsonant = function () {
  return this.body.match(/[b-df-hj-np-tv-z]/gi).length;
};

Entry.prototype.countVowel = function () {
  return this.body.match(/[aeiou]/gi).length;
};

Entry.prototype.countWord = function () {
  return this.body.split(" ").length;
};

Entry.prototype.getTeaser = function () {
  var firstSentence = this.body.split(".")[0] + ".";
  if (firstSentence.split(" ").length <= 8) {
    return firstSentence;
  } else {
    return firstSentence.split(" ").slice(0,8).join(" ") + "...";
  }
};
