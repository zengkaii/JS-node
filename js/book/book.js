//图书馆
function Book(isbn,title,author){

     this._setIsbn(isbn);
     this.title=title || '未给标题';
     this.author=author || '未给作者';
}
Book.prototype._setIsbn=function(isbn){
    if(this._checkIsbn(isbn))//正则表达式 “ // ”设置规则 [0-9]{10}十位的0-9 数字
    {
        this.isbn=isbn
    }else{
        throw new Error('isbn有误');
    }
}
Book.prototype._checkIsbn=function(isbn){
    return /[0-9]{10}/.test(isbn);
}
var book=new Book('1234567890','三国演义2','罗贯中2');

// Book.prototype._setIsbn=function(isbn){
//     if(this._checkIsbn())//正则表达式 “ // ”设置规则 [0-9]{10}十位的0-9 数字
//     {
//         this.isbn=isbn
//     }else{
//         throw new Error('isbn有误');
//     }
// }
// Book.prototype.borrow=function(){

// }
// Book.prototype._checkIsbn=function(isbn){
//     return /[0-9]{10}/.test(isbn);
// }
// Book.prototype.getTitle=function(){
//     return this.title;
// }
// Book.prototype.getAuthor=function(){
//     return this.author;
// }
// var book=new Book('1234567890','三国演义2','罗贯中2');

// Book.prototype.setIsbn=function(isbn){
//     if(/[0-9]{10}/.test(isbn))//正则表达式 “ // ”设置规则 [0-9]{10}十位的0-9 数字
//     {
//         this.isbn=isbn
//     }else{
//         throw new Error('isbn有误');
//     }
// }

// var book=new Book('1234567890','三国演义2','罗贯中2');