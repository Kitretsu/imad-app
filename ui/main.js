//Counter code
var button = document.getElementById("counter");
//var counter = 0;

button.onclick = function () {
  
  //Make a request to the conter endpoint
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readystate === XMLHttpRequest.Done){
        if (request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();          
        }
    }  
  };
  
  //Capture a response and store it in a variable
  
  //Render the varialbe in the correct span 
  
  request.open('GET','http://bhatshivani22.imad.hasura-app.io/counter',true);
  request.send(null)
};