## 🎮QuickPlay_Note📝 | 나만의 작은 세상 (미니게임, 노트) 앱

## 목적성

- 빨리빨리를 외치는 사회에서 미니게임과 메모를 가볍게 빠르게 즐길 수 있다.

- 간단한 미니게임을 통한 유연한 두뇌 회전을 할 수 있다.

- 간단하고 쉬운 나만의 메모장으로 리스트 작성을 사용할 수 있다.

## Stack (사용된 기술)

- React

- html / css

- javaScript

- node.js

## 개발 기간

- 2024.08.31 ~ 2024.09.04 (5일)

## 프로젝트 기획

### 기획

- 반응속도는 일상생활의 많은 측면에서 중요한 요소입니다. <br> 사람은 나이가 들면서 반응 속도가 느려지는 경향이 있습니다.<br> 이는 특정 작업 수행 능력에 상당한 영향을 미치며 <br> 가장 눈에 띄는 변화 중 하나는 반응 시간의 감소입니다.

- 그렇기 때문에 반응속도 테스트를 이용해 어느 정도 수준인지 간단하게 확인 할 수 있으면 좋겠다고 생각했습니다.

- 나만의 작은 세상이라는 앱이 있으면 어떨까? 라고 생각해보았고 간단한 틱택토 미니게임을 통해 두뇌 회전 및 유연한 두뇌를 활성화 할 수 있는 기능이 있으면 좋겠다고 생각했습니다.

- 또한 간단하게 메모 또는 체크리스트 등 가벼운 일정을 정리 할 수 있는 노트가 있으면 좋겠다고 생각했습니다.

- 이로써 다 똑같은 노트, 미니게임이 아닌 하나의 앱으로 나만의 앱으로 누구나 즐길 수 있고 간편하게 사용할 수 있는 앱이 있으면 좋겠다라고 생각했습니다.

### 작업 계획표

|   날짜   | 내용                                                                                                                                                                                                                                                                                                                                                                                            |
| :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.08.31 | 래퍼런스 & 주제 리서치 / 기능 및 디자인 기획                                                                                                                                                                                                                                                                                                                                                    |
| 24.09.01 | 초기 가이드 라인 작업 <br> 각 컴포넌트 구성(header, footer, menu, modal, minigame, note 등) <br> Router 설정(Home, Menu, minigame/:id, note 등) <br> helmet 타이틀 구성                                                                                                                                                                                                                         |
| 24.09.02 | Header, Footer, home, menu UI 및 기능 구성 <br> minigame (TicTacToe / 반응속도 테스트) UI 및 기능 구성                                                                                                                                                                                                                                                                                          |
| 24.09.03 | 미니게임 - 틱택토 어려움 모드 배열 조건식 구성 및 컴포넌트 구성 <br> 반응속도 테스트 - 3차 시도 후 평균 값 결과 출력 및 디자인 수정<br>노트 - 메모 리스트 UI 및 기능 구성<br>=> 노트 작성 시 입력 내용 출력 및 작성 날짜 출력<br>=> 선택한 노트 삭제 가능<br>=> 체크리스트로 변환 버튼 구성<br>=> 작성한 노트 전부 삭제 버튼 구성<br>=>체크리스트에서 체크 시 노트 취소선 구성<br>404 page 구성 |
| 24.09.04 | 디자인 수정 및 코드 리팩토링<br>버그 수정 및 배포 후 유지보수 및 배포                                                                                                                                                                                                                                                                                                                           |

## 프로젝트 소개

-QuickPlay_Note - 미니게임(틱택토, 반응속도 테스트), 노트 앱

- git Url - https://github.com/JongInHey/quickplay_note

- site url - https://jonginhey.github.io/quickplay_note

<p>
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMTY2/MDAxNzI1Mzc5NTMwNTU2.VlPehnnsIUOzsdwwKqHlrmgPwZTqR1l3luh_lmdsy9Eg.kxp5UkSqKsSuIbNHQBdYiFE1qj_UIB_qfqa-ATh4IDcg.JPEG/home.jpg" alt="home" width="200px">
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMTQ3/MDAxNzI1Mzc5NTMwNTQw.PgpiwAEuZsEIsV5XcN_vdy4ITvxKySLl7n6WJV6LfyAg.9iVJFi6Wd6cbbxiuib1ETmFEF0UYvdhjv_-m25d0ksEg.JPEG/menu.jpg" alt="menu" width="200px">
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMTQ3/MDAxNzI1Mzc5NTMwODc2.by6fACR9JkDT4CWG1-cPksir6i9egS60Sp0FeXyvEp8g.qzcMY95mPoFC-5DocglF-sjFj1z-IYta7-KB-drDShYg.JPEG/tictactoe.jpg" alt="tictactoe" width="200px">
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMzcg/MDAxNzI1Mzc5NTMwNTM5.nDbX5A5xGGYxZBoMqKmf4xUpelr05LXtBX03hzwpIzUg.TGK8ERfFP9InpDpcy830vxHsFLH37OL63bj_AvpzVUUg.JPEG/speedCheck.jpg" alt="speedtest" width="200px">
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMjc1/MDAxNzI1Mzc5NTMwNTUz.Tt4g3Trno2Lg8C1YA-cclFX0qphQFFlFZGQ3QOb0Vzkg.vYB9gAEwuXQIfCJR8IldqDa6cWNJ3v0jHISxnaCAHvcg.JPEG/speedResult.jpg" alt="speedtestResult" width="200px">
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMTcg/MDAxNzI1Mzc5NTY0MjA5.6t_vXuEfLBHJiB9x63WidFWwUJ8yWCHbHEoV_CDQCSEg.VjOoxhx7FGBtzS2bIpC_k0PnajoVukOvwm4ekbt0JGkg.JPEG/noteList.jpg" alt="noteList" width="200px">
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMjk4/MDAxNzI1Mzc5NTY0MjEx.WVj4POF-zYX-1ni3T_p2ftudG7uNyogTYjEsrOAaCzQg.68-yj8hMWKnAdTnEzFKG9YxPLmVURVy1n6L5RiuPjKwg.JPEG/checkList.jpg" alt="checkList" width="200px">
    <img src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MDRfMzAw/MDAxNzI1Mzc5NTY0MjA5.33wJKfsHyX2x0Hx3M7W6QUa8aVVjkbXHvnXeZVRjg-kg.q0eTPq32yT_FMB-lLj-c99s3pBOh9v7beVJR6JooO2Eg.JPEG/deleteNote.jpg" alt="deleteNote" width="200px">
