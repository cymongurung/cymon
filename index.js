$("#fadeOut").click(function(){
  $("#box").fadeOut(function(slow){
    $("#fadeOut").text("Its gone");
  });
})

$("#fadeIn").click(function(){
  $("#box").fadeIn(3000);
})


$("#fadeTog").click(function(){
    $("#box") .fadeToggle(3000);
})



$("#btnStop").click(function(){
  $("#box").stop();
})

$("#moveRight").click(function(){
  $("#box2").animate({
    left: 500,
    height: '300px',
    width: '300px',
    opacity: '0.5'
  });
});

$("#moveLeft").click(function(){
  $("#box2").animate({
    left: 0,
    height: '100px',
    width: '100px',
    opacity: '1'
  });
});


$("#moveAround").click(function(){
var box = $("#box2");
box.animate({
  left:300
});
box.animate({
  top: 300
});

box.animate({
  left: 0,
  top: 300
});

box.animate({
  left: 0,
  top: 0
});

  });
