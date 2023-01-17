function fordisplay(value) {
    document.getElementById("output").value = value;
}

function effacer() {
    document.getElementById("output").value = ""
} 
function del() {
    document.getElementById("historique").value = ""
} 
function solve() 
{ 
    let a = document.getElementById("output").value 
    let b = eval(a) 
    document.getElementById("historique").value = b 
} 

