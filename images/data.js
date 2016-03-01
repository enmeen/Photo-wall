/*
1.split()的使用*/
var data = [];
var datastr = "0.图片0<br>\
<br>\
描述0<br>\
<br>\
<br>\
1.图片1<br>\
<br>\
描述1<br>\
<br>\
<br>\
2.图片2<br>\
<br>\
描述2<br>\
<br>\
<br>\
3.图片3<br>\
<br>\
描述3<br>\
<br>\
<br>\
4.图片4<br>\
<br>\
描述4<br>\
<br>\
<br>\
5.图片5<br>\
<br>\
描述5<br>\
<br>\
<br>\
6.图片6<br>\
<br>\
描述6<br>\
<br>\
<br>\
7.帅气嘟嘴照<br>\
<br>\
描述<br>\
<br>\
<br>\
8.和机油的合照<br>\
<br>\
描述<br>\
<br>\
<br>\
9.横店合照<br>\
<br>\
描述<br>\
<br>\
<br>\
10.峰会演讲<br>\
<br>\
描述<br>\
<br>\
<br>\
11.智博会体验快速照片<br>\
<br>\
描述"
var d = datastr.split('<br><br><br>');

//字符串切割，输出一个存满切割好的数组
for (var n = 0; n < d.length; n++) {
    var s = d[n].split('<br><br>');
    data.push({
        img: s[0].split('.')[0],
        caption: s[0].split('.')[1],
        desc: s[1]
    })
}
console.log(data)
//test
function car() {
    this.model = "model";
    this.year = "year";

}
car.prototype.name = 'name';

var mycar = new car();
Object.defineProperties(mycar, {
    'somekey': {
        value: "hello world",
        writable: true
    },
    'anotherkey': {
        value: "foo",
        writable: false
    }
})
mycar.somekey = 'world hello';
mycar.anotherkey = 'oof';
var mycar2 = new car();

var myModule = function() {
    var prVar = 'xyf';


    function prFunction() {
        console.log('name:' + prVar);
    }

    function puSetfunction(setName) {
        prVar = setName;
    }

    function puGetName() {
        prFunction();
        return '1';
    }
    return {
    	PrVar :function(){
    		return prVar
    	},
        PuGetName: puGetName,
        PuSetName: puSetfunction
    };
}();
var myName = (function(){
	var name = 'xyf';
	function setName(setName){
		name = setName;
	}
	function getName(){
		console.log('name: ' + name)
	}
	return{
		Name : name,//这个写法只是保存了最原始的name值，通过setName()修改的name值，将不会保存在这里
		SetName : setName,
		GetName : getName
	}
})()
