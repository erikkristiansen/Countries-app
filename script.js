$('#search').keyup(function() {
    var searchInput = $('#search').val();
    var myExp = new RegExp(searchInput, 'i');
    $.getJSON('https://restcountries.eu/rest/v2/all', function(data) {
        var output = '<div class="media">' + '<ul class = "search_output">';
            $.each(data, function(key, val) {
                if (val.name.search(myExp) != -1 ) {
                    output += '<li>';
                    output += '<img class="media-object col-md-6" src="' + val.flag + '"/>';
                    output += '<div class="media-body">';
                    output += '<h2 class="media-heading">' + val.name + '</h2>';
                    output += '<h4>Capital: ' + val.capital + '</h4>';
                    output += '<h4>Region: ' + val.region + '</h4>';
                    output += '<h4>Native Name: ' + val.nativeName + '</h4>';
                    output += '<h4>Numeric Code: ' + val.numericCode + '</h4>';
                    output += '</div>' + '<hr>' + '</li>';
                }
            });
         output += '</ul>' + '</div>';
         $('.update').html(output);
    });
});

function loadApp() {
    location.reload();
}
