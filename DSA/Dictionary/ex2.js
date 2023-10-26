// course,id

// html, sub-1
// css , sub-2
// 

let course = new Dictionary();

course.add("html", "sub-1");
course.add("css", "sub-2");
course.add("js", "sub-3");
course.add("jquery", "sub-4");
course.add("react", "sub-5");

console.log(`\n`);

console.log(`course css id = ${course.find("css")}`);
console.log(`course react id = ${course.find("react")}`);
console.log(`course js id = ${course.find("js")}`);

console.log(`\n`);
course.showAll();

