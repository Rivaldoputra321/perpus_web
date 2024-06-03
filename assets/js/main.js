$(document).ready(function() {
    $('#searchButton').on('click', function() {
        $('#searchInput').removeClass('d-none').show();
        $('#cancelButton').removeClass('d-none').show();
        $(this).hide();
    });

    $('#cancelButton').on('click', function() {
        $('#searchInput').addClass('d-none').hide();
        $(this).addClass('d-none').hide();
        $('#searchButton').show();
    });

});
$(document).ready(function() {
    var noFavorites = true;
    var noHistory = true; 

    if (noFavorites) {
        $('.favorites-list').hide();
        $('.no-favorites').show();
    } else {
        $('.favorites-list').show();
        $('.no-favorites').hide();
    }

    if (noHistory) {
        $('.favorites-list').hide();
        $('.no-history').show();
    } else {
        $('.favorites-list').show();
        $('.no-history').hide();
    }

    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
