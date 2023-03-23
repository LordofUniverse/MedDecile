// let formcontrol = document.getElementsByClassName("form-control")[0];
// let svgcont = document.getElementById("svgcont");

// formcontrol.onfocus = function() {
//     svgcont.style.borderLeft = "2px solid blue";
//     svgcont.style.borderTop = "2px solid blue";
//     svgcont.style.borderBottom = "2px solid blue";
// }

let clinicalclicker = document.getElementById("clinicaltitle");
let clinicalvisibility = document.getElementById("clinicalbox");
let diagnoseclicker = document.getElementById("diagnosetitle");
let diagnosevisibility = document.getElementById("diagnosebox");

clinicalclicker.onclick = function() {
    clinicalclicker.style.backgroundColor = "black";
    clinicalclicker.style.color = "white";
    diagnoseclicker.style.backgroundColor = "transparent";
    diagnoseclicker.style.color = "black";
    // diagnosevisibility.style.visibility = "hidden";
    // clinicalvisibility.style.visibility = "visible";

    document.getElementById("container2title").innerHTML = "CLINICAL";
    document.getElementsByClassName("boxtext")[0].innerHTML = "In this work, we propose Clinical (targeted a<b>C</b>tive <b>L</b>earning for <b>I</b>mbala<b>N</b>ced med<b>IC</b>al im<b>A</b>ge c<b>L</b>assification) a framework that uses submodular mutual information functions as acquisition functions to mine critical data points from rare classes.";

}

diagnoseclicker.onclick = function() {
    diagnoseclicker.style.backgroundColor = "black";
    diagnoseclicker.style.color = "white";
    clinicalclicker.style.backgroundColor = "transparent";
    clinicalclicker.style.color = "black";
    // diagnosevisibility.style.visibility = "visible";
    // clinicalvisibility.style.visibility = "hidden";

    document.getElementById("container2title").innerHTML = "DIAGNOSE";
    document.getElementsByClassName("boxtext")[0].innerHTML = "We propose Diagnose (avoi<b>D</b>ing out-of-d<b>I</b>stribution d<b>A</b>ta usin<b>G</b> submodular i<b>N</b>f<b>O</b>rmation mea<b>S</b>ur<b>E</b>s), an active learning framework that can jointly model similarity and dissimilarity, which is crucial in mining indistribution data and avoiding <b>OOD (out-of-distribution)</b> data at the same time.";

}
