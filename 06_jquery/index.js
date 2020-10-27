$(function () {
  $("a").on("click", function () {
    //console.log($(this));
    let click_a = $(this).text();
    console.log(click_a);
    switch (click_a.toLowerCase()) {
      case "Home":
        $(img).attr(
          "src",
          "https://cdn.pixabay.com/photo/2015/07/11/23/02/plane-841441_960_720.jpg"
        );
        $(this).addClass("point");
        break;
      case "Seoul":
        $(img).attr(
          "src",
          "https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_960_720.jpg"
        );
        $(this).addClass("point");
        break;
      case "Tokyo":
        $(img).attr(
          "src",
          "https://cdn.pixabay.com/photo/2020/01/31/07/23/tokyo-4807294_960_720.jpg"
        );
        $(this).addClass("point");
        break;
      case "Paris":
        $(img).attr(
          "src",
          "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg"
        );
        $(this).addClass("point");
        break;
    }
  });
});
