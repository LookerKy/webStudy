//id 선택자
$(function(){
    $("#title").css("color",'green');
});
//하위 요소 선택자
$(function(){
    $("#wrap li").css("border","1px solid red");
});
//자식 요소 선택자
$(function(){
    $("#wraper > li").css("border","1px solid green");
});

//이외의선택자
//전체선택자 $("*") , 클래스선택자 $(".class명"") , 요소명 선택자 $("요소명")
//그룹선택자 $("요소명1, 요소명2, ...") 형요소선택자("요소 선택").prev()