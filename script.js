const calculator=document.querySelector(".calculator");
const keys=calculator.querySelector(".calculator__keys");
const key1=document.querySelector(".theme--box__circle1");
const key2=document.querySelector(".theme--box__circle2");
const key3=document.querySelector(".theme--box__circle3");
const operators=document.querySelectorAll('.keys--operator');
const display=calculator.querySelector(".display--input__text");




const setTheme = (anyTheme) => document.documentElement.className = anyTheme;

// documentElement returns HTML.the above code means html.className=anyTheme parameter.
// so in our Html, we pass our anyTheme Parameter a value we want.
// the values come from  defined root variables called,theme1,theme2,theme3

// HTML
// onclick="setTheme('theme1')"></button>
// onclick="setTheme('theme2')"></button>
// onclick="setTheme('theme3')"></button>

// on clicking each button,respective themes are passed in to our function as parameter
// and html inherits it as a class

key1.addEventListener("click",()=>{
key1.style.visibility="hidden";
key2.style.visibility="visible";

})
key2.addEventListener("click",()=>{
    key2.style.visibility="hidden";
    key3.style.visibility="visible";
 })
 key3.addEventListener("click",()=>{
    key1.style.visibility="visible";
    key2.style.visibility="hidden";
    key3.style.visibility="hidden";
 })

//  for the display section,when text is zero,the pressed number should replce zero
// when text is not zero ,the pressed number should be appended to the previous one

keys.addEventListener('click',e=>{
     const key =e.target;
     const action=key.dataset.action;
// dataset.action checks the data* with the -action modifier in the n=btn 
  const displayedNum=display.textContent;

if (!action){
   if(displayedNum==='0'){
      display.textContent=keyContent;
   }
  else{
     display.textContent=displayedNum+keyContent; 
  }
  
}
if(action==='decimal'){
display.textContent=displayedNum+"."
}

if (action === 'add' ||action === 'subtract' ||action === 'multiply' ||action === 'divide') {
 
}

})
