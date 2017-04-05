
$('#search').click(function () {
    var search = $('input').val();
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&srlimit=10&namespace=0&format=json&callback=?';
    var elements = $();


    $.getJSON(url, function (data) {
        var result = data;
        $('#content').empty();
        try {
            for (var j = 0; j < result[1].length; j++) {
                elements = elements.add('<div><h2><a href="' + result[3][j] + '" target="_blank">' + result[1][j] + '</a></h2>' + result[2][j] + '</div>');
            }
            $('#content').append(elements);
        } catch (TypeError) {
            $('#content').append("Empty query");
        }
    });

});