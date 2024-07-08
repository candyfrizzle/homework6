function hello(){let name = prompt("What is your name");
    let hey = document.getElementById("hey");
    hey.innerHTML=(`Hi ${name} welcome to my website`);

}

let hey=document.getElementById("Hey");
hey.addEventListener("mouseenter",hello);
