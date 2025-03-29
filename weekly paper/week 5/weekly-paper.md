# **자바스크립트 this에 대해 설명해 주세요.**

`this` 는 현재 실행 중인 코드에서 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 **자기 참조 변수**이다.
`this`가 가리키는 값, 즉 `this` 의 **바인딩**은 함수 호출 방식에 의해 **동적**으로 결정된다.

### 호출 방식에 따른 `this` 가 가리키는 객체

1. **전역 공간의 `this` : 전역 객체**
2. **메소드 호출 시 메소드 내부의 `this` : 해당 메소드를 호출한 객체**
3. **함수 호출 시 함수 내부의 `this` : 지정되지 않음**

### 1. 전역 공간의 `this`

기본적으로 this 에는 전역 객체(window)가 바인딩 된다.

```jsx
console.log(this); // window
```

### 2. **메소드 호출 시 메소드 내부의 `this`**

메서드로서 호출된 함수 내부에서 this는 해당 메서드가 속한 객체를 가리킨다.

```jsx
const person = {
  name: "Yun",
  sayName() {
    console.log(this.name);
  },
};

person.sayName(); // Yun
```

### 3. **함수 호출 시 함수 내부의 `this`**

**함수를 호출했을 때 그 함수 내부의 `this`는 지정되지 않는다.**

`this`가 지정되지 않은 경우, `this`는 자동으로 전역 객체를 바라보기 때문에

**함수를 호출하면 함수 내부에서의 `this`는 전역 객체**가 된다.

```jsx
const myFunc = function () {
  console.log(this);
};
myFunc(); // window
```

아래 상황에서의 출력은 어떻게 될까?

```jsx
const person = {
  name: "Yun",
  func1: function () {
    const func2 = function () {
      console.log(this.name);
    };
    func2();
  },
};

person.func1();
```

💡 `undefined` 가 출력된다.

- `.func1()` 메소드 호출 시 내부 함수 `.func2()`가 실행됨
- 함수가 호출됐으므로 `.func2()` 내부의 **this는 지정되지 않아서 곧 전역 객체를 가리킴**
- 전역 객체에 `name`이란 속성은 존재하지 않으므로 `undefined`가 뜸

❗ 여러모로 복잡하고 전혀 의도했던 바가 아니다.

이걸 어떻게 해결할 수 있을까?? ⇒ **Arrow Function**!

## Arrow Function 이 무엇일까요

ES6(ECMAScript 6)에서 도입된 JavaScript의 간결한 함수 표현식

```jsx
// 일반 함수 표현식
const add = function (x, y) {
  return x + y;
};

// 화살표 함수 표현식
const add = (x, y) => x + y;

// 매개변수가 하나일 때 괄호 생략 가능
const square = (x) => x * x;

// 매개변수가 없을 때 괄호 필요
const greet = () => "Hello!";
```

## Arrow Function과 일반 함수의 차이는 무엇일까요

### **1. `this` 바인딩 차이**

- `Arrow Function`은 `this`를 자신이 정의된 **상위 스코프의 `this`로 고정**한다.
  ```jsx
  const person = {
    name: "Yun",
    func1: function () {
      const func2 = function () {
        console.log(this.name);
      };
      func2();
    },
  };

  person.func1(); // undefined
  ```
  일반 함수 호출 시 `this` 는 전역 객체인 `window` 를 가리킨다.
  `window` 객체에는 `name` 값이 없으므로 `undefinded` 가 나온다.
  이 경우 `func2`를 `Arrow function` 으로 바꿔주면 의도한 결과가 나온다.
  ```jsx
  const person = {
    name: "Yun",
    func1: function () {
      const func2 = () => {
        console.log(this.name);
      };
      func2();
    },
  };

  person.func1(); // Yun
  ```
  `Arrow function` 은 `this`를 자신이 정의된 **상위 스코프의 `this`로 고정**하므로, `person` 객체를 가리키게 되어, `name` 값인 `Yun`이 나온다.

### 2. 생성자 함수로 사용 불가

화살표 함수는 **`this`가 고정**되어 있기 때문에 **생성자 함수로 사용할 수 없다.**

```jsx
const Person = (name) => {
  this.name = name;
};

// TypeError: Person is not a constructor
const alice = new Person("Alice");
```

### 3. `arguments` 객체가 없다

일반 함수에서는 모든 parameter에 접근하는 유사 배열 객체인 `arguments` 가 존재했다.

그러나, 화살표 함수에는 **`arguments`** 객체가 없다.

```jsx
function showArgs() {
  console.log(arguments);
}
showArgs(1, 2, 3); // [1, 2, 3]

const showArgsArrow = () => {
  console.log(arguments);
};
showArgsArrow(1, 2, 3); // ReferenceError: arguments is not defined
```

만약, 화살표 함수에서도 모든 parameter 에 접근하고 싶다면 `...args` 을 사용하자.

```jsx
const showArgsArrow = (...args) => {
  console.log(args);
};
showArgsArrow(1, 2, 3); // [1, 2, 3]
```

# **렉시컬 스코프(Lexical scope)에 대해 설명해 주세요.**

### 스코프(Scope)란?

**스코프**란 **참조 대상 식별자**(변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙이다.

### 렉시컬 스코프(Lexical scope)란?

렉시컬 스코프는 함수 호출 시점과는 무관하게 변수가 선언된 위치에 따라 스코프가 결정되는 것을 말한다. 즉, 코드를 작성할 때 변수가 어디에서 선언되었는지를 통해 그 변수를 어디에서 접근할 수 있는지가 결정된다.

즉, 함수를 호출하는 위치가 아니라 **함수를 어디에서 선언했느냐**가 중요하다.

```jsx
function outer() {
  let a = 10; // outer의 스코프

  function inner() {
    console.log(a); // inner 함수 내부에서는 a에 접근 가능
  }

  return inner;
}

const myFunc = outer(); // outer 함수 실행 후 inner를 반환
myFunc(); // 10
```

### **동적 스코프(Dynamic Scope)와의 차이**

동적 스코프(Dynamic Scope)는 함수가 실행되는 **"시점"의 컨텍스트**에서 스코프를 결정하는 방식

```jsx
let a = 100;

function foo() {
  console.log(a);
}

function bar() {
  let a = 200;
  foo(); // 렉시컬 스코프: 100 / 동적 스코프: 200
}

bar();
```

### 클로저(Closure)

**클로저**는 반환된 내부함수가 자신이 선언됐을 때의 환경(렉시컬 스코프)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말한다.

즉, **자신이 생성될 때의 환경(렉시컬 스코프)을 기억하는 함수**

```jsx
function outer() {
  let count = 0; // outer의 지역 변수

  function inner() {
    count++; // 외부 변수 count에 접근 가능
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer 실행 -> inner 반환
counter(); // 1
counter(); // 2
counter(); // 3
```

💡`inner()` 함수가 실행된 이후에도 `outer()` 의 **지역 변수** `count` 가 **사라지지 않고 유지**된다

이는 **클로저 덕분** 이며, **렉시컬 스코프를 이용해 상위 스코프의 변수를 기억하기 때문**
