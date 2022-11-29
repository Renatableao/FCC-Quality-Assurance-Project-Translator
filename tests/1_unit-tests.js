const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

let translator = new Translator();

suite('Unit Tests', () => {

  suite('Translate toBritish()', () => {

    test("Translate Mangoes are my favorite fruit. to British English", function (done) {
      let text = "Mangoes are my favorite fruit";
      assert.equal(translator.toBritish(text), 'Mangoes are my <span class="highlight">favourite</span> fruit');
    done();
    })

      test("Translate I ate yogurt for breakfast. to British English", function (done) {
      let text = "I ate yogurt for breakfast.";
      assert.equal(translator.toBritish(text), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
    })

     test("Translate We had a party at my friend's condo. to British English", function (done) {
      let text = "We had a party at my friend's condo.";
      assert.equal(translator.toBritish(text), "We had a party at my friend's" + ' <span class="highlight">flat</span>.');
    done();
    })

    test("Translate Can you toss this in the trashcan for me? to British English", function (done) {
      let text = "Can you toss this in the trashcan for me?";
      assert.equal(translator.toBritish(text), 'Can you toss this in the <span class="highlight">bin</span> for me?');
    done();
    })

     test("Translate The parking lot was full. to British English", function (done) {
      let text = "The parking lot was full.";
      assert.equal(translator.toBritish(text), 'The <span class="highlight">car park</span> was full.');
    done();
    })

    test("Translate Like a high tech Rube Goldberg machine. to British English", function (done) {
      let text = "Like a high tech Rube Goldberg machine.";
      assert.equal(translator.toBritish(text), 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    done();
    })

    test("Translate To play hooky means to skip class or work. to British English", function (done) {
      let text = "To play hooky means to skip class or work.";
      assert.equal(translator.toBritish(text), 'To <span class="highlight">bunk off</span> means to skip class or work.');
    done();
    })

    test("Translate No Mr. Bond, I expect you to die. to British English", function (done) {
      let text = "No Mr. Bond, I expect you to die.";
      assert.equal(translator.toBritish(text), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    done();
    })

    test("Translate Dr. Grosh will see you now. to British English", function (done) {
      let text = "Dr. Grosh will see you now.";
      assert.equal(translator.toBritish(text), '<span class="highlight">Dr</span> Grosh will see you now.');
    done();
    })

    test("Translate Lunch is at 12:15 today. to British English", function (done) {
      let text = "Lunch is at 12:15 today.";
      assert.equal(translator.toBritish(text), 'Lunch is at <span class="highlight">12.15</span> today.');
    done();
    })  
  })  

  suite('Translate toAmerican()', () => {

    test("Translate We watched the footie match for a while. to American English", function (done) {
      let text = "We watched the footie match for a while.";
      assert.equal(translator.toAmerican(text), 'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
    })  

    test("Translate Paracetamol takes up to an hour to work. to American English", function (done) {
      let text = "Paracetamol takes up to an hour to work.";
      assert.equal(translator.toAmerican(text), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    done();
    }) 

     test("Translate First, caramelise the onions. to American English", function (done) {
      let text = "First, caramelise the onions.";
      assert.equal(translator.toAmerican(text), 'First, <span class="highlight">caramelize</span> the onions.');
    done();
    })

     test("Translate I spent the bank holiday at the funfair. to American English", function (done) {
      let text = "I spent the bank holiday at the funfair.";
      assert.equal(translator.toAmerican(text), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    done();
    })

     test("Translate I had a bicky then went to the chippy. to American English", function (done) {
      let text = "I had a bicky then went to the chippy.";
      assert.equal(translator.toAmerican(text), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    done();
    })
    
     test("Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
      let text = "I've just got bits and bobs in my bum bag.";
      assert.equal(translator.toAmerican(text), "I've" + ' just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    done();
    })

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", function (done) {
      let text = "The car boot sale at Boxted Airfield was called off.";
      assert.equal(translator.toAmerican(text), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    done();
    })

     test("Translate Have you met Mrs Kalyani? to American English", function (done) {
      let text = "Have you met Mrs Kalyani?";
      assert.equal(translator.toAmerican(text), 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    done();
    })

    test("Translate Prof Joyner of King's College, London. to American English", function (done) {
      let text = "Prof Joyner of King's College, London.";
      assert.equal(translator.toAmerican(text), '<span class="highlight">Prof.</span>' + " Joyner of King's College, London.");
    done();
    })

     test("Translate Tea time is usually around 4 or 4.30.", function (done) {
      let text = "Tea time is usually around 4 or 4.30.";
      assert.equal(translator.toAmerican(text), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    done();
    })

})


  suite("Highlight translation", () => {
    
    test("Translate Mangoes are my favorite fruit. to British English", function (done) {
      let text = "Mangoes are my favorite fruit";
      assert.equal(translator.toBritish(text), 'Mangoes are my <span class="highlight">favourite</span> fruit');
    done();
    })
    
    test("Translate I ate yogurt for breakfast. to British English", function (done) {
      let text = "I ate yogurt for breakfast.";
      assert.equal(translator.toBritish(text), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
    })

     test("Translate We watched the footie match for a while. to American English", function (done) {
      let text = "We watched the footie match for a while.";
      assert.equal(translator.toAmerican(text), 'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
    })  

    test("Translate Paracetamol takes up to an hour to work. to American English", function (done) {
      let text = "Paracetamol takes up to an hour to work.";
      assert.equal(translator.toAmerican(text), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    done();
    }) 


    
  })
})


