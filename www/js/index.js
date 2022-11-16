
document.addEventListener('deviceready', onDeviceReady, false);
var photonumber = 1;
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    var options = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI
    }


    $("#takePhoto").on("click", takePic);

    function takePic() {
        console.log("takePic clicked");
        navigator.camera.getPicture(onSuccess, onError, options)
    }

    function onSuccess(imageData) {//when takePic Successfull
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            // $(".gallery").after(" <img src='" + myNewImage + "'> ")
            $(".gallery").after("<div class='container'><h2>Photo " + photonumber + "</h2><div class='center'><img src='" + myNewImage + "'></div></div>");

            photonumber++;
            console.log(photonumber);
        }, onError);
    }
    function onError(message) {//when takePic error
        alert("Photo not taken because: " + message)
    }


}
