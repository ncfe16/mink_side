/**
 * Main.js
 */
var sImgUrl = "";
var sUrl = "https://nexus-mink.ncsoft.com/webhook/f4bc6369-38a7-49d7-a1b2-ec59b7156795";

$("#searchButton").on("click",function(e){
    var sText = document.getElementById("searchText").value;
    var elImage = document.getElementById("imageViewer");

    if(oData[sText]) {
        sImgUrl = oData[sText];
        var sQuery = "?text=" + sText + encodeURI("  " + sImgUrl);

        $.ajax({
            url: sUrl + sQuery ,
            dataType: 'jsonp',
            success:function(data){
                console.log(data);
            }
        });
    } else {
      alert("적당한 짤방이 없음");
    }
});
