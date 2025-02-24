document.addEventListener('deviceready', function() {
    console.log("deviceready event fired!");

    // Check if the Camera plugin is available
    if (navigator.camera) {
        console.log("Camera plugin is available!");

        // Attach event listener to the button
        document.getElementById('takePictureBtn').addEventListener('click', function() {
            console.log("Take Picture button clicked");

            // Call the camera plugin
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,           // Set quality to 50%
                targetWidth: 800,      // Resize to 800px width
                targetHeight: 600,     // Resize to 600px height
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.PNG,
                mediaType: Camera.MediaType.PICTURE
            });
        });
    } else {
        console.error("Camera plugin is not available!");
    }

}, false);

// Success callback
function onSuccess(imageData) {
    console.log("Captured image data length:", imageData.length);
    console.log("Captured image data content:", imageData);


    if (imageData && imageData.length > 0) {
        var image = document.getElementById('capturedImage');
        // Set the src of the image element to the base64 image data
        image.src = "data:image/jpeg;base64," + imageData;

        // Optional: Test if the image is loaded correctly
        image.onload = function() {
            console.log("Image loaded successfully.");
        };

        image.onerror = function() {
            console.error("Error loading image.");
        };
    } else {
        console.error("Invalid or empty image data received.");
    }
}




// Failure callback
function onFail(message) {
    alert('Failed because: ' + message);
    console.error("Camera failed: " + message);
}
