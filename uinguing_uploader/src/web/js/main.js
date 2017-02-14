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
    var sUrl = "http://www.ncsoft.com";

    var sText = "?text=" + encodeURI(sImgUrl);

    console.log(sUrl + sText);

    $.ajax({
        url: sUrl + sText ,
        dataType: 'jsonp',
        success:function(data){
            console.log(data);
        }
    });
});
