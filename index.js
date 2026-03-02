let input = document.getElementById("textbox");
let output = document.getElementById("output");
let F2C = document.getElementById("F2C");
let C2F = document.getElementById("C2F");
let convertButton = document.getElementById("Convert");
let conversion;

function Convert() {
    output.textContent = "";
    if (!isNaN(Number(input.value))) {
        switch (true) {
            case F2C.checked:
                conversion = (Number(input.value) - 32) * 5/9;
                output.textContent = `${input.value} Fahrenheit is ${conversion} Celcius.`;
                console.log(conversion);
                break;
            case C2F.checked:
                conversion = (Number(input.value) * 9/5) + 32;
                output.textContent = `${input.value} Celcius is ${conversion} Fahrenheit.`;
                console.log(conversion);
                break;
        }
    }
    else {
        conversion = "Input is not a number, please try again.";
    }
}

convertButton.onclick = function(){
    Convert();
}