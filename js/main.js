// ! animation in sidenav bar

$(document).ready(function () {
  $(".MAIN-content").css("transition", "transform 500ms");
  $(".btn-open").click(function () {
    $(".nav-side").animate({ width: "350px" }, 500);
    $(".nav-content").css("display", "block");
    $(this).animate({ left: "380px" }, 500);
    $(".MAIN-content").css("transform", "translateX(100px)");
  });
  $(".close-icon").click(function () {
    $(".nav-side").animate({ width: "0px" }, 500, function () {
      $(".nav-content").css("display", "none");
    });
    $(".btn-open").animate({ left: "20px" }, 500);
    $(".MAIN-content").css("transform", "translateX(0px)");
  });

  // ! animation in singer section bar
  $("#duration ul li").click(function () {
    if ($(this).next().css("display") === "none") {
      $(this).next().slideDown(500);
      $("#duration ul li").not(this).next().slideUp(500);
    } else {
      $(this).next().slideUp(500);
    }
  });
  ////////////////////////////
  // ! count Down section

  let TargetDate = new Date("2030-07-01").getTime();
  let currentDate;
  let remTime;
  let allH3 = $("h3");
  setInterval(() => {
    currentDate = new Date().getTime();
    remTime = TargetDate - currentDate;
    let days = Math.floor(remTime / (1000 * 60 * 60 * 24)) + " D";
    let hours =
      Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " H";
    let minutes = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60)) + " M";
    let seconds = Math.floor((remTime % (1000 * 60)) / 1000) + " S";
    allH3.eq(0).text(days);
    allH3.eq(1).text(hours);
    allH3.eq(2).text(minutes);
    allH3.eq(3).text(seconds);
  }, 100);
});

////////////////////////////
// ! count Down Character
let maxChar = 100;
$(".dynamic").html(maxChar);
$("textarea").on("input", function () {
  $(".dynamic").html(
    `${
      getRemainingChar($(this).val()) >= 0
        ? getRemainingChar($(this).val())
        : "your available character finished"
    }`
  );
});

function getRemainingChar(str) {
  let remChar = maxChar - str.length;
  return remChar;
}
////////////////////////////
// ! scroll smooth
$(".nav-side ul li a").click(function () {
  let href = $(this).attr("href");
  let offset = $(href).offset().top;
  $("html,body").animate({ scrollTop: offset }, 100);
});
