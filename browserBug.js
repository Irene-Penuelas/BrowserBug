/**
 * Created by irene.penuelas445 on 12/8/16.
 */
"use strict";

var popup;
function bug()
{
    popup = setTimeout(alertFunc, 2000);
   // document.body.style.backgroundImage.url = "Evil-Santa.jpg" ;
}
function alertFunc() {
    alert("Prepare");
    setTimeout(alertFunc, 3000);
    $(document).ready(function(){
        $(".letter").click(function(){
            $(this).hide();
        });
    });
    document.body.style.backgroundImage = "url('Evil-Santa.jpg')" ;
    //clearInterval();
}
