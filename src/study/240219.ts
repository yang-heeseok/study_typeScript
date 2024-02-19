export function exerciseFunc0219() {}

// function
function study_function() {
	interface Add {
		(num1: number, num2: number): number;
	}

	const add: Add = function (x, y) {
		return x + y;
	};

	interface IsAdult {
		(age: number): boolean;
	}

	const a: IsAdult = (age) => {
		return age > 19;
	};

	add(10, 20);
}

// implements
function study_implements() {
	interface Car {
		color: string;
		wheels: number;
		start(): void;
	}

	interface Benz extends Car {
		door: number;
		stop(): void;
	}

	const benz: Benz = {
		door: 5,
		stop() {
			console.log('stop...');
		},
		color: 'blue',
		wheels: 4,
		start() {
			console.log('start...');
		},
	};

	class Bmw implements Car {
		color;
		wheels = 4;
		constructor(c: string) {
			this.color = c;
		}
		start() {
			console.log('go...');
		}
	}

	const b = new Bmw('green');
	console.log(b);
	b.start();
}

// 확장
function study_extends() {
	interface Car {
		color: string;
		wheels: number;
		start(): void;
	}

	interface Toy {
		name: string;
	}

	interface ToyCar extends Car, Toy {
		price: number;
	}

	class ToyCarObj implements ToyCar {
		name: string;
		price: number;
		color: string;
		wheels: number;
		start() {
			console.log('start');
		}
	}

	const tt = new ToyCarObj();
	console.log(tt.start);
	console.log(tt.start());
}

// function + alpha
function study_funcExtend() {
	function hello(age: number | undefined, name: string): string {
		if (age !== undefined) {
			return `hello, ${name}. You are ${age}.`;
		} else {
			return `hello, ${name}`;
		}
	}

	console.log(hello(30, 'sam'));
	console.log(hello(undefined, 'sam'));

	// 나머지 매개변수
	function add(...nums: number[]) {
		return nums.reduce((result, num) => result + num, 0);
	}
	add(1, 2, 3, 4); // 6
	add(1, 2, 3, 45, 6, 7, 8, 9, 10); // 55
}

// this
function study_this() {
	interface User {
		name: string;
	}
	const Sam: User = {name: `sam`};
	function showName(this: User, age: number, gender: 'm' | 'f') {
		console.log(this.name, age, gender);
	}
	const abc = showName.bind(Sam);
	abc(30, 'm');
}

// overload function
function study_validator() {
	interface User {
		name: string;
		age: number;
	}

	// overload
	function join(name: string, age: string): string;
	function join(name: string, age: number): User;
	// validator
	function join(name: string, age: number | string): User | string {
		if (typeof age === 'number') {
			return {
				name,
				age,
			};
		} else {
			return '나이는 숫자로 입력해주세요.';
		}
	}

	const sam: User = join('sam', 30);
	const jane: string = join('Jane', '30');
}

// Generic
function study_generic() {
	// 1
	function getSize<T>(arr: T[]): number {
		return arr.length;
	}
	const arr1 = [1, 2, 3];
	getSize<number | string>(arr1);

	const arr2 = ['a', 'b', 'c'];
	getSize<string>(arr2);

	const arr3 = [false, true, true];
	getSize<boolean>(arr3);

	const arr4 = [{}, {}, {name: 'Tim'}];
	getSize(arr4);

	// 2
	interface Mobile<T> {
		name: string;
		price: number;
		option: T;
	}
	const m1: Mobile<{color: string; coupon: boolean}> = {
		name: 's21',
		price: 1000,
		option: {
			color: 'red',
			coupon: false,
		},
	};
	const m2: Mobile<string> = {
		name: 's20',
		price: 900,
		option: 'good',
	};

	// 3
	interface User {
		name: string;
		age: number;
	}
	interface Car {
		name: string;
		color: string;
	}
	interface Book {
		price: number;
	}

	const user: User = {name: 'a', age: 10};
	const car: Car = {name: 'bmw', color: 'red'};
	const book: Book = {price: 3000};
	function showName<T extends {name: string}>(data: T): string {
		return data.name;
	}

	showName(user);
	showName(car);
	// showName(book);
}

// utilityType
function study_utilityType() {
	// keyof
	interface User {
		id: number;
		name: string;
		age: number;
		gender?: 'm' | 'f';
	}
	type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
	const uk: UserKey = 'age';

	// Partial<T>
	let adimn: Partial<User> = {
		id: 1,
		name: 'Bob',
		// school:'high'
	};

	// Required<T>
	let user1: Required<User> = {
		id: 2,
		name: 'Bob',
		age: 15,
		gender: 'm',
	};

	// Readonly<T>
	let user2: Readonly<User> = {
		id: 3,
		name: 'Bob',
		age: 11,
	};
	// let user2.id = 4

	// Record<K,T>
	// 1
	interface Score {
		'1': 'A' | 'B' | 'C' | 'D';
		'2': 'A' | 'B' | 'C' | 'D';
		'3'?: 'A' | 'B' | 'C' | 'D';
		'4'?: 'A' | 'B' | 'C' | 'D';
	}
	const score: Score = {
		'1': 'A',
		'2': 'B',
	};
	type Grade = '1' | '2' | '3' | '4';
	type ScoreV = 'A' | 'B' | 'C' | 'D';
	const score1: Record<Grade, ScoreV> = {
		'1': 'A',
		'2': 'B',
		'3': 'B',
		'4': 'B',
	};

	// 2
	function isValid(user: User) {
		const result: Record<keyof User, boolean> = {
			id: user.id > 0,
			name: user.name !== '',
			age: user.age > 0,
			gender: user.gender === 'm',
		};
		return result;
	}

	// Pick<T, K>
	const admin: Pick<User, 'id' | 'name'> = {
		id: 0,
		name: 'Bob',
	};

	// Pick<T, K>
	const admin2: Omit<User, 'age' | 'gender'> = {
		id: 0,
		name: 'Bob',
	};

	// Exclude<T1, T2>
	type T1 = string | number | boolean;
	type T2 = Exclude<T1, number>;

	// NonNullable<Type>
	type T11 = string | null | number | boolean | void | undefined;
	type T22 = NonNullable<T11>;
}
