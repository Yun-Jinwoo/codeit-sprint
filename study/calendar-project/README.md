## 공통 컴포넌트 구현하기 - Calendar

### 🎯 요구사항
- [x] Header는 현재 선택한 날짜의 년, 월, 일(YYYY-MM-DD) 표시
- [x] Navigator는 prev, next 라는 버튼을 표시하고, 해당 버튼을 눌렀을 때 전월 혹은 다음월로 Body가 변경
- [x] Body는 현재 선택된 날짜의 월(month)을 기준으로 달력상 표기되는 처음날 부터 마지막날 까지 렌더링(ex. 2025년 5월의 달력상 처음날은 1일이 아닌, 27일임).
- [x] Body는 한줄에 7개의 날짜가 표시되어야 함.

### 📷 스크린샷

![image](https://github.com/user-attachments/assets/036dce16-fb96-4eaf-a6d2-9214c0aae443)


![image](https://github.com/user-attachments/assets/9cc916d2-c13c-4a61-8e16-feb08c31fc69)


### ⭐ 특이사항

화면에 표시될 month 및 선택된 날짜를 관리할 Context를 활용함

화살표 아이콘을 사용하기 위해 react-icons 라이브러리 활용

헤더에 선택된 날짜를 표시하는것 보단 현재 달을 표시하는게 자연스러운 것 같아서, 선택된 날짜는 밑으로 뺌

해당 달의 날짜가 아닌 경우 회색으로 표시하며, 해당 날짜를 클릭 시 그 달로 넘어감
