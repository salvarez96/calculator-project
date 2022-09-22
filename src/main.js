const calculations = document.querySelector(".operations-box--calculations");

const arrKeyCode = [];
const arrKeyNameCode = [];

//numpad key codes of numbers from 0 to 9:
const numPadNumberKeyCodes = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
const numPadNumberKeyCode = {
    "0": 96,
    "1": 97,
    "2": 98,
    "3": 99,
    "4": 100,
    "5": 101,
    "6": 102,
    "7": 103,
    "8": 104,
    "9": 105,
};


//keyboard key codes of numbers from 0 to 9:
const keyboardNumberKeyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const keyBoardNumberKeyCode = {
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
};

//numpad key codes of math operations
const numPadOperationKeyCodes = [111, 106, 109, 107, 110, 13, 8];
const numPadOperationKeyCode = {
    "/": 111,
    "*": 106,
    "-": 109,
    "+": 107,
    ".": 110,
    "Enter": 13,
    "Backspace": 8
};

//keyboard key codes of math operations
const keyBoardOperationKeyCodes = [111, 106, 189, 187, 110, 13, 8];
const keyBoardOperationKeyCode = {
    "/": 111,
    "*": 106,
    "-": 189,
    "+": 187,
    ".": 110,
    "Enter": 13,
    "Backspace": 8
};

const saveAll = [];
let count = 0;
let numbers = [0];
let results = [];
let total = [];
let bigTotal;

function writeNumber(numberKey){
    let keyCode = numberKey.keyCode;
    
    if(keyCode === 189 || keyCode === 109 && calculations.innerText === '0'){
        calculations.innerText = '-'
    }

    if(keyCode === 110 && calculations.innerText === '0'){
        calculations.innerText = '0.'
    }
    
    if(calculations.innerText[0] === '-' && keyCode === 110 && !calculations.innerText.includes('-0.')){
        calculations.innerText = '-0.'
    }
    
    if(    keyCode > 95 && keyCode < 106 
        || keyCode > 47 && keyCode < 59 
        || !calculations.innerText.includes('.') && keyCode === 110
        ){
        if(calculations.innerText.length < 18){
            const numberInput = Number(numberKey.key);
            console.log(numberInput);
            if(calculations.innerText === '-0.' || calculations.innerText === '0.' || calculations.innerText != 0){
                calculations.innerText += numberKey.key;
                count = Number(calculations.innerText);
            } else {
                calculations.innerText = numberKey.key;
            }
        }
    }
    console.log(count)
}

document.addEventListener('keydown', writeNumber);

// const getKey = (keyPress) => {
//     const keyCode = keyPress.keyCode;
//     const keyNameCode = keyPress.code;
//     const keyName = keyPress.key;
//     arrKeyCode.push(keyCode);
//     arrKeyNameCode.push(keyName);
//     // console.log(arrKeyCode, arrKeyNameCode, keyNameCode);

//     // if(saveAll.length == 0){
//     //     calculations.innerText = 0;
//     // }

//     const operation = (numberKey) => {
//         if(Number.isFinite(numberKey)){
//             count += String(numberKey);
//             console.log(count);
//             numbers.push(Number(count));
//             numbers.shift();
//             console.log(numbers);
//         }
//         if (keyCode == numPadOperationKeyCode["+"]){
//             results.push(numbers[0]);
//             console.log(results);
//             count = 0;
//             if(results.length > 1){
//                 total.push(numbers[0] + results[results.length - 1]);
//                 console.log(total);
//                 console.log(total[total.length - 1]);
//             }
//             // bigTotal = total.map(item => item + results[results.length - 1]);
//             // console.log(bigTotal);
//             // // let result = numbers.reduce((sum, element) => sum + element, numbers[numbers.length-1]);
//             // // console.log(result);
//             // const operate = results[results.length - 1] + Number(count);
//             // console.log(operate);
//             // // results.push(result);
//             // // numbers.push(operate);
//             // console.log(numbers);
//             // // numbers.shift();
//         }
//         if (keyCode == numPadOperationKeyCode["-"]){
//             numbers.push(Number(count));
//             // let result = numbers.reduce((sum, element) => sum - element, 0);
//             const operate = numbers.shift() - Number(count);
//             // results.push(result);
//             numbers.push(operate);
//             console.log(numbers);
//             console.log(results);
//             console.log(operate);
//             count = 0;
//             numbers.shift();
//         }
//         if (keyCode == numPadOperationKeyCode["*"]){
//             numbers.push(Number(count));
//             const operate = numbers.shift() * Number(count);
//             // results.push(result);
//             numbers.push(operate);
//             console.log(numbers);
//             console.log(results);
//             console.log(operate);
//             count = 0;
//             numbers.shift();
//         }
//         if (keyCode == numPadOperationKeyCode["/"]){
//             numbers.push(Number(count));
//             const operate = numbers.shift() / Number(count);
//             // results.push(result);
//             numbers.push(operate);
//             console.log(numbers);
//             console.log(results);
//             console.log(operate);
//             count = 0;
//             numbers.shift();
//         }

//         // if(keyName === "+" || keyName === "-" || keyName === "*" || keyName === "/"){
//         //     numbers.push(count);
//         //     count = 0;
//         //     console.log(numbers);
//         //     let operate = Number(numbers[numbers.length - 2] + keyPress.keyCode + numbers[numbers.length - 1]);
//         //     console.log(operate);
//         //     console.log(typeof(operate));
//         //     console.log(numberKey);
//         // }
//         if (keyName === "Enter"){
//             numbers = [0];
//             results = [];
//         }
//     }

//     operation(Number(keyName));

//     // if(keyName === "Backspace"){
//     //     saveAll.pop();
//     //     count --;
//     //     calculations.innerText -= saveAll[saveAll.length - 1];
//     //     // saveAll.forEach((value) => {

//     //     // })
//     //     return console.log(calculations.innerText, saveAll, count);
//     // } else {
//     //     saveAll.push(keyName);
//     //     count ++
//     //     calculations.innerText += saveAll[saveAll.length - 1];
//     //     // saveAll.forEach((value) => {

//     //     // })
//     //     return console.log(calculations.innerText, saveAll, count);
//     // }


//     // console.log(keyPress)
// }
// const keys = document.addEventListener("keydown", getKey)