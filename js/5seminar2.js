/*
 * Напиши класс Storage который создаёт объекты для управления складом товаров.
 * При вызове будет получать один аргумент - начальный массив товаров,
 * и записывать его в свойство items.
 * Добавь методы класса:
 * getItems() - возвращает массив товаров.
 * addItem(item) - получает новый товар и добавляет его к текущим.
 * removeItem(item) - получет товар и, если он есть, удаляет его из текущих.
 */

/* class MyStorage {
    _items;

    constructor(items) {
        this._items = items ?? []; // проверка на null и undefined 
    }

    getItems() {
        return this._items;
    }

    addItems(item) {
        this._items.push(item);
    }

    removeItem(item) {
        const index = this._items.findIndex(value => value === item);

        if (index > -1) {
            this._items.splice(index, 1);
        }
    }
}

const storage = new MyStorage();
storage.addItems("my item");
storage._items;
console.log(storage.getItems()); // ["my item"]
storage.removeItem("my item");
console.log(storage.getItems()); // [] */

////////////////////////////////////////////

/*
 * Напиши класс Client который создаёт объект со свойствами firstname и lastname.
 * Объяви приватные свойства #firstname и #lastname, доступ к которым сделай через геттер и сеттер firstname & lastname.
 */

/* class Client {
    #firstname;
    #lastname;
    #initcount = 0;

    get firstname() {
        return this.#firstname;
    }

    set firstname(text) { ?????????????
        this.#initcount++;
        this.#firstname = text;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(text) { ????????????????
        this.#initcount++;
        this.#lastname = text;
    }

    get initcount() {
        return this.#initcount;
    }

    get initials() {
        return this.#firstname[0] + this.#lastname[0];
    }

    getInitials = () => this.#firstname[0] + this.#lastname[0];
}

const client = new Client();
client.firstname = "Jack";
client.lastname = "Todd";
console.log(client.initcount);
console.log(client.initials);
console.log(client.getInitials()); */

/*
 * Напиши класс Notes который управляет коллекцией заметок в свойстве items.
 * Заметка это объект со свойствами text и priority.
 * Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
 * Добавь методы addNote(note), removeNote(text) и updateNotePriority(text, newPriority).
 */

/* class Note {
    static Priority = {
        LOW: 1,
        NORMAL: 2,
        HIGH: 3,
    }
    constructor(text, priority) {
        this.text = text;
        this.priority = priority;
    }
}

class Notes {
    #notes = [];

    addNote(note) {
        this.#notes.push(note);
    }
    
    removeNote(note) {
        const index = this.#notes.findIndex(value => value.text === note.text);
        if (index > -1) {
            this.#notes.splice(index, 1);
        }
    }
    
    updateNotePriority(text, newPriority) {
        for (const note of this.#notes) {
            if (note.text !== text) continue;
            note.priority = newPriority;
        }
    }

    get notes() {
        return this.#notes.sort((a, b) => {
            return b.priority - a.priority;
        })
    }
}

const notes = new Notes();

const note1 = new Note("first", Note.Priority.NORMAL);
const note2 = new Note("second", Note.Priority.HIGH);
const note3 = new Note("third", Note.Priority.LOW);

notes.addNote(note1);
notes.addNote(note2);
notes.addNote(note3);

console.log(notes.notes);

notes.removeNote(note2);
notes.updateNotePriority("first", Note.Priority.HIGH);
console.log(notes.notes); */

///////////////////////////////////////////////

/*
 * Пример 2 - перепишите классы  Worker, Boss с использованием классов

class A {
  constructor() {
    console.log('A created');
  }
}
class B extends A {
  constructor() {
    super();
    console.log('B created');
  }
}
const a1 = new A();
const b1 = new B();
*/

