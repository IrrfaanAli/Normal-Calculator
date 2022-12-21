function button_value(value){
    
    document.getElementById('display').innerHTML += value;

   
}
function display_clear(){

    document.getElementById('display').innerHTML=" ";

   
}

function calculate(){

   var sum = 0;

    let display_Value1 = document.getElementById('display').innerHTML;

    const  jog = display_Value1.indexOf("+");
    const  biyog = display_Value1.indexOf("-");
    const  gun = display_Value1.indexOf("*");
    const  vaag = display_Value1.indexOf("/");

     if(vaag>=0){
     
        var display_Value2 = display_Value1.split('/');

       sum = display_Value2[0]/display_Value2[1]
  
        document.getElementById('display').innerHTML= sum;

      }
      
      if(gun>=0){
             
         
         var display_Value2 = display_Value1.split('*');

           sum = display_Value2[0]*display_Value2[1]

         document.getElementById('display').innerHTML= sum;
      }

      if(jog>=0){
             
         
         var display_Value2 = display_Value1.split('+');

           sum = parseInt (display_Value2[0])+ parseInt(display_Value2[1])

         document.getElementById('display').innerHTML= sum;
      }
      if(biyog>=0){
             
         
         var display_Value2 = display_Value1.split('-');

           sum = display_Value2[0]-display_Value2[1]

         document.getElementById('display').innerHTML= sum;
      }

  }

   
    
   


