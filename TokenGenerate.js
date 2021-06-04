


function myFunction1() {
// var data="<form action='details'>Enter the WesiteID gathered by your tracking system to see relevant statistics<hr><br><input type='url'placeholder='WebsiteID:' name='url'/><br> <br> <input type='submit' value='Check WebsiteID'/></form>";   
    var data="<form action='details'> Enter the WesiteID gathered by your tracking system to see relevant statistics<hr><br><input type='url'placeholder='WebsiteID:' name='url'/><br> <br> <input type='submit' value='Check WebsiteID'/></form>  ";
    document.getElementById("myDIV").innerHTML = data;
  }
function myFunction2() {
// var data="<form action='details'>Enter the IspID <hr><br><input type='url'placeholder='IspID:' name='url'/><br>  <br><input type='submit' value='Check IspID'/></form>";   
var data="<form action='details'> Enter the IspID<hr><br><input type='url'placeholder='IspID:' name='url'/><br> <br> <input type='submit' value='Check IspID'/></form>  ";  
    document.getElementById("myDIV").innerHTML = data;
  }


  function myFunction3() {
//   var data="<form action='details'>Enter the UrlID <hr><br><textarea placeholder='urlID:'></textarea><br><br><input type='submit' value='Check'/></form>";   
     var data="<form action='details'> Enter the UrlID <hr><br><textarea id='tarea'rows='4' cols='50' placeholder='urlID:'></textarea><br> <br> <input type='submit' value='Check'/></form>  ";  
        
        document.getElementById("myDIV").innerHTML = data;
      }

     



