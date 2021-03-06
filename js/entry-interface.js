var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var body = $('#entry').val();
    var thisEntry = new Entry();
    var words = thisEntry.wordCount(body);
    var chars = thisEntry.charCount(body);
    var teaser = thisEntry.getTeaser(body);

    $("#word-count").text(words);
    $("#char-count").text(chars);
    $("#teaser").text(teaser);

  });
});
