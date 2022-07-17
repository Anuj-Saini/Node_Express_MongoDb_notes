const path=require('path');
console.log(path.dirname("C:/Users/anujs/OneDrive/Desktop/Nodejs/Path/path.js"));
console.log(path.extname("C:/Users/anujs/OneDrive/Desktop/Nodejs/Path/path.js"));
console.log(path.basename("C:/Users/anujs/OneDrive/Desktop/Nodejs/Path/path.js"));
console.log(path.parse("C:/Users/anujs/OneDrive/Desktop/Nodejs/Path/path.js"));
const my=path.parse("C:/Users/anujs/OneDrive/Desktop/Nodejs/Path/path.js");

console.log(my.name);
console.log(my.root);