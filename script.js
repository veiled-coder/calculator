const calculator = document.querySelector(".calculator");
// < let your variables name be descriptive>
// < you cant tell what keys are; you can give it "calculatorButtons" >
const keys = calculator.querySelector(".calculator__keys");
// < you cant tell what key1 is; you can give it "themeOneButton"; use the same naming convention for others >
const key1 = document.querySelector(".theme--box__circle1");
const key2 = document.querySelector(".theme--box__circle2");
const key3 = document.querySelector(".theme--box__circle3");
const operators = document.getElementsByClassName("keys--operator");
const operatorArray = Array.from(operators);
const display = document.querySelector(".display--input__text");

// trying to loop through operators variables as getelementbyclassname produces an array of classnames;

// keys.addEventListener("click",e=>{

// const key=e.target;
// const action=key.dataset.action;
// // action checks   the data* button atrribute matches the string "action"
// if (e.target.matches('button')){
//  console.log('A Key was pressed');
// }
//  if (!action){
// console.log('A number key was pressed');
// }
//  if(action==="multiply"||action==="add"||action==="subtract"||action==="divide"){
//    console.log("An operator key was pressed");

// }
// if (action==="clear"){
//    console.log('reset button was pressed');
// }
// if (action ==="calculate"){
//    console.log('the equal key was pressed');
// };

// });

const setTheme = (anyTheme) => (document.documentElement.className = anyTheme);

// documentElement returns HTML.the above code means html.className=anyTheme parameter.
// so in our Html, we pass our anyTheme Parameter a value we want.
// the values come from  defined root variables called,theme1,theme2,theme3

// HTML
// onclick="setTheme('theme1')"></button>
// onclick="setTheme('theme2')"></button>
// onclick="setTheme('theme3')"></button>

// on clicking each button,respective themes are passed in to our function as parameter
// and html inherits it as a class
key1.addEventListener("click", () => {
  key1.style.visibility = "hidden";
  key2.style.visibility = "visible";
});
key2.addEventListener("click", () => {
  key2.style.visibility = "hidden";
  key3.style.visibility = "visible";
});
key3.addEventListener("click", () => {
  key1.style.visibility = "visible";
  key2.style.visibility = "hidden";
  key3.style.visibility = "hidden";
});

//  for the display section,when text is zero,the pressed number should replce zero
// when text is not zero ,the pressed number should be appended to the previous one

keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  //  needed to redeclare key and action variable again here because they were not declared globally previously
  // i.e they were declared in a code block previously,since const variables are blocked scoped, variables
  // declared in each block owns that variable,another code block cant have access to variables in other blocks.
  const keyContent = key.textContent;
  const displayedNum = display.textContent;

  if (!action) {
    if (displayedNum === "0") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }
  if (action === "decimal") {
    display.textContent = displayedNum + ".";
  }

  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    //   operators.style.backgroundColor="red";
  }
});
