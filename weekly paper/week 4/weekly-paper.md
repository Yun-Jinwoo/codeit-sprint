## **var, let, const 를 중복 선언 허용, 스코프, 호이스팅 관점에서 서로 비교해 주세요.**

### 중복 선언 허용

- **`var`**: **중복 선언 허용**
  동일한 이름의 변수를 같은 스코프 내에서 여러 번 선언해도 오류가 발생하지 않는다.
  ```jsx
  var name = "Jinwoo";
  var name = "Yun"; // 중복 선언 허용
  console.log(name); // Yun
  ```
  당연히, **재할당도 가능**하다.
  ```jsx
  var name = "Jinwoo";
  name = "Yun"; // 재할당 가능
  console.log(name); // Yun
  ```
- **`let`**: **중복 선언 불가**
  같은 스코프 내에서 동일한 이름의 변수를 다시 선언하면 오류가 발생한다.
  ```jsx
  let name = "Jinwoo";
  let name = "Yun"; // SyntaxError: Identifier 'name' has already been declared
  ```
  반면, **재할당은 가능**하다.
  ```jsx
  let name = "Jinwoo";
  name = "Yun"; // 재할당 가능
  console.log(name); // Yun
  ```
- **`const`**: **중복 선언 불가**
  `let`과 동일하게 중복 선언이 허용되지 않는다.
  ```jsx
  const name = "Jinwoo";
  const name = "Yun"; // SyntaxError: Identifier 'name' has already been declared
  ```
  하지만, `let` 과 달리 **재할당은 불가능**하다.
  ```jsx
  const name = "Jinwoo";
  name = "Yun"; // Uncaught TypeError: Assignment to constant variable
  ```

### 스코프

**변수에 접근할 수 있는 범위**

- **`var`**: **Function Scope (함수 스코프)**
  변수가 선언된 함수 내부의 어디서든 참조가 가능하지만, 외부로는 참조가 불가능하다.
  함수 안에서는 **지역 변수**로 인식되고,
  함수 밖에서는 **전역 변수**로 취급된다.
  ```jsx
  function getName() {
    if (true) {
      var name = "Jinwoo";
    }
    console.log(name); // 'Jinwoo' (블록 스코프 무시)
  }
  example();
  console.log(name); // ReferenceError: name is not defined
  ```
- **`let`**: **Block Scope (블록 스코프)**
  변수가 선언된 중괄호 `{}`로 감싸진 블록 내에서만 유효하다.
  ```jsx
  if (true) {
    let name = "Jinwoo";
  }
  console.log(name); // ReferenceError: name is not defined
  ```
- **`const`**: **Block Scope (블록 스코프)**
  `let`과 마찬가지로 중괄호 내에서만 유효하다.
  ```jsx
  if (true) {
    let name = "Jinwoo";
  }
  console.log(name); // ReferenceError: name is not defined
  ```

### 호이스팅

`JavaScript`의 **변수, 함수 선언을 코드의 최상단으로 끌어올리는 JavaScript의 동작 방식**

`JavaScript`**가 실행되기 전에 내부적으로 선언 부분을 메모리에 먼저 등록**한다.

한마디로, **"선언이 코드보다 먼저 실행되는 것처럼 보이는 현상"** 이다.

- **`var`**: **호이스팅 됨 (초기화는 `undefined`)**
  변수 선언이 코드의 맨 위로 끌어올려지지만, 값은 할당되지 않고 `undefined`로 초기화됩니다.
  ```jsx
  console.log(name); // undefined
  var name = "Jinwoo";
  console.log(name); // 'Jinwoo'
  ```
- **`let`**: **호이스팅 됨 (초기화 안 됨 — TDZ 발생)**
  `let`도 호이스팅은 되지만 **Temporal Dead Zone**에 의해 선언 전에 접근하면 오류가 발생한다.
  ```jsx
  console.log(name); //ReferenceError: Cannot access 'name' before initialization
  let name = "Jinwoo";
  ```
- **`const`**: **호이스팅 됨 (초기화 안 됨 — TDZ 발생)**
  `let`과 마찬가지로 TDZ가 적용되어 선언 전에 접근하면 오류가 발생한다.
  ```jsx
  console.log(name); //ReferenceError: Cannot access 'name' before initialization
  const name = "Jinwoo";
  ```

---

### **TDZ (Temporal Dead Zone)**

변수가 선언되었지만 아직 초기화되지 않은 상태

➡️ **선언만 되고 아직 초기화 되지 않은 변수가 머무는 공간**

`let` 이나 `const` 로 선언한 변수들만 TDZ 동작 방식을 거친다.

```jsx
console.log(value); // ReferenceError (호이스팅으로 선언은 됐지만 초기화되지 않음)
let value; // 초기화
console.log(value); // undefined (초기화 되었으므로 TDZ를 벗어남, 값이 할당되지 않음)
value = "사용 가능";
console.log(value); // '사용 가능'
```

```jsx
console.log(value) // ReferenceError (호이스팅으로 선언은 됐지만 초기화되지 않음)
const value; // SyntaxError (const는 선언할 때 값도 할당해줘야함)
const value = '사용 가능'
console.log(value) // '사용 가능'
```
