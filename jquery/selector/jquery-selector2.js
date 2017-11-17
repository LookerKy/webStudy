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
//index(eq(index), lt(index), gt(index)) 선택자
$(function(){
    $('#menu3 li:eq(3)').css("background","yellow");//index가 3인 li태그의 배경에 노란색
    $('#menu3 li:lt(3)').css("background","pink");//index가 3보다 작은 li태그의 배경에 노란색
    $('#menu3 li:gt(3)').css("background","aqua");//index가 3보다 큰 li태그의 배경에 노란색
});

//속성탐색 선택자
//ex) $("li[title]").css("") 등