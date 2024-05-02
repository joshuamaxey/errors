const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {


  describe("Word constructor function", function () {
    let word
    beforeEach(() => {
      word = new Word('word')
    });

    it('should have a "word" property', function () {
      expect(word).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal('word')
    });
  });

  describe("removeVowels function", function () {
    let word = new Word('word')
    let newWord = word.removeVowels()
    it("should return a the word with all vowels removed", function () {
      expect(newWord).to.equal('wrd')
    });
  });

  describe("removeConsonants function", function () {
    let word = new Word('word')
    let newWord = word.removeConsonants()
    it("should return the word with the consonants removed", function () {
      expect(newWord).to.equal('o')
    });
  });

  describe("pigLatin function", function () {
    let word = new Word('word')
    let newWord = word.pigLatin()
    it("should return the word converted to pig latin", function () {
      expect(newWord).to.equal('ordway')
    });
  });
});
