//episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
const verdict = declareMurderer();
console.log(verdict);

//"The murderer is Miss Scarlet" will be printed to the console

//episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//"The murderer is Professor Plum" will be printed to the console. The variable 
// murderer is set to be a constant, so the attempt to change it will fail.

//episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//The console will display "First Verdict: The murderer is Mrs Peacock".
//"Second Verdict: The murderer is Professor Plum". THe first verdict is the 
// result of the declareMurderer function, where Mrs Peacock is declared as
// the murderer with block scope (same as function scope in this case).
// The second verdict is taken directly from the murderer variable
// which is defined as Professor Plum at the start of the episode and will
// persist for the rest of the episode (block scope, but no {} to restrict
//it to)

//Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//The console will display "The suspects are Miss Scarlet, Professor Plum,
// Colonel Mustard". suspectThree is changed within the declareAllSuspects
// function. Then the console will display "Suspect three is Mrs. Peacock".
// suspectThree is defined as Mrs. Peacock at the start of the program and
// is only changed within the declareAllSuspects function.

//Episode 5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

//The console will display "The weapon is the Revolver". Although the 
//scenario object is defined as const, individual parts of it can be 
//changed.

//Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//The console will display "The murderer is Mrs White". changeMurderer initially
//changes the murderer to Mr. Green but thr plotTwist() function then changes 
//the murderer to Mrs. White.

//Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//The console will display "The murderer is Miss Scarlet". The last assignment
// of murderer is within unexpectedOutcome

//Episode 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

  //The console will display "The weapon is Candle Stick"At the start of
  //changeScenario, scenario.room is set to Dining Room. When plotTwist is 
  //called with 'Dining Room', scenario.room === room and so scenario.murderer
  //is changed to Colonel Mustard. Then unexpectedOutcome is called with Colonel
  //Mustard. scenario.murderer === murderer and the weapon is changed


  //Episode 9

  let murderer = 'Professor Plum';
  
  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

  //The console will display "The murderer is Professor Plum". The murderer
  //is only set to Mrs Peacock within the if statement
  
  