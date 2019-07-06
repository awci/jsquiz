var x = 3;
var foo =  {
	x: 2,
	baz: {	
		x: 1,
		bar: () => {
			return this.x;
		}
	}
}

var go = foo.baz.bar;

console.log(go());
console.log(foo.baz.bar());


var foo1 = function foo1() {
    console.log(foo === foo);  
};
foo1();


function aaa() {
    return 
    {
        test: 1
    };
}
console.log(aaa());