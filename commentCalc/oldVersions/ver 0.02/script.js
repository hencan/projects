var keys = document.querySelectorAll('#keyboard div')
var hist = document.querySelectorAll('#historic span')

for (var i = 1; i < keys.length; i++) {
    keys[i].onclick = function () {
        var btnVal
        var input = document.querySelector('#display')
        var inputVal = input.innerHTML
        btnVal = this.innerHTML

        if (btnVal == 'C') {
            input.innerHTML = 0
        } else {
            if (btnVal == '=') {
                inputVal = eval(input.innerHTML)
                document.querySelector('#historic').innerHTML += "<div><span>＋ </span> " + input.innerHTML + " =" + inputVal + "</div>"
                input.innerHTML = inputVal

                hist = document.querySelectorAll('#historic span')

                for (var i = 0; i < hist.length; i++) {
                    hist[i].onclick = function () {
                        var btnHistVal
                        btnHistVal = this.innerHTML

                        if (btnHistVal[0] == '✎') {
                            this.innerHTML = "✎ " + prompt("Insira seu texto personalido") +  "          "

                        } else {
                            if (btnHistVal[0] == '＋') {
                                this.innerHTML = "✎ " + prompt("Insira seu texto personalido") + "          "
                            }
                        }

                    }
                }
            } else {
                if (input.innerHTML == 0) {
                    input.innerHTML = ''
                    input.innerHTML += btnVal
                } else {
                    input.innerHTML += btnVal
                }
            }
        }
    }
}
