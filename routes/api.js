'use strict';

const Translator = require('../components/translator.js');

let translate = new Translator();

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale= req.body.locale;
      let translation = "";
      let newText = text;

      // if text input is empty
      if (text == "") {
        res.json({ error: 'No text to translate' });
        return;
      }

      // if text or locale not provided
      if (!locale || !text) {
        res.json({ error: 'Required field(s) missing' })
        return;
      }

      //translate to british
      if (locale == "american-to-british") {
        newText = translate.toBritish(text);
      } 
      //translate to american
      else if (locale == "british-to-american") {
        newText = translate.toAmerican(text);
      } 
      // if locale invalid
      else {
        res.json({ error: 'Invalid value for locale field' })
        return;
      }
      
      // if nothing to translate
      if (text == newText) {
        translation = "Everything looks good to me!"
      }
      else {
        translation = newText;
      }
      
      res.json({ text: text, translation: translation})
      
    });
};
