let Data = function (h, m, s){
    (this.h = h),
    (this.m = m),
    (this.s = s);
};

function fun(data1, data2, data3){
    return data1.h < data2.h && data1.h < data3.h
    ? data1
    : data2.h < data1.h && data2.h < data3.h
    ? data2
    : data3;
}

function main(){
    let date1 = new Data(3, 20, 1);
    let date2 = new Data(2, 2, 4);
    let date3 = new Data(7, 2, 1);
    console.log('Ora minore:', fun(date1, date2, date3));
	
	let date4 = new Data(4, 29, 0);
	let date5 = new Data(5, 9, 13);
	let date6 = new Data(9, 50, 0);
	console.log('Ora minore:', fun(date4, date5, date6));
}

main()