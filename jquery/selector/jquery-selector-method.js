//선택자와 함께 사용하면 편리한 메서드
//is() method
//$(요소선택).is(":[checked|selected|visible|hidden]")
$(function(){
    console.log($("#menu li:eq(0)").is(":visible"));

    console.log($("#menu li:eq(1)").is(":visible"));

    console.log($("#chk1").is(":checked"));

    console.log($("#chk2").is(":checked"));
})