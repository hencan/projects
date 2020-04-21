var keys = document.querySelectorAll('#keyboard div')
var hist = document.querySelectorAll('#histText, #histText span, #histTitle')
var posOp = 0

for (var i = 1; i < keys.length; i++) {
    keys[i].onclick = function () {
        var btnVal
        var input = document.querySelector('#display')
        var inputVal = input.innerHTML
        btnVal = this.innerHTML

        if (btnVal == 'C') {
            input.innerHTML = 0
        } else if (btnVal == '=') {
                inputVal = eval(input.innerHTML)
                document.querySelector('#histText').innerHTML += "<br><span>✎</span>"
                document.querySelector('#histCalc').innerHTML += "<br>" + input.innerHTML + " = " + inputVal
                input.innerHTML = inputVal
                posOp=1

                hist = document.querySelectorAll('#histText, #histText span, #histTitle')

                for (var i = 0; i < hist.length; i++) {
                    hist[i].onclick = function () {
                        var btnHistVal
                        btnHistVal = this.innerHTML

                        if (btnHistVal[0] == '✎') {
                            this.innerHTML = "✎ " + prompt("Insira seu texto personalido")

                        }
                    }
                }
            } else if (btnVal == '⌫') {
                    if (input.innerHTML == "") {
                        input.innerHTML = 0
                    } else if (input.innerHTML.length < 2) {
                        input.innerHTML = 0
                    } else {
                        input.innerHTML = input.innerHTML.substring(0,(input.innerHTML.length - 1))
                        posOp = 0
                    }
                } else if (btnVal == '⁺/₋') {
                        if (input.innerHTML == "") {
                            input.innerHTML = 0
                        } else if (input.innerHTML == 0) {
                            input.innerHTML = 0
                        } else {
                            input.innerHTML = eval(input.innerHTML) * (-1) 
                        }
                    // } else if (btnVal == '.') {
                    //     if (input.innerHTML == "") {
                    //         input.innerHTML = 0
                    //     } else if (input.innerHTML == 0) {
                    //         input.innerHTML = 0
                    //     } else if ({
                    //         input.innerHTML = eval(input.innerHTML) * (-1) 
                    //     }
                    } else if (posOp > 0) {
                        input.innerHTML = ''
                        input.innerHTML += btnVal
                        posOp=0
                    } else {
                        if (input.innerHTML == 0)  {
                            input.innerHTML = ''
                            input.innerHTML += btnVal
                        } else {
                            input.innerHTML += btnVal
                        }
                    }
                    
                            
                                      
                
                
            
        
    }
}
