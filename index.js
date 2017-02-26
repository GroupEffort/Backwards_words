$(document).ready(function() {

  var k = 0;
  $("#backwards_word_converter").click(function(){
    var backwards_word = "";
    var original_word = document.getElementById('input_word').value;
    var i = 0;
    while (i < original_word.length){
      backwards_word = original_word[i] + backwards_word;
      i++
      console.log(backwards_word)
    }
    document.getElementById('backwards').innerHTML = backwards_word;
    $("#backwardsWords").append(backwards_word + " ");
  })


  $('#flip').click(function(){
    var j = document.getElementById("backwards");
    k += 180;
    j.style.transform = "rotatey(" + k + "deg)";
    j.style.transitionDuration = "0.5s";
    });

  // $("#backwards_word_converter").click(function(){
  //   var original_word = document.getElementById('input_word').value;
  //   //var j = document.getElementById("backwards").innerHTML;
  //   document.getElementById("backwards").innerHTML = original_word;
  //   k += 180;
  //   document.getElementById("backwards").style.transform = "rotatey(" + k + "deg)";
  //   document.getElementById("backwards").style.transitionDuration = "0.5s";
  //   });

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
  //  })

});

