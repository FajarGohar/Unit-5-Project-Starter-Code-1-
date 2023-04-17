let Input1 = document.querySelector('.input1')
let Input2 = document.querySelector('.input2')
 let button = document.querySelector('.submit')

button.onclick = function() {
    let Input1 = document.querySelector(".input1").value;
    let Input2 = document.querySelector(".input2").value;
    let message = document.querySelector(".result");

    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
    if ( Input1 > 1 && Input1<=20 && Input2 =="brown" ){
      message.innerHTML ='chocolate'
    }
    else if ( Input1 > 1 && Input1<=20 && Input2 =="white" ){
     message.innerHTML =' vanilla '
      }
      
    else if(Input1 > 20 && Input1<=50 && Input2 =="brown"){
     message.innerHTML =' chocolate chip'
    }

    else if (Input1 > 20 && Input1<=50 && Input2 =="white"){
     message.innerHTML =' strawberry'
    }

};