/* class Worker {
  constructor({ firstname, lastname, rate, days }) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._rate = rate;
    this._days = days;
  }

  getSalary() {
    return this._rate * this._days;
  }

  getFullName() {
    return `${this._firstname} ${this._lastname}`;
  }
}

class Boss extends Worker {
  constructor({ firstname, lastname, rate, days, workersCount }) {
    super({ firstname, lastname, rate, days });
    this._workersCount = workersCount;
  }

  getSalary() {
    return super.getSalary() * this._workersCount;
  }
}

const worker = new Worker({
  firstname: 'Ivan',
  lastname: 'Petrov',
  rate: 10,
  days: 50,
});

console.log(worker.getFullName(), worker.getSalary()); // Ivan Petrov 500

const boss = new Boss({
  firstname: 'Fedor',
  lastname: 'Sumkin',
  rate: 15,
  days: 50,
  workersCount: 5,
});

console.log(boss.getFullName(), boss.getSalary()); // Fedor Sumkin 3750 */

////////////////////////////////////////////

/*
 * Отсортируй c помощью функции массив по приоритету, где в начале 'Super High', а в конце 'Backlog'.
 * Если приоритет будет одинаковый, то первее будет тот, у кого id меньше
 * const PRIORITY нельзя изменять
 * const array нельзя изменять
 */

const PRIORITY = {
  SUPER_HIGH: 'Super High',
  HIGH: 'High',
  NORMAL: 'Normal',
  LOW: 'Low',
  BACKLOG: 'Backlog',
};

