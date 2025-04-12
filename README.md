# 🔥Codeit Sprint🔥

Codeit Sprint 프론트엔드 15기에 참여하면서

진행하는 프로젝트 및 학습 노트를 정리할 레포

<br>

## 📖 Weekly-paper

<a href="weekly paper/week 1/weekly paper.md">Week-1</a>

<a href="weekly paper/week 2/weekly paper.md">Week-2</a>

<a href="weekly paper/week 3/weekly-paper.md">Week-3</a>

<a href="weekly paper/week 4/weekly-paper.md">Week-4</a>

<a href="weekly paper/week 5/weekly-paper.md">Week-5</a>

<a href="weekly paper/week 6/weekly-paper.md">Week-6</a>

<a href="weekly paper/week 7/weekly-paper.md">Week-7</a>

<a href="weekly paper/week 8/weekly-paper.md">Week-8</a>

<br>

## 🎯 Sprint-mission

<a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/7">Sprint-Mission-1</a>

<details>
<summary>1주차 피드백 정리✏️</summary>
<div markdown="1">
  
### 🖼️ 이미지 추출
이미지는 추출할 때 1배수가 아닌 2배수로 추출하는 것이 화질면에서 좋다👍

---

### 🆎 폰트

이 미션에서 'Rokaf Sans' 체는 로고 텍스트에 단 **1번** 사용된다. 그러나, 한글 폰트 파일의 용량이 어마무시하다고 한다. (한글은 조합할 수 있는 글자의 종류가 아주 많다) 따라서, 얼마 쓰지 않을 폰트 파일을 넣는 것 보단, 로고 텍스트를 이미지로 저장하여 사용하는 것이 효율적이다.

---

### 🗂️ css 파일 구분

하나의 css파일에 모든 내용을 넣기 보다는 목적별로 나눠서 여러 파일로 작성하는 것이 **유지보수, 가독성, 확장성**에 좋다.
추천해주신 방법은 아래 3개의 파일로 나누는 것.

---

#### 1. reset.css

프로젝트를 시작하면, 초기에 먼저 css를 초기화하고 시작하는 것이 좋다.
이렇게 초기화를 해주는 이유는 **브라우저마다 기본으로 제공하는 스타일**(user agent stylesheet)이 있기 때문이다.

예를 들면, 내가 margin을 지정하지 않았는데도, 알아서 margin 값이 들어있어서 원하는대로 화면을 가득 채우는 것이 불가능한 경우가 있다. 이런 경우에 개발자가 의도한대로 디자인이 나오게 하려면 이러한 설정을 리셋해주는 과정이 필요하다.

따라서, 이 과정을 수행할 파일을 따로 분리하여 생성해주고, 파일명을 reset.css로 하면 작업하기 쉬울 것이다.

#### 2. base.css

폰트 페이지 및 전반적인 페이지에서 공통 적용되는 기본적인 스타일링 문들을 저장할 파일
반복 사용되는 css 변수를 포함해도 좋다.

#### 3. style.css

그 외 스타일을 가지고 있는 파일이다.
페이지가 추가된다면, 페이지별로 구별해서 파일을 생성하면 되겠다.

---

### 📏 반응형 처리를 위한 단위

vw, vh, %, em, rem 등 많은 단위가 있고, 이를 사용하는 것은 개발자의 취향 차이지만, font-size에 관해서는 rem 단위를 사용하는 것이 유지보수 및 가독성 측면에서 좋다!

---

### 📦 css variable 등록하기

color, padding, margin, fontSize 등 작업 중 많이 사용되는 값들이 존재하는데, css variable을 통해 등록해두면 나중에 사용하기 편하다.

사용 예시

```
:root{
  --gray50: #f9fafb;
  --gray100: #f3f4f6;
}

.div {
  background-color: var(--gray100);
}
```

</div>
</details>

<a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/57">Sprint-Mission-2</a>

<details>
<summary>2주차 피드백 정리✏️</summary>
<div markdown="1">
  
### 📖 inline 스타일 지양하기
인라인 스타일은 css 속성보다 우선순위가 높기 때문에 웬만하면 css로 작성하는 것이 좋다.

---

### 📰 태그 선택자 조심해서 사용하기

태그 선택자는 해당 태그가 모든 페이지에 걸쳐 적용되어야 하는 스타일링 외에는 사용을 추천하지 않는다.

위의 경우도 프로젝트가 확장되다보면 변경될 수 있으니 가능한 class를 사용하시는 것이 좋다.

ex) 1월에는 모든 페이지에 main 태그가 `margin: 2.4rem`을 가지고 있었지만, 2월에 새 페이지가 추가되고 보니
해당 페이지에서 사용되는 main 태그는 디자인상 `margin`이 `1rem`일 수 있다. 따라서 이렇게 디자인에 따라 다양하게 적용될 수 있는 스타일의 경우 `classname`을 통해 개별로 css 해주는게 좋다.

---

### ➕ 공통 CSS 파일 작성하기

로그인 페이지와 회원 가입 페이지가 디자인이 비슷한만큼 공통적으로 사용하는 css가 많다.

이러한 중복을 줄이기 위해 공통 CSS 파일을 작성하면 유지보수 및 가독성 측면에서 더 좋다.

```
auth.css // login, signup 페이지에서 공통으로 쓰는 것들의 모음
login.css
signup.css
```

만약 login.css, signup.css 파일에서 작성되는 css가 너무 적다면, 즉 분리할 필요가 없다고 느끼면 한 파일로 관리해도 된다.

</div>
</details>

<a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/88">Sprint-Mission-3</a>

<details>
<summary>3주차 피드백 정리✏️</summary>
<div markdown="1">

### 📦 CSS 변수 관리하기

figma와 동일하게 색상 변수를 선언하는 게 좋다.
그래야 figma에서 해당 색상 변수가 사용될때 확인하기 쉽고 색상값은 디자이너와 의사소통할 일이 많은 값이라 소통 측면에서도 좋다.

---

### 😺 미디어 쿼리

```
/* Tablet: 768px 이상 ~ 1199px 이하 */
@media screen and (max-width: 1199px) {
```

해당 미디어 쿼리의 조건문을 해석해보면 screen 유형이며 max-width가 1199px 까지인 스크린에 적용된다는 의미이다.

정확히 얘기하자면 이 쿼리문안의 css들은 화면 사이즈가 주석과 달리 768px 미만으로 내려가도 적용이 된다.

따라서 `/* Tablet: 1199px 까지 적용 */`이 더 정확한 표현이다.

주석과 같은 의미의 조건문은 `@media (min-width: 768px) and (max-width: 1199px)` 이다.

---

### Ⓜ️ 랜딩 페이지 메타 태그 작성법

SNS에서 랜딩 페이지 공유시 미리보기를 볼 수 있도록 하는 메타 태그를 작성하는 방법을 확인할 수 있는 사이트가 존재하니, 이 사이트를 참고하여 작성하기.

[SNS 미리보기용 랜딩 페이지 메타 태그 참고 사이트](https://www.opengraph.xyz/)

</div>
</details>

<a href="https://github.com/codeit-bootcamp-frontend/15-Sprint-Mission/pull/128">Sprint-Mission-4</a>

<details>
<summary>4주차 피드백 정리✏️</summary>
<div markdown="1">

</div>
</details>
