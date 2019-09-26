// Barre résultat

var text = "";
var resultElement = document.createElement("div");
resultElement.id = "result"
document.body.appendChild(resultElement);

// Boucle boutons

var btnlist = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "=", "Reset", "/", "." ];

for (i = 0; i < btnlist.length; i++ ){
    var button = document.createElement("button");
    button.innerHTML = btnlist[i];
    document.body.appendChild(button);
    button.addEventListener("click", function() {
        var c = this.innerHTML
        if (c == "=") {
            resultElement.innerHTML = eval(resultElement.innerHTML);
        }
        else {
            resultElement.innerHTML = resultElement.innerHTML + c;
        }

// Boucle pour reset

        var d = this.innerHTML
        if (d == "Reset") {
            result = "";
        }

        if (button.value == "+" , "+") {
            alert("NON")
        }
            

    });

}







