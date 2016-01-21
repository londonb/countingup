// var counter = function(number) {
//   number = (number * 2)
//   return number;
// }
//
// var range = function(#countTo, #countBy) {
//   var countTo;
//   var countBy;
//   var result = parseInt(countTo / countBy)
//   return result;
// }

var output = function(countTo, countBy) {

  var numberArray = [];
  var countArray = [];
  var countTo;
  var countBy;
  var result = parseInt(countTo / countBy)


  for(var index1 = 1; index1 < (result + 1); index1 += 1) {
    numberArray.push(index1);
    console.log(numberArray);

  }

  for(var index2 = 1; index2 < (numberArray.length)+1; index2 ++) {
    var product = index2 * countBy
    countArray.push(product);

  }

  // return numberArray;
  countArray = countArray.toString();
  return countArray;
}



$(document).ready(function(){

  $("form#counting").submit(function(event) {
     var countTo = $("input#countTo").val();
     var countBy = $("input#countBy").val();

    var toPrint = output(countTo,countBy);

    $("#printTo").append(toPrint)
console.log(output);

event.preventDefault();
  });
});
