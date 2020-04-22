var keys = document.querySelectorAll('#keyboard div')
var hist = document.querySelectorAll('#histText, #histText span, #histTitle')
var commaOp = 0
var posOp = 0
var isEqualActived = 0
var isAnyActived = 0
var inputMem = ""
var inputVal = ""

for (var i = 1; i < keys.length; i++) {
    keys[i].onclick = function () {
        var btnVal = ""
        var inputNum = document.querySelector('#displayNum')
        var inputSub = document.querySelector('#displaySub')

        btnVal = this.innerHTML

        if (btnVal == 'C') {
            inputNum.innerHTML = 0
            inputSub.innerHTML = 0
            commaOp = 0
            posOp = 0
            isEqualActived = 0
            isAnyActived = 0
            inputMem = ""
            inputVal = ""
        } else if (btnVal == '=') {
            if (isEqualActived == 0) {
                inputMem += inputNum.innerHTML
                inputVal = eval(inputMem)
                inputMem = inputVal
                inputSub.innerHTML += inputNum.innerHTML
                document.querySelector('#histText').innerHTML += "<br><span>✎</span>"
                document.querySelector('#histCalc').innerHTML += "<br>" + inputSub.innerHTML + " = " + inputVal
                inputNum.innerHTML = inputVal
                posOp = 1
                isEqualActived = 0
                isAnyActived = 0

                hist = document.querySelectorAll('#histText span, #histTitle')

                for (var i = 0; i < hist.length; i++) {
                    hist[i].onclick = function () {
                        var btnHistVal
                        btnHistVal = this.innerHTML

                        if (btnHistVal[0] == '✎') {
                            this.innerHTML = "✎ " + prompt("Insira seu texto personalido")
                        }
                    }
                }

            }
        } else if (btnVal == '⌫') {
            if (inputNum.innerHTML == "") {
                inputNum.innerHTML = 0
            } else if (inputNum.innerHTML.length < 2) {
                inputNum.innerHTML = 0
            } else {
                inputNum.innerHTML = inputNum.innerHTML.substring(0, (inputNum.innerHTML.length - 1))
                posOp = 0
            }
        } else if (btnVal == '⁺/₋') {
            if (inputNum.innerHTML == "") {
                inputNum.innerHTML = 0
            } else if (inputNum.innerHTML == 0) {
                inputNum.innerHTML = 0
            } else {
                inputNum.innerHTML = eval(inputNum.innerHTML) * (-1)
            }
        } else if (btnVal == '÷') {
            if (isAnyActived == 0) {
                inputSub.innerHTML = inputNum.innerHTML + btnVal
                inputMem = inputNum.innerHTML + btnVal
                inputMem = inputMem.replace("÷", "/")
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            } else {
                inputSub.innerHTML += inputNum.innerHTML + btnVal
                inputMem += inputNum.innerHTML + btnVal
                inputMem = inputMem.replace("÷", "/")
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            }
        } else if (btnVal == '×') {
            if (isAnyActived == 0) {
                inputSub.innerHTML = inputNum.innerHTML + btnVal
                inputMem = inputNum.innerHTML + btnVal
                inputMem = inputMem.replace("×", "*")
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            } else {
                inputSub.innerHTML += inputNum.innerHTML + btnVal
                inputMem += inputNum.innerHTML + btnVal
                inputMem = inputMem.replace("×", "*")
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            }
        } else if (btnVal == ',') {
            inputNum.innerHTML += btnVal
            commaOp = 1
        } else if (btnVal == '+') {
            if (isAnyActived == 0) {
                inputSub.innerHTML = inputNum.innerHTML + btnVal
                inputMem = inputNum.innerHTML + btnVal
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            } else {
                inputSub.innerHTML += inputNum.innerHTML + btnVal
                inputMem += inputNum.innerHTML + btnVal
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            } 
        } else if (btnVal == '-') {
            if (isAnyActived == 0) {
                inputSub.innerHTML = inputNum.innerHTML + btnVal
                inputMem = inputNum.innerHTML + btnVal
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            } else {
                inputSub.innerHTML += inputNum.innerHTML + btnVal
                inputMem += inputNum.innerHTML + btnVal
                posOp = 1
                isEqualActived = 0
                isAnyActived += 1
            }  
        } else if (posOp != 0) {
            inputNum.innerHTML = ''
            inputNum.innerHTML += btnVal
            posOp = 0
        } else {
            if (inputNum.innerHTML == 0) {
                inputNum.innerHTML = ''
                inputNum.innerHTML += btnVal
            } else {
                inputNum.innerHTML += btnVal
            }
        }
    }
}
