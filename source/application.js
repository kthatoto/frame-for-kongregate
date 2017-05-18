$(function(){
  kongregateAPI.loadAPI(function(){
    window.kongregate = kongregateAPI.getAPI();
    // You can now access the Kongregate API with:
    // kongregate.services.getUsername(), etc
    // Proceed with loading your game...
  });
  if(kongregate.services.isGuest()){
    alert("ok");
  }
  var candy = 0;
  $(".candy_number").text(candy);
  $(".center_candy").on("click", function(){
    candy++;
    $(".candy_number").text(candy);
  });
});