function cal(func, num){
    return func(num);
}
function increase(num){
    return num+1;
}
function decrease(num){
    return num-1;
}
alert(cal(increase, 1));
alert(cal(decrease, 1));

//javascript에서의 함수는 파라미터로도 사용가능하다

function funcre(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
alert("hihih"+funcre('plus')(100,200));
alert("hello"+funcre('minus')(300,20));  


//함수는 함수의 리턴 값으로도 사용할 수 있다. 

var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
    alert(input);
}

//배열의 값으로도 사용 가능하다