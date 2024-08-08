const Jonas = {
    firstName: 'Jonas',
    lastName: 'Kevin',
    birthYear: 2000,
    job: 'salaryman',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriverLicense: true,
    calcAge: function(){ //will calculate age once and store it to property
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        this.summary = `${this.firstName} is ${this.age}-years old teacher, and he ${this.hasDriverLicense ? 'has a' : 'doesnt have'} driver's license`;
        return this.summary;
    }

    // age: function(birthYear){ //not recomended because need to replace parameter for all called function if there's an update
    //     return 2024 - birthYear
    // }

    // age: function(){
    //     return 2024 - this.birthYear //using "this" many time is not recomended  for heavy computing
    // }
}
Jonas.calcAge();
console.log(Jonas.age);

// Challenge
// "{Jonas} is {46}-years old teacher, and he {has a} driver's license"
// Get the bracket string without hard coding it

Jonas.getSummary();
console.log(Jonas.summary);
