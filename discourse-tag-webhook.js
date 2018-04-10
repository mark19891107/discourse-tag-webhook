var request = require('request');
// require('request').debug = true;

module.exports = function (context, cb) {

  var topic_id = context.data.topic.id;
  var topic_slug = context.data.topic.slug;
  var topic_tags = context.data.topic.tags.slice();
  var new_tags = context.data.topic.tags.slice();
  
  new_tags = AddTags(new_tags);

  if (new_tags.some(val => topic_tags.indexOf(val) === -1)) {
    request.put(
      {
        url: 'https://talk.pdis.nat.gov.tw/t/' + topic_slug + '/' + topic_id + '?api_key=' + context.secrets.apikey + '&api_user=' + context.secrets.apiuser,
        formData: {"tags[]": new_tags}
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
  }
};

function AddTags(old_tags){
  return old_tags.push("開放政府");
}
