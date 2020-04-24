var element = $("#historic"); // global variable
var getCanvas; // global variable


$(document).ready(function () {


    $("#previewBtn").on('click', function () {
        html2canvas(element, {
            onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
            }
        });

        if (openPreview == 1) {
            document.querySelector(".imagePreview-bg").style.right = -100 + "vw"
            previewImage
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
        $("#btn-Convert-Html2Image").attr("download", "commentCalc_app.png").attr("href", newData);
    });

});