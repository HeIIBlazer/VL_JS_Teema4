//создать меню из массива category файл massiv.js
$(document).ready(function() {
    for(var i=0; i<category.length;i++){
        var li = document.createElement('li');
        li.innerHTML = ('<a href = "#" onClick = "myContent(`'+category[i]+'`)">'+category[i]+'</a>');
        document.getElementById('menu').appendChild(li);
    }//for
});


function myContent(val){
    var header='<div class="Line"><h2 class="lane">'+val+'</h2></div>';// заголовок - название категории
    var text = '';
    var NewChampions = champions.filter(a=>a.Lane==val);
    var menu = Home_Page_Content.filter(a=>a.Lane==val);
    if(NewChampions.length>0){ //если в новом массиве есть данные
        //Перебираем массив и выводим данные на страницу HTML
        text += '<div class="Big_Loading">';
        for(var i = 0; i<NewChampions.length;i++){
            text+='<div class = "Mini_Loading">';

                text+='<div>';
                    text+='<img class="Loading" src="'+NewChampions[i].Mini_Image+'">';//картинка
                text+='</div>';

                text+='<div class="Text_Loading">';
                    text+='<p class = "Champ_Name">'+NewChampions[i].Name+'</p>';
                    text+='<p><a class = "Button_More" href = "#" onClick = "Detail(`'+NewChampions[i].Name +'`)">LEARN MORE</a></p>';
                text+= '</div>';

            text+='</div>';
        }//for
        text+='</div>';
        $("#content").html(header+text);
    }else if(menu.length>0){
        for(var i = 0; i < menu.length; i++) {
            text += '<div class="Home_Page">'

            text += '<div>'
            text += '<img class="Big_Logo" src="'+menu[i].Logo+'"alt="big">';
            text += '</div>';

            text += '<p class = "Home_Text">'+menu[i].text+'</p>';
            text += '</div>';

            $("#content").html(text);
        }
    }else{
        $("#content").html(header+"Данных нет");
    }

};//end function


function Detail(item){
    var text = '';
    // FILTER - поиск записи по критерию - название
    var Detail = champions.filter(d=>d.Name==item);
    if(Detail.length>0){
        for(var i = 0;i<Detail.length;i++){

            let skills = Detail[i].Skills;
            let passive = skills.find(skill=>skill.Passive);
            let first = skills.find(skill=>skill.First_Skill);
            let second = skills.find(skill => skill.Second_Skill);
            let third = skills.find(skill => skill.Third_Skill);
            let ultimate = skills.find(skill => skill.Ultimate)

            var header='<h2>'+Detail[i].Name+'</h2>'; // строим заголовок
            text+='<div style= "float:left;">'
            text += '<a data-title="Champion" data-lightbox="image" href="' + Detail[i].Image + '"><img src="' + Detail[i].Image + '" /></a>'; //картинка
            text += '<p>' + Detail[i].Biography + '</p>'; //Биография

            text += '<div>'
            text += '<p><b>Passive: </b>' + passive.Passive + '</p> <p><b>How It Works: </b></p>' + passive.Passive_info + '<br><br>';
            text += '<p><b>Q Abillity: </b>' + first.First_Skill + '</p> <p><b>How It Works: </b></p>' + first.First_Skill_info + '<br><br>';
            text += '<p><b>W Abillity: </b>' + second.Second_Skill + '</p> <p><b>How It Works: </b></p>' + second.Second_Skill_info + '<br><br>';
            text += '<p><b>E Abillity: </b>' + third.Third_Skill + '</p> <p><b>How It Works: </b></p>' + third.Third_Skill_info + '<br><br>';
            text += '<p><b>R Abillity: </b>' + ultimate.Ultimate + '</p> <p><b>How It Works: </b></p>' + ultimate.Ultimate_info + '<br><br>';
            text += '</div>'


            text += '<p><a href="#" onClick="myContent(`' + Detail[i].Lane + '`)">Back to another champions</a></p>'; //ссылка на возврат к другим чемпионам
            text+='</div>';
        }//for
        $("#content").html(header+text);//вывод на страницу
    }else{
        $("#content").html(header+"Данных нет");
    }
};//end function Detail