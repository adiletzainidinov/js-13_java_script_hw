console.log('Task 1');
function Book(title, autor, year) {
  this.title = title;
  this.autor = autor;
  this.year = year;
  this.language = 'Kurgyz';
  this.getSummary = function () {
    console.log((this.title = title));
    console.log((this.autor = autor));
    console.log((this.year = year));
  };
}

const firstBook = new Book('Учкан куш', 'Мамарасул Сейитбек', 1993);
const secondBook = new Book('Аккан Суу', 'Айзирек Акунова', 1823);
const thirdBook = new Book('Шамалдуу от', 'Руслан Бектемиров', 1936);

console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);

console.log('Task 2');

const myBook = new Book('life', 'Adilet Zainidinov', 2024);
myBook.getSummary();

console.log('Task 3');

function News(name, age) {
  this.name = name;
  this.age = age;
}

const student = new News('Adilet', 24);
console.log(student);

function without(name, age) {
  console.log((this.name = name));
  console.log((this.age = age));
}

without('Kairat', 22);

// По разному выполняем конструкцию This,В первом случаи создаем переменную и снаружи функции вызываем эту переменную а во втором просто вызываем функцию

console.log('Task 4');

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.study = function () {
    console.log(this.grade = grade);
  };
}

const fiveSchool = ('Ilgis', '5 class') 
console.log(fiveSchool);