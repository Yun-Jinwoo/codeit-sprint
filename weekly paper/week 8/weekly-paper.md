# 리액트 생명주기(life cycle)에 대해 설명해 주세요.

![](https://velog.velcdn.com/images/yjw3480/post/5702b8e5-2637-4a18-b6a9-daa87a727a2a/image.png)

# ⚛️ React Life Cycle

리액트의 모든 컴포넌트에는 생명주기(Life Cycle)가 존재한다.
컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이 난다.
라이프 사이클을 다룬다는 것은 **컴포넌트가 생겨나고, 변화하고, 없어지는 일련의 프로세스를 프로그래머가 통제하는 것**을 뜻한다.

기존에는 **Class형 컴포넌트**만 생명주기 처리가 가능했지만, React 16.8 부터는 Hooks가 도입되어 **함수형 컴포넌트**에서도 생명주기 처리가 가능해졌다.

Life Cycle은 크게 세 단계로 나누어진다.

- 🐣 Mounting (탄생)
- 🐤 Updating (변화)
- 💀 UnMounting (사망)

Class 방식과 함수 방식에 따른 Life Cycle을 살펴보자.

# 💡 Class 방식 컴포넌트의 Life Cycle

![](https://velog.velcdn.com/images/yjw3480/post/f0318dba-23a1-497c-8323-0cdeb8c78d52/image.png)

> 출처: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

클래스 방식 컴포넌트의 Life Cycle은 위와 같이 **9가지**로 분류된다.

## 💫Life Cycle 메서드

위 9가지의 메서드들을 각각 알아보자.

### 🐣 Mounting (탄생)

Mounting은 컴포넌트가 DOM에 처음 추가될 때 발생한다.
실행 순서는 이러하다.

> constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()

#### - constructor()

클래스 인스턴스 객체를 생성하고 초기화하는 메서드이다.

이 메서드에서 초기 state를 설정할 수 있다.

#### - static getDerivedStateFromProps(props, state)

props로 받아온 값을 기반으로 state에 동기화시킨다.

Mounting 단계와 Updating 단계에서 호출된다.

정적 메서드이며, render() 메서드를 호출하기 직전에 호출된다.

#### - render()

가장 기초적이면서 중요한 render() 메서드

최종적으로 작업한 결과물을 return 하는 기능을 가짐

JSX를 HTML로 반환하는 **필수 메서드**이다!

#### - componentDidMount()

실제 DOM에 컴포넌트가 렌더링된 후 호출됨

오직 초기 컴포넌트의 로딩 이후에 **한번만 실행되는 라이프사이클 메소드**

### 🐤 Updating (변화)

업데이트는 props나 state가 변경될 때 발생한다.
실행 순서는 이러하다.

> getDerivedStateFromProps() -> shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()

#### - static getDerivedStateFromProps(nextProps, prevState)

업데이트 시에도 마운트 때와 마찬가지로 먼저 호출됨

이 메서드는 렌더 전에 state를 조정할 수 있는 유일한 방법이다.

#### - shouldComponentUpdate(nextProps, nextState)

props나 state를 변경했을 때, 리렌더링을 할지 말지 결정하는 메서드

기본적으로 true를 반환

조건에 따라 false를 반환하면 해당 조건에는 render 함수를 호출하지 않음

오직 **성능 최적화**만을 위한 메서드

#### - render()

JSX를 다시 HTML로 반환

#### - getSnapshotBeforeUpdate(prevProps, prevState)

render에서 만들어진 결과가 브라우저에 실제로 **반영되기 직전**에 호출

DOM 업데이트 전 마지막 스냅샷을 캡처 (예: 스크롤 위치)

#### - componentDidUpdate(prevProps, prevState, snapshot)

컴포넌트의 변경이 완료되었을 때 수행되는 메소드

업데이트가 끝난 직후이므로 DOM관련 처리를 해도 무방하다.

### 💀 UnMounting (사망)

컴포넌트가 DOM에서 제거될 때 호출된다.

#### - componentWillUnmount()

타이머 해제, 구독 취소, 정리 작업 등을 수행

# 💡 함수 방식 컴포넌트의 Life Cycle

![](https://velog.velcdn.com/images/yjw3480/post/57a12271-31bc-4ace-9573-f023c17f678c/image.png)

React 16.8부터는 Hooks가 도입되며, 함수형 컴포넌트에서도 상태 관리와 생명주기 처리가 가능해졌다.

## 💫 Life Cycle 다루기

생명주기와 관련된 주요 Hook은 **useEffect!**

활용 방법은 아래와 같다.

```jsx
useEffect(() => {
  // 마운트 & deps 변경 시 실행

  return () => {
    // 언마운트 또는 deps 변경 직전 실행
  };
}, [dependencies]);
```

## ⚔️ Class component 메서드 vs useEffect

Class Component:

```jsx
componentDidMount() {
  this.subscription = props.data.subscribe(this.handleDataChange);
}

componentDidUpdate(prevProps) {
  if (prevProps.data !== props.data) {
    this.subscription.unsubscribe();
    this.subscription = props.data.subscribe(this.handleDataChange);
  }
}

componentWillUnmount() {
  this.subscription.unsubscribe();
}
```

Function Component (`useEffect`):

```jsx
useEffect(() => {
  const subscription = props.data.subscribe(handleDataChange);

  return () => {
    subscription.unsubscribe();
  };
}, [props.data]);
```

이처럼 useEffect Hook을 활용해 코드를 더 깔끔하게 만들 수 있다.

## ➕ shouldComponentUpdate를 함수형에서 사용

만약 `shouldComponentUpdate`를 함수형 컴포넌트에서 사용하고 싶다면?
➡️ `React.memo()`를 사용하면 된다.

`shouldComponentUpdate`는 props나 state를 변경했을 때, 리렌더링을 할지 말지 결정하는 메서드였다.

이와 비슷하게, `React.memo()`는 현재 props를 이전 props와 비교하고,
같다면 리렌더링을 생략하는 기능을 가진다.

## 🍎 마치며

Class 컴포넌트보다 함수형 컴포넌트가 더 간결하고 읽기 쉬우며, 더 유연하게 상태나 사이드 이펙트 등을 관리하기 좋다고 하니, 앞으로 함수형 컴포넌트를 사용하는게 좋을 것 같다.

# 웹 페이지 렌더링 방식 CSR, SSR, SSG 각각의 특징과 각 방식을 어떤 상황에 사용하면 좋을지 설명해 주세요.

**웹 렌더링**(Web Rendering)이란 웹 페이지를 사용자에게 보여주는 과정을 의미한다.

웹 개발에서 렌더링 전략은 단순한 기술 선택을 넘어서, 사용자 경험, 성능, 검색엔진 최적화(SEO), 그리고 개발 생산성에까지 영향을 주는 중요한 요소이다.

웹 렌더링에는 여러 방식이 있는데, 그 중 대표적인 4가지 렌더링 방식에 대해 알아보자.

## 💻 CSR (Client-Side Rendering)

말 그대로 사용자(클라이언트)의 브라우저에서 렌더링을 수행하는 방식

처음에는 최소한의 HTML 파일만 서버에서 전달받고, 이후에 JavaScript가 실행되면서 데이터를 불러오고 화면을 구성한다.

### 🔧 작동 원리

![](https://velog.velcdn.com/images/yjw3480/post/9be37d6a-0a93-4cb8-ba97-3381211ac6ce/image.png)

1. 사용자가 웹사이트에 접속하면 서버는 빈 HTML과 JavaScript 파일을 보낸다.
2. 브라우저가 JavaScript를 로드하고 실행한다.
3. JavaScript가 **동적으로 HTML을 생성**하고, 이를 브라우저에 표시한다.

따라서 화면이 처음 보이기까지는 약간 시간이 걸릴 수 있다!

이 때, 추가 페이지 요청 시, 전체 페이지를 다시 로드하는 대신 **필요한 데이터만** 서버에서 받아와서 **해당 부분만 업데이트**한다.

### 👍 장점

- 빠르고 유연한 사용자 경험 제공
- 페이지 전환이 매끄럽고 인터랙션 구현이 쉬움
- 서버 부담이 적고, 프론트엔드 개발자 입장에서 구조가 단순함

### 👎 단점

- 초기 로딩 속도가 느림
- 콘텐츠가 JS 로딩 이후에 보이므로, SEO에 불리함

실시간 채팅 앱, SNS 플랫폼 등 동적이고 사용자 상호작용이 많은 서비스에 어울리는 방식

## 🖥️ SSR (Server-Side Rendering)

HTML을 서버에서 미리 렌더링해서 사용자에게 전달하는 방식
브라우저는 완성된 HTML을 바로 받기 때문에, 초기 로딩이 빠르고 SEO에도 유리하다.

### 🔧 작동 원리

![](https://velog.velcdn.com/images/yjw3480/post/5c565d37-c395-40c7-bf1a-9cfcc639b699/image.png)

1. 사용자가 웹사이트에 접속하면 **서버에서 해당 페이지에 필요한 HTML을 생성**한다.
2. 서버는 생성된 HTML을 브라우저로 보낸다.
3. 브라우저는 받은 HTML을 표시한다.

이후 필요 시 JavaScript가 붙는다.

추가 페이지 요청 시, 해당 페이지에 대한 **HTML을 다시 서버에서 생성**하여 보낸다.

### 👍 장점

- 완성된 HTML을 전달하므로 초기 로딩 속도 향상
- **검색엔진 최적화(SEO)**에 유리

### 👎 단점

- 요청마다 렌더링을 수행 → 서버 부하 증가
- 복잡한 데이터 처리나 로딩 시간 증가 가능

블로그, 뉴스 사이트, 쇼핑몰 등 콘텐츠 중심의 웹사이트에 어울리는 방식

## 📄 SSG (Static Site Generation)

HTML을 **미리 생성**(build) 해두는 방식

빌드 시점에 모든 페이지를 HTML로 만들어 두고, 사용자는 그것을 그대로 받아보게 됨

### 🔧 작동 원리

![](https://velog.velcdn.com/images/yjw3480/post/a0a7ed0f-48ec-4652-92ff-e38155dcaa39/image.png)

1. 빌드 시에 서버는 **모든 가능한 요청에 대한 HTML을 미리 생성**
2. 사용자가 웹사이트에 접속하면, 서버는 미리 생성해 둔 정적 파일을 빠르게 전달
3. 브라우저는 받은 HTML을 표시

추가 페이지 요청 시, 미리 생성해 둔 해당 페이지의 HTML을 보낸다.

### 👍 장점

- 페이지 로딩 속도 매우 빠름
- 서버 부하 거의 없음
- 보안성 우수 (서버가 없어도 됨)
- SEO 최적화에도 유리

### 👎 단점

- 콘텐츠가 자주 바뀌면 매번 빌드를 다시 해야 함
- 실시간 반영이 어려움

포트폴리오, 문서 사이트, 회사 소개 페이지 등 정적인 콘텐츠에 어울리는 방식

## 🔁 ISR (Incremental Static Regeneration)

SSG의 확장 개념으로, 정적 페이지를 **미리 생성하되, 일정 주기로 업데이트**할 수 있는 방식
즉, 정적 파일처럼 빠르게 제공하면서도 최신 콘텐츠를 유지할 수 있다.

### 🔧 작동 원리

![](https://velog.velcdn.com/images/yjw3480/post/ab0d08c3-9a86-4ffd-a20b-b0fe1742c689/image.png)

1. 페이지는 처음에 SSG처럼 미리 생성
2. 일정 시간이 지나면 다음 요청에서 백그라운드로 새 HTML 생성
3. 이후부터는 새 HTML이 적용됨

### 👍 장점

- 빠른 응답 속도 + 콘텐츠 자동 갱신
- 서버 부하 없이도 최신성 유지

### 👎 단점

- 실시간성이 SSR만큼 강력하진 않음
- 설정과 빌드 전략을 잘 설계해야 함

상품 리스트나 블로그처럼 자주 바뀌지만 실시간이 필요하진 않은 콘텐츠에 어울리는 방식
