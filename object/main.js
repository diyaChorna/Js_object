// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
// Створіть порожній об'єкт person.
// Додайте властивість firstName зі значенням Ivan.
// Додайте властивість secondName зі значенням Ivanov.
// Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
// Скопіюйте об'єкт person в об'єкт newPerson.
// Поміняйте в newPerson властивість firstName на Petro.
// Поміняйте в newPerson властивість secondName на Petriv.
// Запустіть метод showData з person і newPerson, результат має бути наступним:
// person.showData() – має повернути Ivan Ivanov
// newPerson.showData() – має повернути Petro Petriv

// let person = {
//       firstName : 'Ivan',
//       secondName : 'Ivanov',
//       showData(){
//             console.log(`Name - ${this.firstName}, secondName - ${this.secondName}`);
//       }
// }
// let newPerson = Object.assign({}, person);
// newPerson.firstName = 'Petro';
// newPerson.secondName = 'Petriv';
// person.showData();
// newPerson.showData();

// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
// Створіть порожній об'єкт MyMath.
// Cтворіть властивість a зі значенням 5.
// Cтворіть властивість b зі значенням 2.
// Створіть 4 методи які будуть робити наступне:
// sum – обчислює суму a+b та повертає значення console.log().
// multiplication – обчислює множення a*b та повертає значення console.log().
// division – обчислює ділення a/b та повертає значення console.log().
// subtraction – обчислює віднімання a-b та повертає значення console.log().
// Запустіть кожен з цих методів, результат має бути наступним:
// MyMath.sum() – має повернути 5 + 2 = 7
// MyMath.multiplication() – має повернути 5 * 2 = 10
// MyMath.division() – має повернути 5 / 2 = 2.5
// MyMath.subtraction() – має повернути 5 - 2 = 3

let MyMath ;
MyMath = {
      a:5,
      b:2,
      sum(){
      console.log(`Suma = ${this.a+this.b}`);
      },
      multiplication(){
            console.log(`Multiplication = ${this.a*this.b}`);
      }
      ,
      division(){
            console.log(`Division = ${this.a/this.b}`);
      }
      ,
      subtraction(){
            console.log(`Subtraction = ${this.a-this.b}`);
      }
}
MyMath.sum()
MyMath.multiplication()
MyMath.division()
MyMath.subtraction()