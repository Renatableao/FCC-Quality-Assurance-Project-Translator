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

      if (text == "") {
        res.json({ error: 'No text to translate' });
        return;
      }
      
      if (!locale || !text) {
        res.json({ error: 'Required field(s) missing' })
        return;
      }

      if (locale == "american-to-british") {
        newText = translate.toBritish(text);
      } 
      else if (locale == "british-to-american") {
        newText = translate.toAmerican(text);
      } 
      else {
        res.json({ error: 'Invalid value for locale field' })
        return;
      }
      

      
      
      if (text == newText) {
        translation = "Everything looks good to me!"
      }
      else {
        translation = newText;
      }
      
      res.json({ text: text, translation: translation})
      
    });
};
