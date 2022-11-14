
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    var options = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI
    }


    $("#takePhoto").on("click", takePic);

    function takePic() {
        navigator.camera.getPicture(onSuccess, onError, options)
        console.log("takePic")
    }

    function onSuccess(imageData) {//when takePic Successfull
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $("#takePhoto").after(" <img src='" + myNewImage + "'> ")
        }, onError);
    }

    function onError(message) {//when takePic error
        alert("Photo not taken because: " + message)
    }


}
