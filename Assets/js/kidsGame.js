$(document).ready(function() {
 // Game JavaScript
    var words = ['about','add','after','ago','an','any','apple',
              'are','as','ask','ate','away','baby','back','bad',
              'bag','base','bat','bee','been','before','being',
              'best','bike','bill','bird','black','blue','boat',
              'both','bring','brother','brown','bus','buy','by',
              'cake','call','candy','change','child','city','clean',
              'club','coat','cold','coming','corn','could','cry',
              'cup','cut','daddy','dear','deep','deer','doing','doll',
              'door','down','dress','drive','drop','dry','duck','each',
              'eat','eating','egg','end','fall','far','farm', 'fast'
              ];

  var i = 0;
  var points = 0;
  //var backwardsWord = 
  function wordGenerator(){
    //var i = 0;
    var answer = document.getElementById('input_word').value
    document.getElementById('backwardsWord').innerHTML = words[i].split("").reverse().join("");
    $('#points').html(points);

  }

   $('#gameSubmit').click(function(){
    var answer = document.getElementById('input_word');
    var none = "";

    if (answer.value.split("").reverse().join("") === words[i].split("").reverse().join("")) {
      //document.getElementById('backwardsWord').innerHTML = words[i].split("").reverse().join("");
      
      document.getElementById('backwardsWord').innerHTML = words[i += 1].split("").reverse().join("");
      document.getElementById('points').innerHTML = points += 5;
      document.getElementById('correctOrWrong').style.color = "green";
      document.getElementById('correctOrWrong').innerHTML = "Correct";
      answer.value = "";
    }else{
      document.getElementById('correctOrWrong').style.color = "red";
      document.getElementById('correctOrWrong').innerHTML = "Wrong";
      document.getElementById('points').innerHTML = points -= 3;
      answer.value = none;
    }



    if (points < 0) {
      alert("You lost");
      document.getElementById('points').innerHTML = points = 0;
    }
    
  })
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

  //  function wordGenerator1(){

  //   var answer = document.getElementById('input_word').value
  //   document.getElementById('backwardsWord1').innerHTML = words1[i];
  //   $('#points').html(points);

  // }
  // $('#gameSubmit').keydown(function(event){
  //   var answer = document.getElementById('input_word').value;

  //   if (event.keyCode === 13) {
  //     this.form.submit();
  //     return false;
  //   };
  // }
  wordGenerator();
  // wordGenerator1();
});

