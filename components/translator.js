const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')


const amOnlyKeys = Object.keys(americanOnly);
const amToBrSpeKeys = Object.keys(americanToBritishSpelling);
const amToBrSpeValues = Object.values(americanToBritishSpelling);
const ameToBrTitKeys = Object.keys(americanToBritishTitles);
const ameToBrTitValues = Object.values(americanToBritishTitles);
const briOnlyKeys = Object.keys(britishOnly);

class Translator {

  //if american-to-british locale
   toBritish(text) {
     let translated = text; 
     
     //go through words listed in dict
     amOnlyKeys.map((word) => {
       let regex = new RegExp("\\b" + word + "\\b", 'gi');
       //check id word is in text input
       if ((regex).test(text)) {
        //translate and highlight word
        translated = translated.replace(regex, '<span class="highlight">' + americanOnly[word] + "</span>")
    }})

     amToBrSpeKeys.map((word) => {
       let regex = new RegExp("\\b" + word + "\\b", 'gi');
       if ((regex).test(translated)) {
         translated = translated.replace(regex, '<span class="highlight">' + americanToBritishSpelling[word] + "</span>")
    }})

     
     ameToBrTitKeys.map((word) => {
       let regex = new RegExp("\\b" + word, 'gi');
       if ((regex).test(translated)) {
         let title = word.replace(/\\/, "")
         translated = translated.replace(regex, '<span class="highlight">' + americanToBritishTitles[word][0].toUpperCase() + americanToBritishTitles[word].slice(1).toLowerCase() + "</span>")
    }})

    // check if text has hour in it
    if ((/(^|\s)(2[0-3]|[01]?[0-9])[.:]([0-5]?[0-9])($|\D)/g).test(translated)) {
      // replace : for .
      translated = translated.replace(/(^|\s)(2[0-3]|[01]?[0-9])[:]([0-5]?[0-9])($|\D)/g, '$1<span class="highlight">$2.$3</span>$4');
    }
     
    return translated;
  
  }
    //if british-to-american locale
  toAmerican(text) {
    let translated = text; 
     
     briOnlyKeys.map((word) => {
       let regex = new RegExp("\\b" + word + "\\b", 'gi');
       if ((regex).test(text)) {
        translated = translated.replace(regex, '<span class="highlight">' + britishOnly[word] + "</span>")
         
    }})

     amToBrSpeValues.map((word) => {
       let regex = new RegExp("\\b" + word + "\\b", 'gi');
       let findKey = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word)
       if ((regex).test(translated)) {
        translated = translated.replace(regex, '<span class="highlight">' + findKey + "</span>")
     
    }})

    ameToBrTitValues.map((word) => {
       let regex = new RegExp("\\b" + word + "\\b", 'gi');
       let findKey = Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word)
      let cleanKey = findKey.replace(/\\/, "")
       if ((regex).test(translated)) {
        translated = translated.replace(regex, '<span class="highlight">' + cleanKey[0].toUpperCase() + cleanKey.slice(1).toLowerCase() + "</span>")
       
    }})
    // check if text has hour in it
    if ((/(^|\s)(2[0-3]|[01]?[0-9])[.:]([0-5]?[0-9])($|\D)/g).test(translated)) {
      //replace . for :
      translated = translated.replace(/(^|\s)(2[0-3]|[01]?[0-9])[.]([0-5]?[0-9])($|\D)/g, '$1<span class="highlight">$2:$3</span>$4');
    }

   return translated;  
}
}
  

module.exports = Translator;