var vision = require('@google-cloud/vision')({
  projectId: 'business-card-reader-146419',
  keyFilename: '../../../business-card-reader-04f33d15ecb2.json'
});

vision.detectText('image.jpg', function(err, text, apiResponse) {
  // text = [
  //   'This was text found in the image'
  // ]
});
