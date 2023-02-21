## Red-Green Websocket API

> 프론트 페이지가 없는 관계로 postman 을 이용하여 웹소켓 테스트 진행


### Steps
1. Workspaces > Create Workspace 에서 워크스페이스 생성
2. 생성한 workspace 로 들어 좌측 사이드바의 ```New``` 버튼을 누르고 Websocket Request 버튼 클릭
   <img width="862" alt="스크린샷 2023-02-21 오후 4 13 04" src="https://user-images.githubusercontent.com/89679621/220273678-4baf53eb-f29a-447a-8559-33306b6cc83f.png">
3. 좌측 상단의 ```Raw``` 버튼을 눌러 ```Socket.IO``` 로 전환
   <img width="1122" alt="스크린샷 2023-02-21 오후 4 14 20" src="https://user-images.githubusercontent.com/89679621/220273941-eb796765-de53-4b4a-9d42-018d7444ffce.png">
4. 주소창에 ```http://43.201.52.170/``` 입력 후 connect!
5. 자주 쓰는 브라우저에 접속하여 ```http://43.201.52.170/status``` 페이지 접속 (초기 상태: CLEARED - 초록색)
6. 하단 우측에 이벤트 타입을 join 으로 설정 후 메시지 칸에 ```demo-room``` 작성 후 send
   <img width="1122" alt="스크린샷 2023-02-21 오후 4 18 20" src="https://user-images.githubusercontent.com/89679621/220274881-3c00e1ec-540b-48a0-8c54-c39a042a0a5c.png">
7. 이후 message 이벤트로 ```CLEARED``` 혹은 ```DANGER``` 메시지를 보냄
   <img width="1122" alt="스크린샷 2023-02-21 오후 4 31 13" src="https://user-images.githubusercontent.com/89679621/220277473-707fbf7a-6383-409e-9aa0-abb4f0d79248.png">
8. message 에 따라 바뀌는 status page 확인
