## 웹퍼플리싱 가이드
---
## css 가이드
- 절대 단위(px)를 사용하였습니다.
- 1024px를 기준으로 모바일과 pc를 분기하였습니다.
- 컬러는 모두 변수(index.css에서 선언)를 사용했으며, 변수명은 피그마를 참고했습니다.
- 변수명 작성 시 단어의 결합은 언더바(_)를 이용했습니다.

## 디렉토리 가이드

### src
- 컴파일 대상 파일들입니다.

    |폴더명|파일명|설명|
    |---|---|---|
    |src|App.js       |  |
    |   |index.css    |초기화, 공통 css|
    |   |index.js     |  |
    |   |mediaQuery.js|useMediaQuery 적용|


### assets
- 로고, 아이콘, 일러스트 파일들이 있습니다.
- 파일명에 있는 번호(n)는 피그마를 기준으로 했습니다.

    |폴더명|서브 폴더명|파일명|설명|
    |---|---|---|---|
    |assets|-     |logo.svg       |로고|
    |      |icon  |user_1.svg     |유저 아이콘|
    |      |icon  |index.js       |아이콘 import용|
    |      |illust|illust_{n}.svg |서비스 영역 외의 일러스트들|
    |      |illust|service_{n}.svg|서비스 영역 내에 있는 일러스트 아이콘들|
    |      |illust|index.js       |일러스트 import용|

### components
- 영역별로 나누어 컴포넌트를 만들었습니다.
- 컴포넌트명은 임의로 작성하였습니다.
- 아래 표의 정렬은 이름순이 아닌 실제 출력 결과물 순입니다.

    |폴더명|파일명|설명|
    |---|---|---|
    |components|Header.js               |헤더 영역|
    |          |Header.module.css       |헤더 영역 스타일|
    |          |IntroduceArea.js        |소개 영역 ("어린이집, 유치원을 위한 친절한...")|
    |          |IntroduceArea.module.css|소개 영역 스타일|
    |          |VisionArea.js           |비전 영역 ("선생님의 최고 메이트가 되고자...")|
    |          |VisionArea.module.css   |비전 영역 스타일|
    |          |ServiceArea.js          |서비스 소개 영역 "(전국 모든 선생님을 위한...")|
    |          |ServiceArea.module.css  |서비스 소개 영역 스타일|
    |          |JoinArea.js             |회원 가입 영역 ("신학기 전에 미리 만나요...")|
    |          |JoinArea.module.css     |회원 가입 영역 스타일|
    |          |Footer.js               |푸터 영역|
    |          |Footer.module.css       |푸터 영역 스타일|

### data
- 카드 내에 들어가는 데이터입니다.

    |폴더명|파일명|설명|
    |---|---|---|
    |data|serviceContents.js|서비스 소개 영역 카드 내용|