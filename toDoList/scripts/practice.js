let gpa = [3.2,1.5,2.0,4.0,3.8];

console.log(gpa);
console.table(gpa);

gpa[1]=2.5;
gpa.push(3.9);

console.log(gpa[0]);
console.log(gpa[1]);
console.log(gpa[2]);

gpa.pop();//removes the last element
gpa.unshift(1.0); //add an element
gpa.splice(3,1);//value and position

console.log("-----");

for(let i=0; i<gpa.length; i++){
    console.log(gpa[i]);
}