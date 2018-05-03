// // 泡一杯咖啡  talk in js 
// // 流程 
// // 把水煮沸
// // 用水冲泡咖啡
// // 把咖啡倒进杯子
// // 加糖和牛奶
// 语义 转化为 代码
// 方法 methods 
// boilWater()
// brewCoffeeGriends()
// pourInCup()
// addSuguarAndMilk()
var Coffee = function() {
}
Coffee.prototype.boilWater = function() {
  console.log('把水煮沸');
}
Coffee.prototype.brewCoffeeGriends = function() {
  console.log('用沸水泡咖啡');
}
Coffee.prototype.pourInCup = function() {
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function() {
  console.log('加糖和牛奶');
}
Coffee.prototype.init = function() {
  this.boilWater();
  this.brewCoffeeGriends();
  this.pourInCup();
  this.addSugarAndMilk();
}

var Tea = function() {
} 
// 代码好像在重复
Tea.prototype = {
  boilWater: function() {
    console.log('把水烧开');   
  },
  steepTeaBag: function() {
    console.log('用沸水浸泡茶叶');
  },
  pourInCup: function() {
    console.log('把茶水倒进杯子');
  },
  addLemon: function() {
    console.log('加柠檬');
  },
  init: function() {
    this.boilWater();
    this.steepTeaBag();
    this.pourInCup();
    this.addLemon();
  }
}

var coffee = new Coffee(); 
coffee.init();

var tea = new Tea();
tea.init();



// 泡杯茶
// 把水烧开
// 用沸水浸泡茶叶
// 把茶水倒进杯子
// 加柠檬
