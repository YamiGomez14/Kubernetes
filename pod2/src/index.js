const express = require("express")
const app = express();
const randomVal = Math.floor(Math.random() * 100); //verificando el balanceo de carga, que el numero deberia de ser igual.

//BUSQUEDA BINARIA  
function binarySearch(array, item) {
    var low = 0;
    var high = array.length - 1;

    while (low <= high) {
        var middle = Math.floor((low + high) / 2);
        var guess = array[middle];
        if (guess == item) {
            return middle;
        }
        if (guess > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return -1;
}

// busqueda por burbuja
function Burbuja() {
    var lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
    var copyLista = lista.slice();
    var n, i, k, aux;
    n = lista.length;
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    return {
        ordenada: lista,
        original: copyLista
    };
}

app.get("/", (req, res) => {
    var a = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

    res.json({
        array: a,
        item: "k",
        binary: binarySearch(a, "k"),
        burbuja: Burbuja(),
        random: randomVal
    });

});


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});