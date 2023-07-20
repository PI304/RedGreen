# Red-Green Websocket API

1. [소스코드](#소스코드)
2. [Postman 을 이용한 서버 테스팅](#Postman-을-이용한-서버-테스팅)

## 소스코드
___

### ```index.js```
> express.js 로 돌아가는 웹소켓 (socket.io) 서버

#### Features

- 유저를 특정 그룹 (room) 으로 join 시킴
- 지정된 그룹으로 상태에 대한 메시지를 보냄 (emit)
   > 현재 기본 그룹 이름은 `demo-room` 으로 설정되어 있음
- `localhost:3000/status` 경로로 접속하면 상태에 따라 다른 색을 볼 수 있는 페이지로 이동함

### ```index.html```
> `localhost:3000/status` 경로로 이동했을 때 렌더되는 기본 html 파일


#### Features

- 수신한 메시지가 `CLEARED` 이면 배경화면을 초록색으로, `DANGER` 이면 빨간색으로 바꿈
- 기본 색깔은 `index.html` 파일의 주석 부분을 참고하여 변경 가능
- 해당 페이지는 **상태를 확인**하는 용도임. 상태 변경은 아래 `alert.html` 파일에 대한 설명 참고 


### ```alert.html```
> `localhost:3000/status` 경로에서 보이는 상태 색깔을 바꿀 수 있는 메시지를 **발신**하는 페이지

*해당 페이지는 파일 자체를 브라우저에서 바로 열면 됨* 

#### Features

- 파일이 열릴 때 기본적으로 `localhost:3000` 에서 돌아가고 있는 웹소켓 서버에 연결하고, `demo-room` 의 이름으로 그룹에 조인함.
- 아래 사진처럼, 버튼을 통해 상태를 바꿀 수 있음.
  <img width="885" alt="스크린샷 2023-07-20 오전 11 30 15" src="https://github.com/PI304/RedGreen/assets/89679621/d268c4b2-0929-417c-881f-88e087a6c5c8">
- 버튼을 눌러 상태를 변경하였으면, `localhost:3000/status` 페이지에 접속하여 바뀐 상태를 실시간으로 확인할 수 있음

## Postman 을 이용한 서버 테스팅
___

> 프론트 페이지가 없는 관계로 postman 을 이용하여 웹소켓 테스트 진행


### Steps
1. Workspaces > Create Workspace 에서 워크스페이스 생성
2. 생성한 workspace 로 들어 좌측 사이드바의 ```New``` 버튼을 누르고 Websocket Request 버튼 클릭
   <img width="862" alt="스크린샷 2023-02-21 오후 4 13 04" src="https://user-images.githubusercontent.com/89679621/220273678-4baf53eb-f29a-447a-8559-33306b6cc83f.png">
3. 좌측 상단의 ```Raw``` 버튼을 눌러 ```Socket.IO``` 로 전환
   <img width="1122" alt="스크린샷 2023-02-21 오후 4 14 20" src="https://user-images.githubusercontent.com/89679621/220273941-eb796765-de53-4b4a-9d42-018d7444ffce.png">
4. 주소창에 ```http://localhost:3000``` 입력 후 connect!
5. 자주 쓰는 브라우저에 접속하여 ```http://localhost:3000/status``` 페이지 접속 (초기 상태: CLEARED - 초록색)
6. 하단 우측에 이벤트 타입을 join 으로 설정 후 메시지 칸에 ```demo-room``` 작성 후 send
   <img width="1122" alt="스크린샷 2023-02-21 오후 4 18 20" src="https://user-images.githubusercontent.com/89679621/220274881-3c00e1ec-540b-48a0-8c54-c39a042a0a5c.png">
7. 이후 message 이벤트로 ```CLEARED``` 혹은 ```DANGER``` 메시지를 보냄
   <img width="1122" alt="스크린샷 2023-02-21 오후 4 31 13" src="https://user-images.githubusercontent.com/89679621/220277473-707fbf7a-6383-409e-9aa0-abb4f0d79248.png">
8. message 에 따라 바뀌는 status page 확인

