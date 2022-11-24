var moreText = document.getElementById("sip");
var btnText = document.getElementById("down");
var btnText29 = document.getElementById("upp");

var moreText2 = document.getElementById("sip2");
var btnText2 = document.getElementById("down2");
var btnText22 = document.getElementById("up2");

var moreText3 = document.getElementById("sip3");
var btnText3 = document.getElementById("down3");
var btnText23 = document.getElementById("up3");

var moreText4 = document.getElementById("sip4");
var btnText4 = document.getElementById("down4");
var btnText24 = document.getElementById("up4");

var moreText5 = document.getElementById("sip5");
var btnText5 = document.getElementById("down5");
var btnText25 = document.getElementById("up5");

var moreText6 = document.getElementById("sip6");
var btnText6 = document.getElementById("down6");
var btnText26 = document.getElementById("up6");


// var bt1 = document.getElementById("bt1");
// var bt2 = document.getElementById("bt2");
var bt1 = document.getElementById("mmk");

$(document).ready(function () {
    $('#bt1').on('click', function()
    {
        $('#bt2').css("display", "flex");
        $('#bt1').toggle();
        $('#sip').css("color", "#7EAF15").css("transition", "0.5s");
        $('#ubud').toggle();
    });

    $('#bt2').on('click', function()
    {
        $('#bt2').css("display", "none");
        $('#bt1').toggle();
        $('#sip').css("color", "white").css("transition", "0.5s");
        $('#ubud').toggle();
    });


    $('#bt3').on('click', function()
    {
        $('#bt4').css("display", "flex");
        $('#bt3').toggle();
        $('#sip1').css("color", "#7EAF15").css("transition", "0.5s");
        $('#natura').toggle();
    });

    $('#bt4').on('click', function()
    {
        $('#bt4').css("display", "none");
        $('#bt3').toggle();
        $('#sip1').css("color", "white").css("transition", "0.5s");
        $('#natura').toggle();
    });
});

// $(document).ready(function () {
//     $('#bt1').on('click', function()
//     {
//         $('#minus').toggle();
//         $('#tambah').toggle();
//         $("#sip").css("color", "white");
//         $("#sip").css("color", "red");
        
//         // $('#sip').toggle(function ()
//         // {
//         //     $("#sip").css("color", "red");
//         // },
//         // function()
//         // {
//         //     $("#sip").css("color", "white");
//         // });
//         $('#ubud').toggle(1000);
//     });
// });

// $('#user_button').toggle(function () 
// {
//     $("#user_button").css({borderBottomLeftRadius: "0px"});
// }, 
// function () 
// {
//     $("#user_button").css({borderBottomLeftRadius: "5px"});
// });

function plis()
{
    // var plus = document.getElementById("tambah");
    // var minus = document.getElementById("minus");
    // var sip = document.getElementById("sip")

    // if(plus.style.display == "none")
    // {
    //     minus.style.display = "flex"
    //     sip.style.color = "red"
    // }
    // else if(minus.style.display == "none")
    // {
    //     plus.style.display = "flex"
    // }
    // else
    // {
    //     minus.style.display = "none"
    //     sip.style.color = "white"
    // }

    // if(plus.style.display == "none" )
    // {
    //     minus.style.display = "flex";
    // }
    // else if(minus.style.display == "none")
    // {
    //     plus.style.display = "flex";
    // }
    // else
    // {
    //     minus.style.display = "none"
    // }

    // if(minus.style.display === "flex")
    // {
    //     plus.style.display = "none"
    //     minus.style.display = "none"
        
    // }
  
   
    // plus.style.display = "none"
    // minus.style.display = "flex"
    // sip.style.display = "none;"
}
// function minis()
// {
//     plus.style.display = "flex"
//     minus.style.display = "none"
//     sip.style.display = "inline;"
// }



function myFunction() 
{
    btnText.style.display = "none"
    btnText29.style.display = "inline";
    moreText.style.display = "inline";
}

function hidetext()
{
    btnText29.style.display = "none";
    btnText.style.display = "inline"
    moreText.style.display = "none";
}

function open2() 
{
    btnText2.style.display = "none"
    btnText22.style.display = "inline";
    moreText2.style.display = "inline";
}

function hidetext2()
{
    btnText22.style.display = "none";
    btnText2.style.display = "inline"
    moreText2.style.display = "none";
}

function open3() 
{
    btnText3.style.display = "none"
    btnText23.style.display = "inline";
    moreText3.style.display = "inline";
}

function hidetext3()
{
    btnText23.style.display = "none";
    btnText3.style.display = "inline"
    moreText3.style.display = "none";
}

function open4() 
{
    btnText4.style.display = "none"
    btnText24.style.display = "inline";
    moreText4.style.display = "inline";
}

function hidetext4()
{
    btnText24.style.display = "none";
    btnText4.style.display = "inline"
    moreText4.style.display = "none";
}

function open5() 
{
    btnText5.style.display = "none"
    btnText25.style.display = "inline";
    moreText5.style.display = "inline";
}

function hidetext5()
{
    btnText25.style.display = "none";
    btnText5.style.display = "inline"
    moreText5.style.display = "none";
}

function open6() 
{
    btnText6.style.display = "none"
    btnText26.style.display = "inline";
    moreText6.style.display = "inline";
} 
function hidetext6()
{
    btnText26.style.display = "none";
    btnText6.style.display = "inline"
    moreText6.style.display = "none";
}
