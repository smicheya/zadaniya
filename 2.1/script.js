$('#toggle').on('click', function() {
    $('.catalog li').each(function(i) {
        $(this).toggleClass('list');
    });
    $(this).text(function(i, text) {
        return text == 'Список' ? 'Плитка' : 'Список';
    });
});

$('#more').on('click', function() {     
    console.log(111);   
    $.ajax({
        url: 'ajax_more.php', 
        type: 'post',       
        dataType: 'json',       
        success: function(data) {           
            if (data.result == 'success') {
                $('#catalog').append(data.html);                        
            }
        }
    }); 
});
