var win = Ti.UI.createWindow({backgroundColor: 'white'});
var myImage = null;

function takePhoto() {
	Titanium.Media.showCamera({
		success : function(event) {
			// called when media returned from the camera
			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var myImage = event.media;
			} else {
				alert("got the wrong type back =" + event.mediaType);
			}
		},
		cancel : function() {
			// called when user cancels taking a picture
		},
		error : function(error) {
			// called when there's an error
			if (error.code == Titanium.Media.NO_CAMERA) {
				alert('Please run this test on device');
			} else {
				alert('Unexpected error: ' + error.code);
			}
		},
		saveToPhotoGallery : true,
		
		allowEditing : true,

		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

var myImage = Ti.UI.createImageView({
	width:100,
	height:100,
	image: myImage
});

win.add(myImage);
win.open();

$.index.open();