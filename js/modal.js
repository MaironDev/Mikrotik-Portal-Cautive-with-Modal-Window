$(document).ready(function () {

    function showPopup(){
        $('.pop-up').addClass('show');
        
    }

    $("#close").click(function(){
        $('.pop-up').removeClass('show');
        
    });

    setTimeout(showPopup, 1000);

});