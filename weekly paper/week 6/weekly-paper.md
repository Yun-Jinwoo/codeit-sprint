# 1. 예시의 코드를 실행할 때, 콘솔에 출력될 값과 그 이유를 설명해 주세요.

1번 부터 4번까지 차례로 살펴보자.

### 1️⃣

`let num = 1;`

변수 `num`을 **1**로 선언하고 초기화한다.

> 현재 `num` 은 **1**

### 2️⃣

`setTimeout(() => {
    num = 2;
}, 0);`

0ms 뒤에 콜백 함수인 `num = 2;` 를 실행한다.

단, **setTimeout**은 비동기적으로 실행되므로, 0ms 뒤에 실행된다고 해도,
현재 실행 코드가 모두 완료된 후에 실행된다.

즉, `num = 2;` 가 바로 실행되지 않고, 실행 중인 코드가 모두 실행되면 실행된다.

> 현재 `num` 은 **1**

### 3️⃣

`num = 3;`

num의 값을 3으로 변경한다.

> 현재 `num` 은 **3**

### 4️⃣

`console.log(num);`

num의 값을 출력한다.

> > **3이 출력됨**

> 현재 `num` 은 **3**

### ➕

코드가 모두 실행되면 2️⃣ 의 num = 2; 가 실행되어 num이 2가 된다.

> 현재 `num` 은 **2**

# 2. AJAX에 대해 설명해 주세요.

## 🐤 AJAX?

**AJAX**는 **A**synchronous **J**avaScript **A**nd **X**ML의 약자로, 말 그대로 JavaScript와 XML을 이용한 비동기적 정보 교환 기법이다.

브라우저의 XMLHttpRequest를 이용해 전체 페이지를 새로 가져오지 않고도 페이지 일부만을 변경할 수 있도록 javascript를 실행해 서버에 데이터만을 별도로 요청한다.

➡️ **새로고침 없이 서버에서 데이터를 가져올 수 있음**

데이터를 가져올 때마다 페이지를 새로고침하는 방식보다 **부드럽게 동작**하는 웹/앱을 구현할 수 있다.

확인용 예시 사이트 ⇒ [AJAX](https://www.notion.so/AJAX-38d8749817244c71a098426827e76915?pvs=21)

## 🐥 **AJAX** 코드 작성법?

### 옛날 JS 방식 (**XMLHttpRequest)**

```jsx
<script>
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(ajax.responseText)
    }
    };
    ajax.open("GET", "https://Yun-Jinwoo.github.io/price.json", true);
    ajax.send();
</script>
```

- **`XMLHttpRequest`** 객체를 생성하여 서버와 HTTP 요청 주고받음
- **`onreadystatechange`** 이벤트를 통해 요청 상태를 확인하고,
  **`readyState == 4`**이면서 **`status == 200`**일 때 데이터를 처리
- **readyState**❓
  **`readyState`**는 요청의 현재 상태를 나타내며, 다음과 같은 값을 가진다
  1. **0 (UNSENT)**: **`XMLHttpRequest`** 객체가 생성되었지만, 아직 **`open()`** 메서드가 호출되지 않은 상태.
  2. **1 (OPENED)**: **`open()`** 메서드가 호출된 상태로, 요청이 초기화됨.
  3. **2 (HEADERS_RECEIVED)**: 요청이 서버로 전송되었고, 응답 헤더가 수신된 상태.
  4. **3 (LOADING)**: 응답 본문을 처리 중인 상태.
  5. **4 (DONE)**: 요청이 완료되고 모든 데이터가 수신된 상태.
- **status**❓
  **`status`**는 HTTP 응답 코드로, 서버에서 반환된 응답의 성공 여부를 나타낸다.
  - **200**: 요청이 성공적으로 처리됨 (OK).
  - **400**: 클라이언트 오류 (Bad Request).
  - **500**: 서버 오류 (Internal Server Error).
- `GET`으로 데이터를 가져온 뒤 **`responseText`**로 출력

### 요즘 JS 방식 (**Fetch API)**

```jsx
<script>
    fetch('https://Yun-Jinwoo.github.io/price.json')
    .then((response) => {
        if (!response.ok) {
        throw new Error('400 아니면 500 에러남');
        }
        return response.json();
    })
    .then((결과) => {
        console.log(결과);
    })
    .catch(() => {
        console.log('에러남');
    });
</script>
```

- Promise 기반의 **`fetch()`** 메서드를 사용하여 데이터를 가져옴
- **`response.ok`**를 이용해 HTTP 응답 상태를 확인
  - 상태 코드가 성공(200)이 아니면 에러 발생
- 첫 번째 **`then()`**에서 응답 객체를 JSON으로 변환
- 두 번째 **`then()`**에서 변환된 데이터를 처리
- 에러가 발생하면 **`catch()`** 블록에서 처리됨

### 외부 라이브러리 방식 (Axios 사용)

```jsx
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"></script>

<script>
    axios.get('https://Yun-Jinwoo.github.io/price.json')
    .then((result) => {
        console.log(result.data);
    })
    .catch(() => {
        console.log('에러남');
    });
</script>

```

- 외부 라이브러리인 `Axios`를 활용해, HTTP 요청을 간단하게 처리
- **`axios.get()`** 을 사용하여 데이터를 가져옴
  - 성공하면 응답 데이터(**`result.data`**)를 출력
  - 실패하면 **`catch()`** 블록에서 에러를 처리
