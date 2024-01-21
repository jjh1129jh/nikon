$(document).ready(function(){

var a = 100;
var sum = 0;

for(var i=1; i<=a; i++) {
	if(i%2==0) {
		sum = sum+i;                 
	} else if (i%2==1) {
        sum = sum+0;
	}
}
console.log("100까지의 짝수의 합 :" + sum);
})

$(document).ready(function(){

    var p = 0;
    var n = 0;

    for(var a=1; a<10; a++) {
        for(var b=1; b<6; b++){
            console.log(a+"*"+b+"="+a*b);
        }
    }

})