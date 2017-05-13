$(document).ready(function() {

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
    var k = 0;
    //var j = document.getElementById("backwards");
    // document.getElementById("backwards");
    k += 180;
    document.getElementById("backwards").style.transform = "rotatey(" + k + "deg)";
    document.getElementById("backwards").style.transitionDuration = "0.5s";
  });

});

