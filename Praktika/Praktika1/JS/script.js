$(document).ready(function() {
    //------------------------------1.
    var controll=false;//show-hdie objects
    $("#but1").click(function() {
        if(controll==false){
            controll=true;
            $("#n1").hide(2000);
            $("#but1").html("Show Блок1")
        }else{
            controll=false;
            $("#n1").show(2000);
            $("#but1").html("Hide Блок1")
        }
    });
    //--------------------2. toogle - переключатель
    $("#but2").click(function() {
        $("#n2").toggle(2500);
    });
    //--------------------3.
    //установим начальные стили для блоков n4, n5 - скрыть
    $("#n4").css('display','none');
    $("#n5").css('display','none');
    //-----
    $("#but3").click(function(){
        $("#n3").fadeIn(2500);
        $("#n4").hide();
        $("#n5").hide();
    });
    $("#but4").click(function(){
        $("#n4").fadeIn(2500);
        $("#n3").hide();
        $("#n5").hide();
    });
    $("#but5").click(function(){
        $("#n5").fadeIn(2500);
        $("#n3").hide();
        $("#n4").hide();
    });
       //--------------------input 4.
    //выведем начальный текст
    $("#result").text("Введено символов: "+$(this).val().length);
    $("#username").keyup(function(){
        var k = $(this).val().length;
        $("#result").text("Введено символов: "+ k);
        //осталось?
        var n = $("#username").attr('maxlength');//граница символов
        $("#counter").text("Осталось для ввода: "+ (n-k) +" из "+ n);
    });

});//end function ready