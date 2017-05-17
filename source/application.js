$(function(){
  var candy = 0;
  $(".candy_number").text(candy);
  $(".center_candy").on("click", function(){
    candy++;
    $(".candy_number").text(candy);
  });
});