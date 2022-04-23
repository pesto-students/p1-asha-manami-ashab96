//Person  
function Person(name,age){
    this.name = name;
    this.age = age;
}
//Teacher 
function Teacher (name,age,subject){
    Person.call(this,name,age);
    this.subject = subject;
}

Object.setPrototypeOf(Teacher.prototype,Person.prototype);//teacher inherit from the person prototype
Teacher.prototype.teach = function (){
    console.log(this.name +" is now teaching the subject " + this.subject);
}
//Creating teacher object 
const teacher = new Teacher('Adam','35','computer Science');
teacher.teach();