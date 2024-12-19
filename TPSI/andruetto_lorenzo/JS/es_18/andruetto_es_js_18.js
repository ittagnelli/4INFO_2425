function min(n1, n2, n3) {
	return +n1 < +n2 && +n1 < +n3 ? +n1 : +n2 < +n1 && +n2 < +n3 ? n2 : n2 > +n3 && +n3 < +n1 ? +n3 : undefined;
}

function main(){
	console.log(min('7', 5, '2'));
	console.log(min(4, 2, '19'));
	console.log(min('5', 3, '0'));
}

main();