const array = [
  { id: 9, text: 'This is Normal', priority: 'Normal' },
  { id: 24, text: 'This is High', priority: 'High' },
  { id: 18, text: 'This is Normal', priority: 'Normal' },
  { id: 22, text: 'This is Low', priority: 'Low' },
  { id: 8, text: 'This is Normal', priority: 'Normal' },
  { id: 39, text: 'This is Backlog', priority: 'Backlog' },
  { id: 36, text: 'This is Super High', priority: 'Super High' },
  { id: 14, text: 'This is Normal', priority: 'Normal' },
  { id: 64, text: 'This is High', priority: 'High' },
  { id: 73, text: 'This is Super High', priority: 'Super High' },
  { id: 44, text: 'This is High', priority: 'High' },
  { id: 52, text: 'This is High', priority: 'High' },
  { id: 33, text: 'This is Backlog', priority: 'Backlog' },
  { id: 90, text: 'This is Normal', priority: 'Normal' },
  { id: 61, text: 'This is Normal', priority: 'Normal' },
  { id: 65, text: 'This is Low', priority: 'Low' },
  { id: 81, text: 'This is Backlog', priority: 'Backlog' },
  { id: 5, text: 'This is Normal', priority: 'Normal' },
  { id: 51, text: 'This is Low', priority: 'Low' },
  { id: 20, text: 'This is High', priority: 'High' },
  { id: 35, text: 'This is Low', priority: 'Low' },
  { id: 1, text: 'This is Low', priority: 'Low' },
  { id: 67, text: 'This is High', priority: 'High' },
  { id: 86, text: 'This is Low', priority: 'Low' },
  { id: 70, text: 'This is Normal', priority: 'Normal' },
  { id: 26, text: 'This is Backlog', priority: 'Backlog' },
  { id: 97, text: 'This is Super High', priority: 'Super High' },
  { id: 80, text: 'This is Low', priority: 'Low' },
  { id: 99, text: 'This is Backlog', priority: 'Backlog' },
  { id: 42, text: 'This is Super High', priority: 'Super High' },
  { id: 46, text: 'This is Backlog', priority: 'Backlog' },
  { id: 43, text: 'This is Normal', priority: 'Normal' },
  { id: 93, text: 'This is High', priority: 'High' },
  { id: 56, text: 'This is High', priority: 'High' },
  { id: 92, text: 'This is High', priority: 'High' },
  { id: 10, text: 'This is Low', priority: 'Low' },
  { id: 48, text: 'This is Backlog', priority: 'Backlog' },
  { id: 27, text: 'This is Super High', priority: 'Super High' },
  { id: 31, text: 'This is Low', priority: 'Low' },
  { id: 88, text: 'This is Normal', priority: 'Normal' },
  { id: 98, text: 'This is High', priority: 'High' },
  { id: 12, text: 'This is Backlog', priority: 'Backlog' },
  { id: 37, text: 'This is Super High', priority: 'Super High' },
  { id: 58, text: 'This is Normal', priority: 'Normal' },
  { id: 84, text: 'This is Low', priority: 'Low' },
  { id: 79, text: 'This is Normal', priority: 'Normal' },
  { id: 11, text: 'This is Super High', priority: 'Super High' },
  { id: 66, text: 'This is Super High', priority: 'Super High' },
  { id: 59, text: 'This is Backlog', priority: 'Backlog' },
  { id: 75, text: 'This is Backlog', priority: 'Backlog' },
  { id: 49, text: 'This is High', priority: 'High' },
  { id: 38, text: 'This is Low', priority: 'Low' },
  { id: 25, text: 'This is Normal', priority: 'Normal' },
  { id: 55, text: 'This is Low', priority: 'Low' },
  { id: 60, text: 'This is Super High', priority: 'Super High' },
  { id: 40, text: 'This is Normal', priority: 'Normal' },
  { id: 6, text: 'This is Low', priority: 'Low' },
  { id: 41, text: 'This is Low', priority: 'Low' },
  { id: 83, text: 'This is Super High', priority: 'Super High' },
  { id: 15, text: 'This is Super High', priority: 'Super High' },
  { id: 54, text: 'This is Super High', priority: 'Super High' },
  { id: 50, text: 'This is Backlog', priority: 'Backlog' },
  { id: 17, text: 'This is Normal', priority: 'Normal' },
  { id: 45, text: 'This is Normal', priority: 'Normal' },
  { id: 82, text: 'This is Super High', priority: 'Super High' },
  { id: 34, text: 'This is High', priority: 'High' },
  { id: 62, text: 'This is Super High', priority: 'Super High' },
  { id: 2, text: 'This is High', priority: 'High' },
  { id: 71, text: 'This is Low', priority: 'Low' },
  { id: 91, text: 'This is High', priority: 'High' },
  { id: 4, text: 'This is Super High', priority: 'Super High' },
  { id: 77, text: 'This is Backlog', priority: 'Backlog' },
  { id: 94, text: 'This is Low', priority: 'Low' },
  { id: 85, text: 'This is High', priority: 'High' },
  { id: 69, text: 'This is Backlog', priority: 'Backlog' },
  { id: 78, text: 'This is Super High', priority: 'Super High' },
  { id: 13, text: 'This is Super High', priority: 'Super High' },
  { id: 30, text: 'This is Super High', priority: 'Super High' },
  { id: 53, text: 'This is Backlog', priority: 'Backlog' },
  { id: 47, text: 'This is Super High', priority: 'Super High' },
  { id: 72, text: 'This is High', priority: 'High' },
  { id: 89, text: 'This is Normal', priority: 'Normal' },
  { id: 21, text: 'This is Super High', priority: 'Super High' },
  { id: 87, text: 'This is Low', priority: 'Low' },
  { id: 63, text: 'This is Low', priority: 'Low' },
  { id: 3, text: 'This is Backlog', priority: 'Backlog' },
  { id: 23, text: 'This is Backlog', priority: 'Backlog' },
  { id: 16, text: 'This is Super High', priority: 'Super High' },
  { id: 0, text: 'This is Super High', priority: 'Super High' },
  { id: 57, text: 'This is Backlog', priority: 'Backlog' },
  { id: 74, text: 'This is High', priority: 'High' },
  { id: 29, text: 'This is Low', priority: 'Low' },
  { id: 19, text: 'This is High', priority: 'High' },
  { id: 28, text: 'This is High', priority: 'High' },
  { id: 95, text: 'This is Normal', priority: 'Normal' },
  { id: 68, text: 'This is Backlog', priority: 'Backlog' },
  { id: 7, text: 'This is Super High', priority: 'Super High' },
  { id: 96, text: 'This is Low', priority: 'Low' },
  { id: 76, text: 'This is High', priority: 'High' },
  { id: 32, text: 'This is High', priority: 'High' },
];

// console.log(Object.values(PRIORITY));
const sortTasks = tasks => {
  const priorities = Object.values(PRIORITY);
  return tasks.sort((task1, task2) => {
    const priority1 = priorities.indexOf(task1.priority);
    const priority2 = priorities.indexOf(task2.priority);
    if (priority1 < priority2) {
      return -1; // negative value
    }
    if (priority1 === priority2) {
      return task1.id - task2.id;
    }
    return 1; // positive value
  });
};

console.table(sortTasks(array));