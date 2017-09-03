var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  var newObj = {};
  newObj[key] = value;
  return Object.assign({}, object, newObj);
}
