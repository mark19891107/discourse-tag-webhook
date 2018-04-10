var request = require('request');

module.exports = function (context,cb) {

  console.log(context.data)
  var topic_id = context.data.topic.tags;
  var formData = {
    tags:['開放政府']
  }

  request.put(
    {
      url: 'https://talk.pdis.nat.gov.tw/t/'+topic_id+'?api_key='+context.secrets.apikey+'&api_user='+context.secrets.apiuser,
      formData: formData
    },
    function optionalCallback(err, httpResponse, body) {
      if (err) {
        cb(null, err); 
        return console.error('upload failed:', err);
      }
      cb(null, body); 
      console.log('Upload successful!  Server responded with:', body);
    }
  );
};
