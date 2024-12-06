## Vercel: https://wintodo.vercel.app/
![todo](https://github.com/user-attachments/assets/2ab33317-25aa-484e-b3b0-418793be98c3)
<br/>

# ❄️추운 겨울 Todo로 하루를 채워봐요!

> ✨ **React를 잠시 쉬다, 다시 시작해볼까?**  <br/>
그런 마음으로 회사원들과 함께 시작한 스터디 프로젝트!  
> "뭐 만들어볼까? 그냥 시작해!" 하다가 투두 리스트로 결정! 매주 수요일 스터디를 진행!<br/>
> "💡 이렇게 하면 어때?" "🛠️ 저건 더 좋게 바꿀 수 있을 것 같아!"<br/>
> 서로 아이디어를 나누며 재미있게 발전하고 성장한 토이 프로젝트입니다.

## 📂 기술 스택

| 기술        | 설명                                    |
|-------------|-----------------------------------------|
| **React**   | UI 라이브러리                           |
| **Zustand** | 가벼운 전역 상태 관리                   |
| **Moment.js** | 날짜 및 시간 형식 관리                |
| **React Icons** | 아이콘 제공                         |
| **React Snowfall** | 눈 내리는 애니메이션 구현         |
| **CSS Modules** | 컴포넌트 스타일링                    |
| **ESLint & Prettier** | 코드 품질 및 스타일링 규칙 관리 |


## 🚀 진행 과정

### 🗓️ 1주차: 프로젝트 초기화 및 레이아웃 설계
- **초기 레이아웃 설계**
  - 투두 리스트의 기본 레이아웃 작성
  - `TodoBoard`, `TodoList`, `TodoItem` 등 핵심 컴포넌트 설계
- **CRUD 기능 구현**
  - 투두 추가, 수정, 삭제, 완료 상태 변경 기능 추가
  - React의 상태 관리로 기본 데이터 흐름 설계

### 🔄 2주차: 피드백 수용 및 개선 
- **피드백 반영**
  - 디자인 및 코드 구조 개선
  - UI 수정 및 상태 관리 최적화
- **리팩토링**
  - 함수 및 변수명을 명확히 변경하여 가독성을 높임
  - 중복 코드를 제거하고 컴포넌트 간 재사용성을 강화

### 🧩 3주차: 컴포넌트 구조화
- **컴포넌트 디렉토리 구조 개선**
  - `index.jsx`와 `index.css`를 하나의 폴더로 구성
- 구조:
    ```
    components/
    ├── TodoAlert/
    │   ├── index.jsx
    │   ├── index.css
    ├── TodoBoard/
    │   ├── index.jsx
    │   ├── index.css
    ├── TodoCalender/
    │   ├── index.jsx
    │   ├── index.css
    ├── TodoFilter/
    │   ├── index.jsx
    │   ├── index.css
    ├── TodoItem/
    │   ├── index.jsx
    │   ├── index.css
    ├── TodoList/
    │   ├── index.jsx
    │   ├── index.css
    ├── TodoPopup/
    │   ├── index.jsx
    │   ├── index.css
    └── Snowfall/
        ├── index.jsx
        ├── index.css
    ```

### **✍️ 4주차: ESLint와 Prettier 설정 및 Zustand 적용**
- **ESLint와 Prettier 설정**
  - `eslint-plugin-import` 플러그인을 사용해 import 정렬 규칙 추가
  - `eslint-config-prettier`로 ESLint와 Prettier 규칙 충돌 방지
  - React JSX와 prop-types 경고 비활성화
  - 설정 내용:
    ```javascript
    'import/order': [
      'error',
      {
        groups: [
          'builtin',  // React, Node.js 기본 모듈
          'external', // 외부 라이브러리
          'internal', // 내부 프로젝트 모듈
          'parent',   // 상대경로 부모 import
          'sibling',  // 같은 디렉토리의 파일
          'index',    // index 파일
        ],
        'newlines-between': 'always', // 그룹 간 줄바꿈
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    ```
- **Calender 기능 추가**
  - 날짜별 투두 관리 및 필터링 기능 구현
  - `moment.js`를 활용해 날짜 형식 통일
- **Zustand를 활용한 상태 관리**
  - 상태 관리를 위해 Redux 대체 라이브러리인 Zustand 적용
  - 투두 데이터 및 UI 상태를 전역에서 관리하도록 리팩토링
- **눈 효과 아이콘 애니메이션**
  - 눈이 내릴 때 아이콘이 회전하는 효과 추가
  - `React Snowfall` 라이브러리로 눈 내리는 효과 구현

---

## 🛠️ 주요 기능

### ✅ 투두 리스트 관리
- 일정 추가, 수정, 삭제
- 체크박스를 통한 완료 상태 관리
- 날짜별 투두 관리 및 필터링

### ❄️ 애니메이션 효과
- **눈 내리는 효과**: `Snowfall` 컴포넌트를 활용한 애니메이션
- **눈 토글 버튼**: 클릭으로 눈 효과를 켜고 끌 수 있음

### ⚙️ 상태 관리
- **Zustand**를 활용한 전역 상태 관리
  - 투두 데이터 및 UI 상태를 일관성 있게 관리

### 🎨 코드 스타일링
- **CSS Modules**: 모듈화된 CSS로 스타일 충돌 방지
- **ESLint와 Prettier**: 코드 컨벤션 규칙 정의
- Import 정렬 규칙으로 코드 가독성 향상

## 💌 회고 
"함께 배우며 성장한 시간, 재밌었다!" 😊

### ✨ 느낀 점

1. 협업과 피드백의 중요성
    - 각자의 스타일로 구현한 코드를 보며 다양한 접근 방식을 배울 수 있었다.
    - 매주 이슈를 공유하고 서로 피드백하면서, "이런 방법도 있구나!"를 배우는 즐거움이 있었다!

2. 리액트 학습의 재미
    - 간단한 프로젝트였지만, 컴포넌트 설계부터 상태 관리까지 실질적인 리액트 개발 과정을 배울 수 있었다.
    - 특히, CSS Modules와 Zustand의 유용함을 몸소 체감 하는 시간을 가졌다.

3. 아쉬운 점
    - 주 1회의 짧은 시간이 아쉬웠지만, 그만큼 집중해서 작업할 수 있었던 것 같다.
    - 일정이 조금 더 여유로웠다면 더 많은 기능을 추가하고 싶었다.

### 💡 개선 방향 & 앞으로 계획
- TypeScript 적용: 코드의 안정성과 가독성을 높이기 위해 TypeScript를 도입해보고 싶다.
- Next.js로 확장: SEO와 서버 사이드 렌더링(SSR)을 고려해 Next.js로 마이그레이션을 시도해보고 싶다.
- DB 연동: MongoDB나 Firebase와 같은 데이터베이스를 연결해 데이터 영속성을 추가 해보고 싶다.
- 사용자 인증 기능: JWT 기반 로그인 및 사용자 인증 기능을 구현해 실제 서비스에 가까운 프로젝트로 확장하고 싶다.
