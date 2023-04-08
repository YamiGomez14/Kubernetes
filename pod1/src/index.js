const express = require("express")
const app = express();
const randomVal = Math.floor(Math.random() * 100); //verificando el balanceo de carga, que el numero deberia de ser igual.
//BUSQUEDA SECUENCIAL
function sequentialSearch(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return i;
        }
    }
    return -1;
}


//BUSQUEDA POR SALTO
function jumpSearch(arrayToSearch, valueToSearch) {
    var length = arrayToSearch.length;
    var step = Math.floor(Math.sqrt(length));
    var index = Math.min(step, length) - 1;
    var lowerBound = 0;
    while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
        lowerBound = step;
        step += step;
        if (lowerBound >= length) {
            return -1;
        }
    }
    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch) {
        lowerBound++;
        if (lowerBound == upperBound) {
            return -1;
        }
    }
    if (arrayToSearch[lowerBound] == valueToSearch) {
        return lowerBound;
    }
    return -1;
}

app.get("/", (req, res) => {
    var a = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

    res.json({
        array: a,
        item: "k",
        sequencial: sequentialSearch(a, "k"),
        jump: jumpSearch(a, "k"),
        random: randomVal
    });

});


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});