</p>

1. Home - 메인 페이지

   - 나만의 작은 세상을 들어갈 수 있는 버튼

   - 아기자기하고 직관적인 이미지 아이콘 사용

2. Menu - 메뉴 페이지

   - 총 4개의 페이지로 이동 가능

   - 틱택토, 반응속도 테스트, 메모장, 유튜브 음악 페이지로 이동 가능

3. TicTacToe - 1번 미니게임

   - 3x3 배열의 미니게임 이용 가능

   - 연속된 3칸을 채울 시 승리

   - 플레이어 선택은 해와 별 이모티콘 사용

   - 리셋 가능한 버튼

   - 더 어려운 난이도로 이동할 수 있는 버튼

   - 메뉴로 돌아가는 버튼과 왼쪽 상단에 이전 페이지로 이동 가능한 아이콘

4. TicTacToe - 어려운 난이도

   - 5x5 배열의 틱택토 게임

   - 연속된 4칸을 채울 시 승리

5. 반응속도 테스트

   - 시작 시 빨간색 화면에서 초록색 화면이 될 때 클릭

   - 빨간색 화면에서 클릭 시 타이머 리셋 재시도 기회 주어짐

   - 총 3번의 시도가 주어지며 3번 시도 완료 시 평균 시간 결과 출력

   - 각 시도마다 반응속도 시간 출력

6. 노트

   - 노트 리스트 작성 가능

   - 노트 작성 시 작성 날짜 추가

   - 체크리스트로 변경할 수 있는 버튼

   - 삭제하고 싶은 노트 삭제 가능

   - 전부 삭제할 수 있는 버튼

   - 체크리스트로 변경 후 체크박스 클릭 시 해당 노트 완료 취소선

## 프로젝트하면서 느낀 점

### 프로젝트를 하면서 알게 된 내용

- `toFixed` 메서드를 사용해 숫자를 고정 소수점 표기법으로 표시하는 방법, 소수점 뒤에 나타날 자릿수 0 ~ 20 값 사용 가능

- 0 이상 2000 미만의 랜덤 숫자를 생성하여 floor를 사용해 값을 내림하여 0 ~ 1999의 정수를 만들고 + 1000을 더해 1초에서 2.999초 이하의 랜덤 시간을 생성하는 방법

- `useNavigate()`를 이용해 이전 페이지로 가는 방법 원래는 useHistory의 기능이였지만 react-router V6로 업그레이드 되면서 useNavigate로 넘어왔다고 한다. navigate(-1)을 사용하면 이전 페이지로 이동 가능한 것을 알게 되었다.

### 프로젝트를 진행하면서 반성 및 칭찬 사항

- **반성할 점**

  - tictactoe라는 게임을 만들 때에 3x3 배열을 구성할 때에는 승리 조건의 경우의 수가 8개 밖에 되지 않아 수월하게 조건을 작성하여 만들 수 있었습니다. 하지만 5x5 배열의 어려움 난이도를 구성하고 승리 조건을 작성 할 때에 연속된 4칸의 경우의 수를 일일히 하나씩 세어보며 작성을 하여 시간을 많이 소비하게 되었습니다. 하지만 배열의 인덱스가 4개씩 가로가 1씩 늘어나고 세로가 5씩 늘어나는 간단한 로직만 알면 반복문으로 쉽게 해결이 가능한 것을 깨닫게 되었습니다.

* **칭찬할 점**

  - 이번 프로젝트를 통해 처음과는 다르게 성장했다고 생각했습니다. UI 구성에 대해서 조금 더 빠르고 효율적으로 작성할 수 있게되었고 초기 가이드라인을 잡는 시간이 많이 줄었다는 것을 느꼈습니다. 막연하게 이 프로젝트를 시작하였지만 떠오르는 기능이나 기획, 주제들을 모두 정리하여 메모를 한 후 나의 능력으로 빠르게 적용 가능 한 것들을 골라 4~5일 안에 이 프로젝트를 완료할 수 있었습니다.

## 앞으로의 개발 방향

- **개발 방향**

  - TypeScript에 대해 공부해 볼 것 <br> => 오류 발생 시 유익함

  * 버전이 업그레이드 되면서 바뀌는 요소나 기능을 알아볼 것 ex) useHistory 등

  * react-router 홈페이지에 Hooks 페이지들을 보면 각 Hook마다 Type declaration이라고 TypeScript 사용 방법이 나와있다. TypeScript를 공부하거나 사용할 때 참고할 것

  - 다른 라이브러리도 찾아서 사용해 볼 것 ex) Redux, Axios Material ui 등
