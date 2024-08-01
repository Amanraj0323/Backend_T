//call back function----:>

function callback(){
    console.log('Aman is calling a callback function');
}

const add=function(a,b,callback){ //main function work complete
    var result=a+b;
    console.log('result:'+result);
    callback();
}
add(3,4,callback); //1

add(2,3,function(){ //2
    console.log('add is completed');
});

add(2,3,()=> console.log('add is complted'));//3