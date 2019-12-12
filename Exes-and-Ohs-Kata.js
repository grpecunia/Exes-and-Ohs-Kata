function XO(str) {
//console.log(str)
if (str.length == 0) {
  return true;
}
  var str = str.toLowerCase();
  var xString = 'x';
  var oString = 'o';
  var xCount = (str.match(/x/g) || []).length;
  var oCount = (str.match(/o/g) || []).length;
  //console.log('x count is', xCount)
  //console.log('o count is', oCount)
  for (let i = 0; i < str.length; i++) 
  if (xCount === oCount) {
    return true;
    } else {
    return false;
    }
  }
