function Person(name){
    this.name=name
}
Person.prototype.getName=function(){
    return this.name
}
function Coder(name,languages){
    // IT工程师
    // extend Person
    // call的用法
    Person.call(this,name)
    // 父类没有的可以加
    // 语言
    this.languages=languages

}
// new Person 新的对象就是Coder的原型对象
Coder.prototype=new Person()
Coder.prototype.construct=Coder
Coder.prototype.getLanguages=function(){
    // console.log(this.languages)
    return this.languages
}
var zk = new Person('曾凯');
console.log(zk.name);

var xxf=new Coder('谢贤飞',['js','c++','python']);
console.log(xxf.name + '  ' + 
xxf.languages.join(','));
console.log(xxf.getName());
console.log(xxf.getLanguages());