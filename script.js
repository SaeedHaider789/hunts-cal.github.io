let num1 = "", num2 = "", opt = "", optCount = 0, is = 0; 
let disp = document.getElementById("disp");
let clearVal = () =>{
    num1 = '';
    num2 = '';
    opt = '';
    optCount = 0;
    disp.value = "";
    is = 0;
}


let findResult = (n1, opt, n2) =>{
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if(opt == '+'){
        let result = n1+n2;
        return result;
    }
    else if(opt == "-"){
        let result = n1-n2;
        return result;
    }
    else if(opt == "*"){
        let result = n1*n2;
        return result;
    }
    else if(opt == "/"){
        let result = n1/n2;
        return result;
    }
}

let btns = document.getElementsByClassName("button1");
btns = Array.from(btns);
btns.forEach(element => {
    if(element.dataset.value != "C" && element.dataset.value != "="){
        element.addEventListener("click", function(){
            assignVal(element.dataset.value);
        });
    }
    else if(element.dataset.value == "C"){
        element.addEventListener("click", clearVal);
    }
    else if(element.dataset.value == "="){
        element.addEventListener("click", function(){
            num1 = findResult(num1, opt, num2);
            disp.value = num1.toString();
            num2 = "";
            opt = "";
            optCount = 0;
            is++;
        });
    }

});

function assignVal(val) {
    if(val >= '0' && val <= '9' && optCount == 0){
        if(is > 0){  clearVal();}
        num1 = num1 + val;
        disp.value = num1;
    }
    else if((val == "+" || val == "-" || val == '*' || val == '/') && num1 != ""){
        if(optCount == 0){
            opt = val;
            optCount++;
        }
        else if(optCount == 1){
            if(num1 == "" || num2 == ""){
                opt = val;
                return;
            }
            num1 = findResult(num1, opt, num2);
            disp.value = num1;  
            num2 = "";
            opt = "";
            optCount = 0;
            if(optCount == 0){
                opt = val;
                optCount++;
            }
            console.log("num1:", num1);
        }
    }
    if(val >= '0' && val <= '9' && optCount == 1){
        num2 = num2 + val;
        disp.value = num2;
    }
    // console.log("heloo", num1)
    // console.log(num1, opt, num2);
}

