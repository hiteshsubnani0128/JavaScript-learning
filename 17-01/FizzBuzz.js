var out = [];
function fizzBuzz(){
    for(var count = 1 ; count <=100 ; count++)
    {
    if(count % 3 ==0 && count %5 ==0)
    out.push('FizzBuzz');
    else if(count %3==0)
    out.push('Fizz');
    else if(count%5==0)
    out.push('Buzz');
    else
    out.push(count);
    }
	console.log(out);
}
fizzBuzz();
