var element = $("#historic"); // global variable
var getCanvas; // global variable


$(document).ready(function () {


    $("#previewBtn").on('click', function () {
        document.querySelector("#historic").style.background = "gray"
        // document.querySelector("#historic").style.border = "solid" + 1 + "px" + "black"
        html2canvas(element, {
            onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
            }
        });

        if (openPreview == 1) {
            document.querySelector(".imagePreview-bg").style.right = -10000 + "px"
            openPreview = 0
        } else {
            document.querySelector(".imagePreview-bg").style.right = 0
            openPreview = 1
        }
    });

    $("#btn-Convert-Html2Image").on('click', function () {
        var imgageData = getCanvas.toDataURL("image/png");
        // Now browser starts downloading it instead of just showing it
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
    });

});

imagePreview - bg