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

const names = arr => arr.map(obj => obj.text)

const namesAndPriorities = arr => arr.map(obj => obj.priority === 1? `${obj.text} - Low` : `${obj.text} - High` ) 

const justNotComplete = arr => arr.filter(entry => !entry.complete)

const justComplete = arr => arr.filter(entry => entry.complete)

const priority2Only = arr => arr.filter(entry => entry.priority === 2) 

const priority1Only = arr => arr.filter(entry => entry.priority === 1) 

const notCompleteFirst = arr => arr.slice().sort((a,b)=> a.complete - b.complete)

const priority2First = arr => arr.slice().sort((a,b)=> b.priority - a.priority)



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