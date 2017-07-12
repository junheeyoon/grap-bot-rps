# 그랩 봇 API 개발
## 목표
- 아래 링크와 비슷한 봇 개발
- 사용자가 가위 바위 보 중 하나를 내고 봇이 어떤 것을 냈는지 알려주고, 승패를 알려줌
- 가능 하면 전적(승수)도 기록 하는 것을 목표로 함
- [최종적으로 완성할 봇 예시](https://bot-hub.com/reviews/Rock-Paper-Scissors-game-chatbot-review)

## 프로젝트 구조
- server.js : 간단한 express 서버 파일
- test : 봇 api 서버를 테스트 할 테스트 코드의 모음
- package.json : 어플리케이션일 실행하고 테스트 할 수 있는 스크립트 및 라이브러리 의존성 파일
- runServer.js : 서버를 실행하는 스크립트

## 프로젝트 시작 및 테스트 방법
- 서버를 시작하는 방법
  - `npm start` 를 하면 서버가 시작됨
  - 종료 하고 싶은 경우 `ctrl + c` 로 종료 할 수 있음
- 서버 테스트 하는 방법
  - `npm test` 를 하면 서버를 실행 시켜 테스트를 진행
  - 텍스트 에디터나 IDE 에서 gui 로 지원 가능 할 수 있음(테스트는 `mocha` 라는 프레임워크를 사용)