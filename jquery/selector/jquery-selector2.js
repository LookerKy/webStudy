//탐색 선택자
// first/last선택자
$(function(){
    $('#menu1 li:first').css("background-color","yellow");

    $('#menu1 li:last').css("background-color","pink");
});

//even/odd 선택자
$(function(){
    $('#menu2 li:even').css("background-color","yellow");

    $('#menu2 li:odd').css("background-color","pink");
});


//속성탐색 선택자
//ex) $("li[title]").css("") 등