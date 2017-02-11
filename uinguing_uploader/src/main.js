/**
 * Main.js
 */
$.support.cors = true;

$("#searchButton").on("click",function(e){
    var sText = document.getElementById("searchText").value;
    var elImage = document.getElementById("imageViewer");

    if(oData[sText]) {
        elImage.innerHTML = '<img src="' + oData[sText] + '">';
        $("#sendArea").show();
    }
});

$("#sendButton").on("click", function(e) {
    //밍크에 전달하도록 url 변경 해 줄 것!!!
    $.ajax({
        url:'http://www.hitlistapp.com/flights/api/deal/?v=1&airport=ICN&counter=896',
        success:function(data){
            console.log(data);
        }
    });
});

