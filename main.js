(function(){
"use strict";

var itemTotal = items.reduce(function(total, item){
// console.log(item.price);
  return total + item.price;
}, 0);
// console.log(itemTotal);
console.log('The average price is $' + (itemTotal/items.length).toFixed(2) );


var title = items.filter(function(item){
  return ( item.price >14 && item.price<18.00 && item.currency_code === 'USD');
});
console.log(title);

// console.log("Items that cost between $14.00 USD and $18.00 USD:");
// title.map(function(item){
//   console.log(item.title);
//   return;
// })

var ans= items.filter(function(item){
  return (item ['currency_code'] === 'GBP');
});
var code = ans.map(function(item){
  console.log(item['title'] +' costs ' +'£' + item['price']);
  return;
});

var woodItems = items.filter(function(item){
  return (item.materials.includes('wood'));
});
var woodTitle = woodItems.map(function(item){
  console.log(item.title);
  return;
});

var greaterThanEight = items.filter(function(item){
  return ( item.materials.length >= 8);
});
var materialsOfEight = greaterThanEight.map(function(item){
  console.log(item.title + ':');
  console.log(item.materials);
  return;
});

var whoMade = items.filter(function(item){
  return (item.who_made.includes('i_did'));
});
console.log(whoMade.length + ' were made by their sellers');

}());
