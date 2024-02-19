function exerciseFunc() {
	let car: string = 'bmw';
	let age: number = 30;
	let isAdult: boolean = true;
	let a: number[] = [1, 2, 3];
	let a2: Array<number> = [1, 2, 3];

	// 튜플(Tuple)
	let b: [string, number] = ['a', 2];

	// void
	function sayHellow(): void {
		console.log('hello');
	}

	// never
	function showError(): never {
		throw new Error();
	}
	function infLoop(): never {
		while (true) {
			// do something...
		}
	}

	// enum
	enum Os {
		window,
		Ios,
		Android,
	}
	let myOs: Os;

	// unll, undifined
	let aaa: null = null;
	let bbb: undefined = undefined;

	type Score = 'A' | 'B' | 'C' | 'F';
	interface User {
		name: string;
		age: number;
		gender?: string;
		readonly birthYear: number;
		[grade: number]: Score;
	}
	let user: User;
	user = {
		name: 'xx',
		age: 30,
		birthYear: 2000,
		1: 'A',
		2: 'B',
	};
	console.log(user.name);
}

function addNumbers(a: number, b: number): number {
	return a + b;
}

class Person {
	constructor(public name: string, public age: number) {}
}

export function exerciseFunc0218() {
	// 함수 사용 예제
	const result = addNumbers(5, 10);
	console.log('Result:', result);

	// 클래스 사용 예제
	const person = new Person('John Doe', 25);
	console.log('Person:', person);
}
