function addPhotosToView(_photos) {
	for (var i = _photos.length - 1; i >= 0; i--) {
		var listItem = {
			properties : {
				photoObject : _photos[i]
			},
			fileName : {
				text : _photos[i].filename
			},
			template : 'listViewTemplate',
			thumbImage : {
				image : _photo[i].urls.small_240
			}
		};
		$.listViewSection.appendItems([listItem]);
	}
}
