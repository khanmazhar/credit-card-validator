// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validatecard(arr) {
  const index = arr.indexOf(arr.length - 1);
    droppedNum = arr.splice(index, 1);
    droppedNum1 = droppedNum;
    arr.reverse();
    const newArr = arr.map((num, ind) => {
      if (ind % 2 === 0){
        return ((num*2) > 9) ? num*2 - 9 : num*2;
      } else {
        return num * 1;
      }
    })
    const sumOfnewArr = newArr.reduce((a,b) => {
      return a+b;
    })
    const combineSum = sumOfnewArr + droppedNum[0];
    return combineSum % 10 === 0 ? true : false; 
}

function findInvalidCard(nestedArr) {
  let invalidArray = [];
  for (let i = 0; i < nestedArr.length-1; i++){
    if (validatecard(nestedArr[i]) === false) {
      const unReversed= nestedArr[i].reverse();
      unReversed.push(droppedNum1[0]);
      invalidArray.push(unReversed);    
    }
  }
  return invalidArray;
}

function idInvalidCardCompanies(arr) {
  let invalidCardArray = [];
  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i][0] === 3) {
      if (invalidCardArray.includes("Amex")) {
        continue;
      } else {
        invalidCardArray.push('Amex');
      }
    } else if (arr[i][0] === 4) {
      if (invalidCardArray.includes("Visa")){
        continue;
      } else {
        invalidCardArray.push('Visa');
      }
    } else if (arr[i][0] === 5) {
      if (invalidCardArray.includes("MasterCard")) {
        continue;
      } else {
        invalidCardArray.push('MasterCard');
      }
    } else if (arr[i][0] === 6) {
      if (invalidCardArray.includes("Discover")) {
        continue;
      } else {
        invalidCardArray.push('Discover');
      }
    } else {
      return "No Such company found."
    }
  }
  return invalidCardArray;
}

//HOW TO USE:

//To find if any credit card Number is valid or not
//validatecard(arr); //replace arr with an array
//For Example:
//console.log(validatecard(mystery5)); /*True means credit card is valid.. False means credit card is invalid*/ 

//To find an array of Invalid credit cards 
//findInvalidCard(nestedArr) //Enter a nested array of cards 
//For Example:
//findInvalidCard(batch);

//To Find companies that issued invalid CC
//console.log(idInvalidCardCompanies(findInvalidCard(batch)));

