/**
 * Main.js
 */
$.support.cors = true;
var sImgUrl = "";

$("#searchButton").on("click",function(e){
    var sText = document.getElementById("searchText").value;
    var elImage = document.getElementById("imageViewer");

    if(oData[sText]) {
        sImgUrl = oData[sText];
        elImage.innerHTML = '<img src="' + oData[sText] + '">';
        $("#sendArea").show();
    }
});

$("#sendButton").on("click", function(e) {
    console.log("===========");
    var sUrl = "https://nexus-mink.ncsoft.com/webhook/f4bc6369-38a7-49d7-a1b2-ec59b7156795";

    var sText = "?text=" + encodeURI(sImgUrl);

    console.log(sUrl + sText);
    $.ajax({
        url: sUrl + sText ,
        success:function(data){
            console.log(data);
        }
    });
});
