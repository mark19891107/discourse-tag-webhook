var request = require('request');

module.exports = function (context,cb) {

  console.log(context.data.title)

  var formData = context.data;
  formData.category = 12;

  // request.post(
  //   {
  //     url: 'https://talk.pdis.nat.gov.tw/posts?api_key='+context.secrets.apikey+'&api_user='+context.secrets.apiuser,
  //     formData: formData
  //   },
  //   function optionalCallback(err, httpResponse, body) {
  //     if (err) {
  //       cb(null, err); 
  //       return console.error('upload failed:', err);
  //     }
  //     cb(null, body); 
  //     console.log('Upload successful!  Server responded with:', body);
  //   }
  // );
};
