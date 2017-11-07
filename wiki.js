$(document).ready(function() {
    $( "#theForm" ).submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#wikiTitle').val();
        console.log(searchTerm);
        if (searchTerm !== '') {
            // var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+searchTerm+'&format=json&callback=?';

            var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&format=json&callback=?';

            $.ajax( {
              url: url,
              type: "GET",
              dataType: "jsonp",
            //   async: false,
              success: function(data) {
                $('#clear').css('display', 'block');
                console.log(data);
                $('.results').empty();
                for (var i = 0; i < data[1].length; i++) {
                    var html = '<a href="'+data[3][i]+'">';
                    html += '<h4>'+data[1][i]+'</h4>';
                    html += '</a>';
                    html += '<p>'+data[2][i]+'</p>';
                    $('.results').append(html);
                }

              },
              error: function (errorMessage) {
                console.log("error");
                console.log(errorMessage);
              }
            } );

    } else {
        console.log("Nothing.");
    }

    });
    $('#clear').click(function() {
        console.log('hello');
        $('.results').empty();
    });
});

// var wiki = 'https://en.wikipedia.org/w/api.php';
// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=liverpool&callback=JSON_CALLBACK
//
// https://en.wikipedia.org/w/api.php?format=json&prop=extracts%7Cpageimages&generator=search&exsentences=1&exlimit=max&exintro=1&explaintext=1&piprop=thumbnail%7Cname&pilimit=max&gsrsearch=
//
// https://en.wikipedia.org/?curid=
//
// https://en.wikipedia.org/wiki/Special:Random
