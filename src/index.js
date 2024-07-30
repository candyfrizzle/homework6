// function hello(){let name = prompt("What is your name");
//     let hey = document.getElementById("hey");
//     hey.innerHTML=(`Hi ${name} welcome to African choise`);

// }

// let hey=document.getElementById("Hey");
// hey.addEventListener("mouseenter",hello);
function changeColor(){
    let name = prompt("what is your name");
    let head=document.getElementById("head");
    head.style.overscrollBehaviour="hover";
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
let linking=document.getElementById("linking");
linking.addEventListener(`mouseenter`,changeColor);

                              //link id
  function size(){
    let increase=document.getElementById(`link`);
    increase.style.width=("300pt")
  }   
  let increase=document.getElementById("link") ;
  increase.addEventListener("mouseleave",size); 


  function ChangeShape(){
    let link=document.getElementById(`link`);
    link.style.width=("90%");
  }    
  let link=document.getElementById(`link`);
  link.addEventListener("mouseenter",ChangeShape);
  
                              //land id
 function ChangeSize(){   
 let land=document.getElementById(`land`);
 land.style.width=("250pt");
 }   
let land=document.getElementById("land");
land.addEventListener("mousenter",ChangeSize); 
 
function sizesecond(){
 let increaesecond=document.getElementById("land");
 increaesecond.style.width=("90%");
 }    
 let decreasesecond=document.getElementById("land");
  decreasesecond.addEventListener("mouseleave",sizesecond) ;                              
                    
                      //rame
                      function red(){
                        let rame=document.getElementById(`rame`);
                        rame.style.width=("300pt")
                      }   
                      let rame=document.getElementById("rame") ;
                      rame.addEventListener("mouseenter",red); 
                    
                    
                      function sizethird(){
                        let increasedthird=document.getElementById("rame");
                        increasedthird.style.width=("90%");
                      }    
                      let increasedthird=document.getElementById("rame");
                      increasedthird.addEventListener("mouseleave",sizethird);

                      //look
                      function yellow(){
                        let look=document.getElementById(`look`);
                        look.style.width=("300pt")
                      }   
                      let look=document.getElementById("look") ;
                      look.addEventListener("mouseenter",yellow); 
                    
                    
                      function sizefour(){
                        let increasedthird=document.getElementById("look");
                        increasedthird.style.width=("90%");
                      }    
                      let increasedfour=document.getElementById("look");
                      increasedfour.addEventListener("mouseleave",sizefour);

                      //rate
                      function steam(){
                        let rate=document.getElementById(`rate`);
                        rate.style.width=("300pt")
                      }   
                      let rate=document.getElementById("rate") ;
                      rate.addEventListener("mouseenter",steam); 
                    
                    
                      function sizetfirth(){
                        let increasedfirth=document.getElementById("rate");
                        increasedfirth.style.width=("90%");
                      }    
                      let increasedfirth=document.getElementById("rate");
                      increasedfirth.addEventListener("mouseleave",sizetfirth);

                      //lane
                      function last(){
                        let lane=document.getElementById(`lane`);
                        lane.style.width=("300pt")
                      }   
                      let lane=document.getElementById("lane") ;
                      lane.addEventListener("mouseenter",last); 
                    
                    
                      function sizethird(){
                        let increasedsixth=document.getElementById("lane");
                        increasedsixth.style.width=("90%");
                      }    
                      let increasedsixth=document.getElementById("lane");
                      increasedsixth.addEventListener("mouseleave",sizesixth);


                      function loadmore(){
                        let reveal=document.getElementById("photo");
                        reveal.style.display=("block");
                        reveal.style.display=("flex");
                        reveal.style.display="wrap";
                        reveal.style.justifyContent="space-around";
                        let missing=document.getElementById("extra");
                        missing.style.display="none";
                        let hide =document.querySelector("less");
                        hide.style.display="block";

                      }
                      let extra=document.getElementById("extra");
                      extra.addEventListener("click",loadmore);

                      //showless
                      function hide(){
                        let lessimage=document.getElementById("photo");
                        lessimage.style.display="none";
                        let disappear=document.querySelector("less");
                        disappear.style.display="none";
                        let here=document.getElementById("extra");
                      }
                      let off=document.querySelector("less");
                      off.addEventListener("click",hide);

                                                 
