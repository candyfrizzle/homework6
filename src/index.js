function hello(){let name = prompt("What is your name");
    let hey = document.getElementById("hey");
    hey.innerHTML=(`Hi ${name} welcome to African choise`);

}

let hey=document.getElementById("Hey");
hey.addEventListener("mouseenter",hello);
function changeColor(){
    let name = promt("what is your name");
    let head=document.getElementById("head");
    //head.style.overscrollBehaviour="hover";
    if(name===null){
        head.style.cursor="pointer";
        head.innerHTML=`👋👋 Hi there Welcome to African Choice `;
        let browser=document.getElementById("browse");
        browser.innerHTML=`Welcome there Taste  The Raw Goodness Of Africa`;

    }else{
        head.style.cursor="pointer";
        head.innerHTML=` 👋👋Hi ${name}Welcome to Africa Choice`;
        let browse=document.getElementById("browse");
        browse.innerHTML=`Welcome ${name} Taste The Raw Goodness Of Africa`;

    }
}
letlinking=document.getElementById("linking");
linking.addEventListener(`mouseenter`,changeColor);