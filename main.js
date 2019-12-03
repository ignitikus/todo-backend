/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(arr, func) {
  const newArr = []
  arr.forEach((entry)=>newArr.push(func(entry)))
  return newArr
}

const filter = function(arr, func) {
  const newArr = []
  arr.forEach((entry)=>{
    if (func(entry)){
      newArr.push(entry)
    }
  })
  return newArr
}

const twoPileSort = function(arr, func) {
  const newArr = []
  arr.forEach((entry)=>{
    if(func(entry)){
      newArr.unshift(entry)
    } else {
      newArr.push(entry)
    }  
  })
  return newArr
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(obj) {
  return obj.text
}

const getCompleteness = function (obj) {
  return obj.complete
}

const getPriority = function (obj) {
  return obj.priority
}

const isComplete = function(obj) {
  return obj.complete
}

const isHighPriority = function(obj) {
  return obj.priority===2 ? true:false 
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(arr) {
  return map(arr, getTodoName)
}

const namesAndPriorities = function(arr) {
  const newArr = []
  arr.forEach((entry)=> {
    if(getPriority(entry)===1){
      newArr.push(`${entry.text} - Low`)
    } else {
      newArr.push(`${entry.text} - High`)
    }
  })
  return newArr 
}

const justNotComplete = function(arr) {
  return filter(arr, (entry)=>{if(!isComplete(entry)){return entry}})
}

const justComplete = function(arr) {
  return filter(arr, (entry)=>{if(isComplete(entry)){return entry}})
}

const priority2Only = function(arr) {
  return filter(arr, (entry)=>{if(getPriority(entry)===2){return entry}})
}

const priority1Only = function(arr) {
  return filter(arr, (entry)=>{if(getPriority(entry)===1){return entry}})
}

const notCompleteFirst = function(arr) {
  return justNotComplete(arr).concat(justComplete(arr))
}

const priority2First = function(arr) {
  return twoPileSort(arr, isHighPriority)
}



module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}