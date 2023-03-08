var p = document.getElementById("ptag")
var p1 = document.getElementById("ptag1")

var p2 = document.getElementById("ptag2")

var img1 = document.getElementById("image1")


// var i= document.getElementById("inp1") //rock



// console.log(img1)
function fun1(z){

    var arr = ["rock","paper","scissor"]

    var a = Math.trunc(Math.random()*3);
   
            
    p.style="background-image:url("+arr[a]+".png); background-size: cover; "

    p2.style="background-image:url( u"+z+".png); background-size: cover; "

    // img1.src=arr[a]+".png"

    console.log("user- "+z )
    console.log("computer- "+arr[a] )
    

    if(z == "rock" && arr[a]=="rock" ||z == "paper" && arr[a]=="paper" || z == "scissor" && arr[a]=="scissor"){

        p1.innerHTML=("Match tie");


    }
    else{
        if(z == "rock"){

            if(arr[a] == "paper"){
                p1.innerHTML=("computer win");
                
            }
            else{
                p1.innerHTML=("You win");

            }
            
        }
        else if(z == "paper"){
            if(arr[a] == "rock"){
                p1.innerHTML=("You win");
                
            }
            else{
                p1.innerHTML=("Computer win");

            }


        }
        else{
            if(arr[a] == "rock"){
                p1.innerHTML=("Computer win");
                
            }
            else{
                p1.innerHTML=("You win");

            }

        }

    }
    




}


var d
var sum=0 

function fun2(){

   d = setInterval(fun3,100)

}

function fun3(){
    var t = document.getElementById("title")
   

    var tl =["R","o","c","k",  "," ,"P","a","p","e","r", "," , "S","c","i","s","s","o","r"]

   // console.log(tl.length)


   if(sum == tl.length){
        clearInterval(d)

   }
   else{
         t.innerHTML += tl[sum]

   }

    sum +=1
  
    // for(i=0;i<tl.length;i++){

    //     if(i == tl.length){
    //         clearInterval(d)

    //     }
    //     else{
    //         t.innerHTML += tl[i]

    //     }


        
    // }

   
}

fun2()