var boolean = true;

function fordisplay(value) {
    if (boolean == false) {
        console.log("")
    } else {
        document.getElementById("output").value += value;
    }
}

function effacer() {
    if (boolean == false) {
        console.log("")
    }
    else {
        document.getElementById("output").value = ""
    }
}

function del() {
    if (boolean == false) {
        console.log("")
    } else {
        document.getElementById("historique").value = ""
        document.getElementById("output").value = ""
    }
}

function solve() {
    if (boolean == false) {
        console.log("")
    } else {
        let a = document.getElementById("output").value
        let b = eval(a)
        document.getElementById("historique").value += " " + a + " = "
        document.getElementById("historique").value += b + "\n"
        document.getElementById("output").value = ""
        document.getElementById("output").value += b
    }
}

function arret() {
    document.getElementById("historique").value = "La calculatrice est arreter !"
    document.getElementById("output").value = " "
    boolean = false

}