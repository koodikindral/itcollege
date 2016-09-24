/**
 * Created by gert on 23.09.2016.
 */
$(function() {
    var searchStrings = ['lolcat', 'funny+cat', 'animated+cat', 'cat', 'cats'];
    var randomIndex = Math.floor(Math.random() * searchStrings.length);
    $.get('http://api.giphy.com/v1/gifs/search?q=' + searchStrings[randomIndex] + '&api_key=dc6zaTOxFJmzC', function(data) {
        var pics = data.data;
        $(pics).each(function(index, picture) {
            $('#kassipildid').append($('<img>',{
                id: 'Kassipilt ' + index,
                src: 'https://media.giphy.com/media/' + picture.id + '/giphy.gif'
            }).height(200));
        });
    });
});