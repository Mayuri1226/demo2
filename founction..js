 function evenodd(){
  n=5;
  for(i=1;i<=n;i++){
      if(n%2==0){
          console.log("even");
      }
      else{
          console.log("odd")
      }

  }
}

function prime(){
  n=5;
  count=0;
  for(i=1;i<=5;i++){
      if(n%i==0)
      count++;

  }
  if(count==2){
      console.log("prime")
  }

}

function fact(){
  fact=1;
  n=4;
  for(i=1;i<=5;i++){
      fact=fact*i;

  }
  console.log(fact)
}
//evenodd();
//prime();
//fact();

function add(x,y){
  prompt("enter x value")
  prompt("enter y value")
document.write("Addition",(x+y))
}

function sub(x,y){
  prompt("enter x value")
  prompt("enter y value")
  document.write("substraction",(x-y))
  }

  function mul(x,y){
      prompt("enter x value")
      prompt("enter y value")
      document.write("multiple",(x*y))
      }

      function div(x,y){
          prompt("enter x value")
          prompt("enter y value")
          document.write("Division",(x/y))
          }

   add();
   //sub();
   //mul();
    // div();
