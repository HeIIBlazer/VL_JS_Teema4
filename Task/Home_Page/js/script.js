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
            text += '<div>'
            text += '<div class=" Champion_Picture"><a data-title="Champion" data-lightbox="image-1" href="' + Detail[i].Image + '"><img src="' + Detail[i].Image + '" /></a></div>'; //картинка
            text += '<p>' + Detail[i].Biography + '</p>'; //Биография

            text += '<div class="Abilities">'
            text += '<div class="Ability"><div><a data-title="Passive" data-lightbox="image" href="' + passive.Passive_Image + '"><img src="' + passive.Passive_Image + '" /></a></div><p><b>Passive:<br> </b>' + passive.Passive + '</p> <p><b>How It Works: </b>' + passive.Passive_info + '</p><br><br></div>';

            text += '<div class="Ability"><div><a data-title="Q" data-lightbox="image" href="' + first.First_Skill_Image + '"><img src="' + first.First_Skill_Image + '" /></a></div><p><b>Q Abillity:<br> </b>' + first.First_Skill + '</p> <p><b>How It Works: </b>' + first.First_Skill_info + '</p><br><br></div>';

            text += '<div class="Ability"> <div><a data-title="W" data-lightbox="image" href="' + second.Second_Skill_Image + '"><img src="' + second.Second_Skill_Image + '" /></a></div><p><b>W Abillity:<br> </b>' + second.Second_Skill + '</p> <p><b>How It Works: </b>' + second.Second_Skill_info + '</p><br><br></div>';

            text += '<div class="Ability"><div><a data-title="Passive" data-lightbox="image" href="' + third.Third_Skill_Image + '"><img src="' + third.Third_Skill_Image + '" /></a></div><p><b>E Abillity:<br> </b>' + third.Third_Skill + '</p> <p><b>How It Works: </b>' + third.Third_Skill_info + '</p><br><br></div>';

            text += '<div class="Ability"><div><a data-title="Passive" data-lightbox="image" href="' + ultimate.Ultimate_Image + '"><img src="' + ultimate.Ultimate_Image + '" /></a></div><p><b>R Abillity:<br> </b>' + ultimate.Ultimate + '</p> <p><b>How It Works: </b>' + ultimate.Ultimate_info + '</p><br><br></div>';
            text += '</div>'


            text += '<p><a href="#" onClick="myContent(`' + Detail[i].Lane + '`)">Back to another champions</a></p>'; //ссылка на возврат к другим чемпионам
            text+='</div>';
        }//for
        $("#content").html(header+text);//вывод на страницу
    }else{
        $("#content").html(header+"Данных нет");
    }
};//end function Detail