function fordisplay(value) {
    document.getElementById("output").value += value;
}


function effacer() {
    document.getElementById("output").value = ""
} 


function del() {
    document.getElementById("historique").value = ""
    document.getElementById("output").value = ""
} 


function solve() { 
    let a = document.getElementById("output").value 
    let b = eval(a) 
    document.getElementById("historique").value += " " + a +  " = " 
    document.getElementById("historique").value += b+"\n"
    document.getElementById("output").value = ""
    document.getElementById("output").value += b
} 

function arret(){
    document.getElementById("historique").value = "La calculatrice est arreter !"
    document.getElementById("output").value = " "

    document.getElementsById('l2-1').prop(disabled, true)

}



