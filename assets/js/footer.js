function responsiveCommands() {

    bodyWidth = window.innerWidth;
    var footerDividerClass;
    var footerTextClass;
    var j;
    var i;

    document.getElementById("endCreditsContainer").style.width = (document.getElementById("footerID").clientWidth - 45) + "px";

    if (bodyWidth >= 1200) {

        document.getElementById("footerContainer").style.width = (document.getElementById("footerID").clientWidth - 110) + "px";
        document.getElementById("footerContainer").style.justifyContent = "right";
        document.getElementById("footerContainer").style.marginBottom = "0px";
        document.getElementById("footerContainer").style.textAlign = "left";
        document.getElementById("footerContainer").style.marginRight = "60px";

        document.getElementById("backToTopLink").style.left = "20px";
        document.getElementById("backToTopButton").style.left = "20px";
        document.getElementById("backToTopLink").style.right = "0px";
        document.getElementById("backToTopButton").style.right = "0px";
        document.getElementById("backToTopButton").style.display = "block";

        document.getElementById("schoolSec").style.width = "fit-content";
        document.getElementById("schoolSec").style.marginRight = "45px"
        document.getElementById("schoolSec").style.float = "right";
        document.getElementById("schoolSec").style.width = document.getElementById("socialMediaIconHolder").clientWidth + "px";

        document.getElementById("schoolSecTextPart1").style.marginRight = "75px";
        document.getElementById("schoolSecTextPart2").style.marginRight = "75px";
        document.getElementById("schoolSecTextPart1").style.marginLeft = "0px";
        document.getElementById("schoolSecTextPart2").style.marginLeft = "0px";
        document.getElementById("socialMediaIconHolder").style.marginTop = "0px";

        document.getElementById("socialMediaIconHolder").style.width = "fit-content";
        document.getElementById("socialMediaIconHolder").style.backgroundColor = "none";
        document.getElementById("socialMediaIconHolder").style.float = "left";
        document.getElementById("socialMediaIconHolder").style.marginBottom = "30px";

        document.getElementsByClassName("footerDivider").display = "block";
        footerDividerClass = document.getElementsByClassName("footerDivider");
        for (j = 0; j < footerDividerClass.length; j++) {
            footerDividerClass[j].style.display = "block";
        }

        footerTextClass = document.getElementsByClassName("footerText");
        for (i = 0; i < footerTextClass.length; i++) {
            footerTextClass[i].style.textAlign = "left";
        }

    } else if (bodyWidth >= 991) {

        document.getElementById("footerContainer").style.width = (document.getElementById("footerID").clientWidth - 110) + "px";
        document.getElementById("footerContainer").style.marginBottom = "0px";
        document.getElementById("footerContainer").style.justifyContent = "right";
        document.getElementById("footerContainer").style.textAlign = "left";
        document.getElementById("footerContainer").style.marginRight = "60px";

        document.getElementById("backToTopLink").style.left = "20px";
        document.getElementById("backToTopButton").style.left = "20px";
        document.getElementById("backToTopLink").style.right = "0px";
        document.getElementById("backToTopButton").style.right = "0px";
        document.getElementById("backToTopButton").style.display = "block";

        document.getElementById("schoolSec").style.width = "fit-content";
        document.getElementById("schoolSec").style.marginRight = "0px";
        document.getElementById("socialMediaIconHolder").style.marginTop = "0px";
        document.getElementById("schoolSec").style.float = "right";
        document.getElementById("schoolSec").style.width = document.getElementById("socialMediaIconHolder").clientWidth + "px";

        document.getElementById("schoolSecTextPart1").style.marginRight = "50px";
        document.getElementById("schoolSecTextPart2").style.marginRight = "50px";
        document.getElementById("schoolSecTextPart1").style.marginLeft = "0px";
        document.getElementById("schoolSecTextPart2").style.marginLeft = "0px";

        document.getElementById("socialMediaIconHolder").style.width = "fit-content";
        document.getElementById("socialMediaIconHolder").style.backgroundColor = "none";
        document.getElementById("socialMediaIconHolder").style.float = "left";
        document.getElementById("socialMediaIconHolder").style.marginBottom = "30px";

        document.getElementsByClassName("footerDivider").display = "block";
        footerDividerClass = document.getElementsByClassName("footerDivider");
        for (j = 0; j < footerDividerClass.length; j++) {
            footerDividerClass[j].style.display = "block";
        }

        footerTextClass = document.getElementsByClassName("footerText");
        for (i = 0; i < footerTextClass.length; i++) {
            footerTextClass[i].style.textAlign = "left";
        }

    } else if (bodyWidth >= 774) {

        document.getElementById("footerContainer").style.marginRight = "25px";
        document.getElementById("footerContainer").style.marginLeft = "45px";
        document.getElementById("footerContainer").style.justifyContent = "space-between";
        document.getElementById("footerContainer").style.textAlign = "left";
        document.getElementById("footerContainer").style.marginBottom = "0px";
        document.getElementById("footerContainer").style.width = (document.getElementById("footerID").clientWidth - 50) + "px";

        document.getElementById("backToTopLink").style.left = "20px";
        document.getElementById("backToTopButton").style.left = "20px";
        document.getElementById("backToTopLink").style.right = "0px";
        document.getElementById("backToTopButton").style.right = "0px";
        document.getElementById("backToTopButton").style.display = "block";

        document.getElementById("footerRightColumn").style.maxWidth = "400px";

        document.getElementById("schoolSec").style.float = "left";
        document.getElementById("schoolSec").style.marginLeft = "30px";
        document.getElementById("schoolSec").style.marginRight = "0px";

        document.getElementById("schoolSecTextPart1").style.marginRight = "0px";
        document.getElementById("schoolSecTextPart2").style.marginRight = "0px";
        document.getElementById("schoolSecTextPart1").style.marginLeft = "0px";
        document.getElementById("schoolSecTextPart2").style.marginLeft = "0px";
        document.getElementById("socialMediaIconHolder").style.marginTop = "0px";

        document.getElementById("socialMediaIconHolder").style.width = "fit-content";
        document.getElementById("socialMediaIconHolder").style.backgroundColor = "none";
        document.getElementById("socialMediaIconHolder").style.float = "left";
        document.getElementById("socialMediaIconHolder").style.marginBottom = "30px";

        document.getElementsByClassName("footerDivider").display = "block";
        footerDividerClass = document.getElementsByClassName("footerDivider");
        for (j = 0; j < footerDividerClass.length; j++) {
            footerDividerClass[j].style.display = "block";
        }

        footerTextClass = document.getElementsByClassName("footerText");
        for (i = 0; i < footerTextClass.length; i++) {
            footerTextClass[i].style.textAlign = "left";
        }

    } else if (bodyWidth <= 774) {

        document.getElementById("footerContainer").style.marginRight = "25px";
        document.getElementById("footerContainer").style.marginLeft = "25px";
        document.getElementById("footerContainer").style.width = (document.getElementById("footerID").clientWidth - 50) + "px";
        document.getElementById("footerContainer").style.textAlign = "center";
        document.getElementById("footerContainer").style.marginBottom = "30px";

        document.getElementById("footerRightColumn").style.maxWidth = "100vw";
        document.getElementById("footerRightColumn").style.width = "100%";

        document.getElementById("aboutUs").style.width = "100%";

        document.getElementById("backToTopButton").display = "block";
        document.getElementById("backToTopLink").style.right = "0px";
        document.getElementById("backToTopButton").style.right = "0px";
        document.getElementById("backToTopLink").style.left = "20px";
        document.getElementById("backToTopButton").style.left = "20px";

        document.getElementById("schoolSec").style.marginLeft = "auto"
        document.getElementById("schoolSec").style.marginRight = "auto"
        document.getElementById("schoolSec").style.float = "left";

        document.getElementById("schoolSecTextPart1").style.margin = "0 auto";
        document.getElementById("schoolSecTextPart2").style.margin = "0 auto";

        document.getElementById("socialMediaIconHolder").style.marginRight = "auto";
        document.getElementById("socialMediaIconHolder").style.marginLeft = "auto";
        document.getElementById("socialMediaIconHolder").style.width = "100%";
        document.getElementById("socialMediaIconHolder").style.backgroundColor = "#000000";
        document.getElementById("socialMediaIconHolder").style.float = "none";
        document.getElementById("socialMediaIconHolder").style.marginBottom = "0px";
        document.getElementById("socialMediaIconHolder").style.marginTop = "40px";

        footerDividerClass = document.getElementsByClassName("footerDivider");
        for (j = 0; j < footerDividerClass.length; j++) {
            footerDividerClass[j].style.display = "none";
        }

        footerTextClass = document.getElementsByClassName("footerText");
        for (i = 0; i < footerTextClass.length; i++) {
            footerTextClass[i].style.textAlign = "center";
        }

        if (bodyWidth <= 575) {
            document.getElementById("backToTopButton").style.display = "none";
        } else {
            document.getElementById("backToTopButton").style.display = "block";
        }

    }

}

window.setInterval(responsiveCommands, 1)

$("#aboutUs").mouseenter(function () {

    $("#aboutUsDivider").css("opacity", "1");

    $("#aboutUsDivider").animate({
        width: '50%',
    }, 500);

});

$("#aboutUs").mouseleave(function () {

    $("#aboutUsDivider").stop().css("width", "50%");
    $("#aboutUsDivider").css("width", "0px");
    $("#aboutUsDivider").css("opacity", "0");

});
