function sum() {
    let input1=document.querySelector("#id1").value;
    let input2 = document.querySelector("#id2").value;
    let Result = parseFloat(input1) + parseFloat(input2);
alert(+input1+ " + " +input2+ " = " + Result);
}

function subs() {
    let input1=document.querySelector("#id1").value;
    let input2 = document.querySelector("#id2").value;
    let Result = parseFloat(input1) - parseFloat(input2);
alert(+input1+ " - " +input2+ " = " + Result);
}

function multi() {
    let input1=document.querySelector("#id1").value;
    let input2 = document.querySelector("#id2").value;
    let Result = parseFloat(input1) * parseFloat(input2);
alert(+input1+ " * " +input2+ " = " + Result);
}

function div() {
    let input1=document.querySelector("#id1").value;
    let input2 = document.querySelector("#id2").value;
    let Result = parseFloat(input1) / parseFloat(input2);
alert(+input1+ " / " +input2+ " = " + Result);
}