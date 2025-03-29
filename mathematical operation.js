//to enter first and second number
let a=prompt("enter first number");
let b=prompt("enter second number");
let operator=prompt("enter operator(+,-,*,/)");
//start operation
if(operator=="+"){
    let answer=a+b;
    alert(answer);
}
else if(operator=="-"){
    let answer=a-b;
    alert(answer);
}
else if(operator=="*"){
    let answer=a*b;
    alert(answer);
}
else if(operator=="/"){
    let answer=a/b;
    alert(answer);
}
else{
    alert("invalid operator");
}
