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