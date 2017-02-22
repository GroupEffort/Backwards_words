$(document).ready(function() {

  $("#backwards_word_converter").click(function(){
    var backwards_word = "";
    var original_word = document.getElementById('input_word').value;
    var i = 0;
    while (i < original_word.length){
      backwards_word = original_word[i] + backwards_word;
      i++
    }
    document.getElementById('backwards').innerHTML = backwards_word
    $(".old_responses").append(backwards_word + " ")
  });


});

