const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let translator = new Translator();

suite('Functional Tests', () => {

  suite('POST request to /api/translate', () => {

    test('Translation with text and locale fields', function(done) {
      chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Dr. Grosh will see you now.",
        locale: "american-to-british",
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, '<span class="highlight">Dr</span> Grosh will see you now.');
        done();
      })
      
    })

    test('Translation with text and invalid locale field: POST request to /api/translate', function(done) {
      chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Dr. Grosh will see you now.",
        locale: "american-to-portuguese",
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      })
    })

     test('Translation with missing text field: POST request to /api/translate', function(done) {
      chai
      .request(server)
      .post("/api/translate")
      .send({
        locale: "",
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      })
    })

    test('Translation with missing locale field: POST request to /api/translate', function(done) {
      chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Dr. Grosh will see you now.",
        locale: "",
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      })
    })

       test('Translation with empty text: POST request to /api/translate', function(done) {
      chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: "american-to-british",
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate');
        done();
      })
    })


    test('Translation with text that needs no translation: POST request to /api/translate', function(done) {
      chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "We had a party at my friend's flat.",
        locale: "american-to-british",
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      })
    })
  })

});
