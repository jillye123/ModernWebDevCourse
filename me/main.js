
function convert() {

    console.log("start convert ...");

    let cel = document.getElementById("celval").value;

    console.log(`you enter celsius ${cel}`);

    let fa = cel * 9 / 5 + 32;

    document.getElementById("output").innerHTML = "The output is: " + fa;
}