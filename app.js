
const slider = document.getElementById("lengthSlider");
const output = document.getElementById("lengthValue");
const generate = document.getElementById("generate");
const NewPassword = document.getElementById("new-password");

const Up = document.getElementById("A-Z");
const Lo = document.getElementById("a-z");
const Num = document.getElementById("0-9");
const Spe = document.getElementById("Spe");

let Uppercase = false;
let Lowercase = false;
let Numbers = false;
let Special = false;

let PasswordLength = 12;
let FixedPasswordLength;
let Password = "";

const UppercaseList = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
  ];
  
  const LowercaseList = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
  ];
  
  const NumbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  const SpecialList = [
    "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "-", "+", "=", "[", "]",
    "{", "}", ":", ";", ".", "?"
  ];
  


Up.addEventListener("change", function () {
    if (this.checked){
        Uppercase = true;
    }else{
        Uppercase = false;
    }
});
Lo.addEventListener("change", function () {
    if (this.checked){
        Lowercase = true;
    }else{
        Lowercase = false;
    }
});
Num.addEventListener("change", function () {
    if (this.checked){
        Numbers = true;
    }else{
        Numbers = false;
    }
});
Spe.addEventListener("change", function () {
    if (this.checked){
        Special = true;
    }else{
        Special = false;
    }
});


slider.addEventListener("input", () => {
    PasswordLength = Number(slider.value);
    output.textContent = PasswordLength;
});

generate.addEventListener("click", () => {
    if (!Uppercase && !Lowercase && !Numbers && !Special){
        alert("You must have at least one setting on");
    }else{
        Password = "";
        FixedPasswordLength = PasswordLength;
        RandomizeString();
        PasswordLength = FixedPasswordLength;
        NewPassword.textContent = Password;
    }
});

const RandomizeString = () => {
    while (PasswordLength != 0){
        let randomCharIndex = Math.floor(Math.random() * 4);
        if (randomCharIndex === 0 && Uppercase){
            let randomChar = Math.floor(Math.random() * UppercaseList.length);
            Password = Password + UppercaseList[randomChar];
            PasswordLength--;
        }else if (randomCharIndex === 1 && Lowercase){
            let randomChar = Math.floor(Math.random() * LowercaseList.length);
            Password = Password + LowercaseList[randomChar];
            PasswordLength--;
        }else if (randomCharIndex === 2 && Numbers){
            let randomChar = Math.floor(Math.random() * NumbersList.length);
            Password = Password + NumbersList[randomChar];
            PasswordLength--;
        }else if (randomCharIndex === 3 && Special){
            let randomChar = Math.floor(Math.random() * SpecialList.length);
            Password = Password + SpecialList[randomChar];
            PasswordLength--;
        }
    }
}


