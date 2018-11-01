window.onscroll = function(e){
  var top = document.body.scrollTop
  var mini = document.getElementsByClassName("mini")[0]
  if (top < 600) {
    mini.style.opacity = 0
    mini.style.zIndex = -1
  } else if (top > 800) {
    mini.style.opacity = 1
    mini.style.zIndex = 1
  } else {
    mini.style.zIndex = 1
    mini.style.opacity = (top - 600)/50
  }
};

$(function(){
  $(".contact").on("click", function() {
    $("#popup").show();
  });
  $("#popup-x").on("click", function() {
    $("#popup").hide();
  });
});
