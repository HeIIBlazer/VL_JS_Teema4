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
    var NewAnimals = animals.filter(a=>a.classname==val);
    if(NewAnimals.length>0){ //если в новом массиве есть данные
        //Перебираем массив и выводим данные на страницу HTML
        for(var i = 0; i<NewAnimals.length;i++){
            text+='<div style ="float:left;">';
            text+='<img src="Images/'+NewAnimals[i].image+'"style = "margin:5px;">';
            //картинка
            text+='<p>'+NewAnimals[i].name+'</p>'
            //ссылка на просмотр одной записи
            text+='<p><a href = "#" onClick = "Detail(`'+NewAnimals[i].name +'`)">Подробнее...</a></p>';
            text+='</div>';
        }//for
        $("#content").html(header+text);
    }else{
        $("#content").html(header+"Данных нет");
    }

};//end function

//--------------функция вывода просмотра одной записи
//item - название категории, передано в ссылке

function Detail(item){
    var text = '';
    // FILTER - поиск записи по критерию - название
    var Detail = animals.filter(d=>d.name==item);
    if(Detail.length>0){
        for(var i = 0;i<Detail.length;i++){
            var header='<h2>'+Detail[i].classname+': '+Detail[i].name+'</h2>'; // строим заголовок
            text+='<div style= "float:left;">'
            text+='<img src="Images/'+Detail[i].image+'" style="margin:5px">';
            //картинка
            text+='<p>'+Detail[i].description+'</p>';//описание
            //ссылка возврат к категории
            text+='<p><a href="#" onClick="myContent(`'+Detail[i].classname+'`)">Back categories</a></p>';
            text+='</div>';
        }//for
        $("#content").html(header+text);//вывод на страницу
    }else{
        $("#content").html(header+"Данных нет");
    }
};//end function Detail