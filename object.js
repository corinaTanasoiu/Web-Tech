const student= {
    name: 'Corina Tanasoiu',
    email:'mail@gmail.com',
    yearsOld:21,
    meet:function(){
        console.log(this.name);
    }
}

console.log(student.email);
console.log(student['email']);

student.meet();

function test1 (name){
    console.log(name);
}

const arrTest1=(name)