grades = {
    'list' : {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    show : function(){
       for(var name in this.list){
           document.write(name+':'+this.list[name]+"<br />");
       }
   }
};
// map형식은 ''로 key값을 표시(키값은 변수명으로도 사용가능) , 함수는 그냥 안쓰고 사용해도 상관없음.
grades.show();
alert(grades['list']['egoing']);