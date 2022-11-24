$(function () {
  $("#navbar").load("navbar.html");
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

let index = document.getElementById("index");
let works = document.getElementById("works");
let port0 = document.getElementById("porto");
let archi = document.getElementById("archi");
let review = document.getElementById("review");
let news = document.getAnimations("news");
let contact = document.getElementById("contact");

let xhr = new XMLHttpRequest();
let loader = document.getElementById("loader");

function indexPage() {
  xhr.onload = function () {
    if (this.status === 200) {
      loader.innerHTML = xhr.responseText;
    } else {
      console.log("Something Went Wrong");
    }
  };

  xhr.open("GET", "footer.html");
  xhr.send;
}

$(function () {
  $("html").removeClass("preload");
  var t = $(".mobile_nav"),
    a = $("body"),
    e = $(".bars, nav.mobile a"),
    i = $("#container");
  e.on("click", function (e) {
    // a.toggleClass('open'),
    t.toggleClass("open"), e.stopPropagation(), e.preventDefault();
  }),
    i.on("click", function (e) {
      // a.hasClass('open') &&
      a.removeClass("open"), t.removeClass("open"), e.preventDefault();
    });
  var o = [],
    s = [],
    l = [];
  $(".moduleE").length &&
    $(".moduleE").each(function (t) {
      o[t] = $(this).find(".slideshow");
      var e = $(this).attr("id");
      $("html").hasClass("no-touch")
        ? o[t].cycle({
            fx: "scrollHorz",
            slides: "> .slide",
            timeout: 0,
            speed: 1e3,
            allowWrap: !0,
            next: "#" + e + " .next",
            prev: "#" + e + " .prev",
          })
        : $("html").hasClass("touch") &&
          o[t].imagesLoaded(function () {
            (l[t] = o[t].find(".slide").length),
              o[t].width(100 * l[t] + "%"),
              o[t].find(".slide").each(function () {
                $(this).width(100 / l[t] + "%");
              }),
              (s[t] = new IScroll("#" + e + " .slideshow-holder", {
                scrollX: !0,
                scrollY: !1,
                snap: ".slide",
                snapThreshold: 0.4,
                eventPassthrough: !0,
                probeType: 1,
              })),
              $(document).on("click", "#" + e + " .prev", function (e) {
                s[t].prev(), e.preventDefault();
              }),
              $(document).on("click", "#" + e + " .next", function (e) {
                s[t].next(), e.preventDefault();
              }),
              console.log(s[t]);
          });
    });
  var n = [];
  $(".project_grid .thumbnail").each(function () {
    n.push($(this).data("id")), Cookies.set("project_list", n);
  });
  var d = n;
  $(".catNav li > a").on("click", function (e) {
    $(this).parent().addClass("active").siblings().removeClass("active");
    var t = $(this).data("catname");
    "all" === t
      ? ($(".project_grid .thumbnail").removeClass("disabled"), (n = d))
      : ((n = []),
        $(".project_grid .thumbnail").each(function () {
          $(this).hasClass("cat_" + t)
            ? ($(this).removeClass("disabled"), n.push($(this).data("id")))
            : $(this).addClass("disabled");
        })),
      Cookies.set("project_list", n),
      e.preventDefault();
  }),
    $(document).on("click", ".thumbnail.disabled > a", function (e) {
      e.preventDefault();
    }),
    $(document).on("click", ".team_grid .team_member.has_bio", function (e) {
      e.preventDefault();
      var t = $(this);
      $(".team_grid .team_member.has_bio").not(t).find(".bio").fadeOut(1e3),
        t.find(".bio").fadeToggle(500);
    }),
    $("#office_time_1").jClocksGMT({
      title: "",
      offset: "0",
      dst: !0,
      digital: !0,
      analog: !1,
      timeformat: "HH:mm:ss",
      date: !1,
    }),
    $("#office_time_2").jClocksGMT({
      title: "",
      offset: "+5.5",
      dst: !1,
      digital: !0,
      analog: !1,
      timeformat: "HH:mm:ss",
      date: !1,
    }),
    $("#office_time_3").jClocksGMT({
      title: "",
      offset: "+2",
      dst: !0,
      digital: !0,
      analog: !1,
      timeformat: "HH:mm:ss",
      date: !1,
    }),
    $("#office_time_4").jClocksGMT({
      title: "",
      offset: "0",
      dst: !0,
      digital: !0,
      analog: !1,
      timeformat: "HH:mm:ss",
      date: !1,
    });
});
