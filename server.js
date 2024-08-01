const notes=require('./notes.js');
var _=require('lodash');
console.log('server file is available');

var age=notes.age;
console.log(age);
 

var data=["preson","person",1,2,1,2,'name','age','2'];
var filter=_.uniq(data);
console.log(filter);