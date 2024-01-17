const boxes= document.querySelectorAll(".box");
const reset= document.querySelector("#resetbtn");
const winner= document.querySelector("header");
let turno= true; //playerX, playerO
winner.hidden=true; 

const winpatterns=
[

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7,8],
];


boxes.forEach((e)=>
{
     e.addEventListener("click",()=>
     {   

        console.log("box is clicked")
        

        if(turno==true)
        {
            e.innerText="X";
            turno=false;
        }
        else{
            e.innerText="O";
            turno=true;
        }
             e.disabled=true;
         checkwinner();

    // if(anwer==="")
    // {
    //     winner.innerText=anwer;
    //     winner.hidden=false;
    // }


     })
})


  function checkwinner()
 {

     for(e of winpatterns)
     {
        let val1= boxes[e[0]].innerText;
        let val2=boxes[e[1]].innerText;
        let val3=boxes[e[2]].innerText;
        // // console.log(`${val1} ${val2} ${val3}`)
        // // console.log(boxes[e[0]], boxes[e[1]], boxes[e[2]])
        // // console.log(e[0], e[1],e[2])
        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                winner.innerText=`winner is ${val1}`
                winner.hidden=false;
            }
        }
     }
    
 };





reset.addEventListener("click", ()=>
{
    winner.hidden=true;

    boxes.forEach(e=>
        {      e.disabled=false;
               e.innerText=' ';
      }
    )
})