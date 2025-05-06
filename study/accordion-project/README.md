## 공통 컴포넌트 구현하기 - Accordion

### 🎯 요구사항
- [x] Trigger를 눌렀을 때 Pannel이 아래로 펼쳐져야 함.
- [x] 펼쳐진 Pannel에 대한 Trigger를 눌렀을 때는 다시 Pannel이 접혀야 함.
- [x] Pannel은 두개 이상 펼쳐질 수 있음.

### 📷 스크린샷

![image](https://github.com/user-attachments/assets/2449a01a-242a-4462-aa95-9e637564f1ad)

![image](https://github.com/user-attachments/assets/5b1e07cd-64c5-461a-bb58-f827978ee4f4)

### ⭐ 특이사항

각 Item들의 펼쳐진 상태를 관리하기 위해 Context를 활용함

화살표 아이콘을 사용하기 위해 react-icons 라이브러리 활용
