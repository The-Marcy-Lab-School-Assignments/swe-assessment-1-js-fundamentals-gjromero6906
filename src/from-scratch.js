/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  let typeOfBreed = typeof petBreed;
  let typeOfName = typeof petName;

  if(typeOfBreed ==='undefined'|| typeOfName === 'undefined' ){
    console.log(`Missing information. Please provide a valid pet.`);
    return;
  }
  const lowerCasePet= petBreed.toLowerCase();
  if(lowerCasePet ==='dog'){
    console.log(`I love dogs! ${petName} is so cute!`);
  }else if(lowerCasePet ==='cat'){
    console.log(`I love cats! ${petName} is so cute!`)
  }else if(lowerCasePet ==='turtle'){
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  }else if(lowerCasePet ==='snake'){
    console.log(`Not a fan, please take ${petName} and leave.`)
  }else{
    console.log(`What an...interesting pet.`)
  }
};
// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  if (firstNum>=secondNum){
    return;
  }else{
    for(let i = firstNum;i<secondNum;i++){
      console.log(i);
    }
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  if(str.length<=0){
    return;
  }
  for(let i =0;i<str.length;i++){
    console.log(`${str[i].toUpperCase()}!`);
  }
};
// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  const capLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCaseLetter ="abcdefghijklmnopqrstuvwxyz"
  const counter={
    lowercase:0,
    uppercase:0,
    neither:0
  }
  for(let i =0;i<str.length;i++){
    if(capLetter.includes(str[i])){
      counter.uppercase ++;
    }else if (lowerCaseLetter.includes(str[i])){
      counter.lowercase ++;
    }else{
      counter.neither ++;
    }
  }
  return counter;
};
letterCaseCounts('abCdef 123');

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
  let greedyName =[];
  for(let i = 0;i<gnomes.length;i++){
    let NumItems = gnomes[i].stolenDecorations.length;
  if(NumItems>1){
      greedyName.push(gnomes[i].name);
    }
  }
  return greedyName;
};
const gnomes = [
  {
    name: 'Garbeldel',
    gardenCount: 2,
    age: 407,
    stolenDecorations: ['chair', 'fountain', 'statue'],
  },
  {
    name: 'Farbus',
    gardenCount: 3,
    age: 281,
    stolenDecorations: ['greek statue'],
  },
  {
    name: 'Peekle',
    gardenCount: 3,
    age: 101,
    stolenDecorations: [],
  },
  {
    name: 'Jorbles',
    gardenCount: 3,
    age: 900,
    stolenDecorations: ['wind chimes', 'mini golfer'],
  },
];

getNamesOfGreedyGnomes(gnomes); // Returns ['Garbeldel', 'Jorbles']

getNamesOfGreedyGnomes([]); // Returns []
// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
