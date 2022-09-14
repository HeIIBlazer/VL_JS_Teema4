//создать меню из массива category файл massiv.js
$(document).ready(function() {
    for(var i=0; i<category.length;i++){
        var li = document.createElement('li');
        li.innerHTML = ('<a href = "#" onClick = "myContent(`'+category[i]+'`)">'+category[i]+'</a>');
        document.getElementById('menu').appendChild(li);
    }//for
});

//функиция вывода списка данных по ссылке из навигации
//val - название категории
function myContent(val){
    var header='<h2>'+val+'</h2>';// строим заголовок - название категории
    var text = '';
    //FILTER - выбор записей по критерию - категория
    var NewChampions = champions.filter(a=>a.Lane==val);
    if(NewChampions.length>0){ //если в новом массиве есть данные
        //Перебираем массив и выводим данные на страницу HTML
        for(var i = 0; i<NewChampions.length;i++){
            text+='<div style ="float:left;">';
            text+='<img src="'+NewChampions[i].Image+'"style = "margin:5px;">';
            //картинка
            text+='<p>'+NewChampions[i].Name+'</p>'
            //ссылка на просмотр одной записи
            text+='<p><a href = "#" onClick = "Detail(`'+NewChampions[i].Name +'`)">Подробнее...</a></p>';
            text+='</div>';
        }//for
        $("#content").html(header+text);
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
            var header='<h2>'+Detail[i].Name+'</h2>'; // строим заголовок
            text+='<div style= "float:left;">'
            text+='<img src="'+Detail[i].Image+'" style="margin:5px">';
            //картинка
            text+='<p>'+Detail[i].Biography+'</p>';//Биография
            text+='<div>'
            text+='<p><b>Passive: </b>'+passive.Passive+'</p> <p><b>How It Works: </b></p>'+passive.Passive_info+'<br><br>';
            text+='<p><b>Q Abillitie: </b>'+first.First_Skill+'</p> <p><b>How It Works: </b></p>'+first.First_Skill_info+'<br><br>';
            text+='</div>'
            //ссылка возврат к категории
            text+='<p><a href="#" onClick="myContent(`'+Detail[i].Lane+'`)">Back categories</a></p>';
            text+='</div>';
        }//for
        $("#content").html(header+text);//вывод на страницу
    }else{
        $("#content").html(header+"Данных нет");
    }
};//end function Detail