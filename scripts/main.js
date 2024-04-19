const headingA=document.querySelector("#heading-A");
headingA.textContent="hi";

const buttonA=document.querySelector("#button_A");
buttonA.onclick=()=>{
    const name=prompt("What is your name");
    alert(`hello ${name}, nice to see you` );
    headingA.textContent=`Welecome ${name}`;
}
