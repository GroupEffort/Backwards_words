$(document).ready(function() {
 // Game JavaScript
  var words = ['jay', 'hay', 'day'];
  var i = 0;
  var points = 0;
  
  function wordGenerator(){

    var answer = document.getElementById('input_word').value
    document.getElementById('backwardsWord').innerHTML = words[i];
    $('#points').html(points);

  }

   $('#gameSubmit').click(function(){
    var answer = document.getElementById('input_word').value;

    if (answer.split("").reverse().join("") === words[i]) {
      document.getElementById('backwardsWord').innerHTML = words[i += 1];
      document.getElementById('points').innerHTML = points += 5;
      document.getElementById('correctOrWrong').style.color = "green";
      document.getElementById('correctOrWrong').innerHTML = "Correct";
      //document.getElementById('correctOrWrong').innerHTML.style.color = "green"
    }else{
      document.getElementById('correctOrWrong').style.color = "red";
      document.getElementById('correctOrWrong').innerHTML = "Wrong";
      document.getElementById('points').innerHTML = points -= 3;
    }

    if (points < 0) {
      alert("You lost");
      document.getElementById('points').innerHTML = points = 0;
    }

    // if (answer.split("").reverse().join("") === words[i]) {
    //   document.getElementById('correctOrWrong').innerHTML = "Correct"
    // }else{
    //   document.getElementById('correctOrWrong').innerHTML = "Wrong"
    // }
    
    // for (i = 0; i < words.length; i++) {
    //   word = words[i];
    //    document.getElementById('backwardsWord').innerHTML = word.split("").reverse().join("");
    // } 

  //   //var j = document.getElementById("backwards").innerHTML;
  //   document.getElementById("backwards").innerHTML = original_word;
  //   k += 180;
  //   document.getElementById("backwards").style.transform = "rotatey(" + k + "deg)";
  //   document.getElementById("backwards").style.transitionDuration = "0.5s";

  // $('#flip').click(function(){
  //    var backwardsWord = "";
  //    var flippedWord = document.getElementById('backwards').innerHTML;
  //    var i = 0;
  //    while (i < flippedWord.length){
  //      backwardsWord = flippedWord[i] + backwardsWord;
  //      i++
  //      console.log(backwardsWord)
  //    }
  //    document.getElementById('backwards').innerHTML = backwardsWord;
  //    $("#backwardsWords").append(backwardsWord + " ");
    })
  wordGenerator();
});

