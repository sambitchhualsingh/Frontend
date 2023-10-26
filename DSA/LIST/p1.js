let course = new List();

course.append("HTML");
course.append("Css");
course.append("JavaScript");
course.append("Bootstrap");
course.append("React");
course.append("Redux");
course.append("NodeJS");
course.append("ExpressJS");
course.append("MongoDB");


// length
console.log(`length = `, course.length());

// first element 
course.front();
console.log(`first = `, course.getElement());

course.next();
console.log(`next =`, course.getElement());

course.next();
course.next();
console.log('next 2 =', course.getElement());

course.prev();
console.log('prev =', course.getElement());
// last element
course.end();
console.log(`last =`, course.getElement());