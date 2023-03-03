# namu-readtime
구글 확장 프로그램 개발 연습.
해당 확장 프로그램을 적용하면 namu.wiki에서 해당 문서를 읽는 데 걸리는 시간을 제목 위에 입력해줍니다.


확장 프로그램 작동 원리
---------------------
크롬과 같은 선에서 background.js가 돌아가며, content.js는 웹페이지에 injection되어 작동한다.
background.js와 content.js는 chrome.tabs.sendMessage 함수와 chrome.tabs.runtime.OnMessage 이벤트를 통해 통신한다.


SPA에서의 작동
-------------
content.js는 injection되는 순간 한번만 작동하는데, 웹페이지가 SPA(Single Page Application)이라면 페이지를 이동하더라도 injection이 되지 않으므로 content.js가 실행되지 않는다. 이를 해결하려면 content.js 내에 반복문을 넣어 주기적으로 업데이트 함수를 실행하거나, MutationObserver를 통해 DOM의 변화를 감지하도록 하거나, background.js에서 페이지의 변화를 감지하여 content.js에게 알려주는 작업이 필요하다.

해당 확장프로그램에서는 background.js에서 URL의 변화를 감지하여 content.js에게 알려주도록 만들었다. background.js에서 chrome.tabs.onUpdated 이벤트를 활용하도록 하였는데, url이 업데이트될 경우, changeInfo에 url 항목이 생긴다. 여기엔 바뀐 url이 등록되어 있다. url이 namu.wiki와 동일할 경우, content.js에게 메시지를 보내도록 만들었다. 보내는 메시지의 형식은 자유로우므로 url만 전달하도록 하였다.

content.js에서는 chrome.runtime.onMessage를 통해 메시지를 전달받는다. 전달받은 url이 namu.wiki/w/*, 즉 문서 페이지라면, 문서 페이지의 글자 수를 세어 읽는 시간을 계산한 뒤, 문서의 제목 위에 element를 추가하여 시간을 알려주도록 만들었다.
만약 문서를 이동하였다면, 기존 element를 제거하고 새 element를 생성하도록 하였고, 문서 항목이 아니라면 element 제거만 이루어지도록 하였다.

업데이트
-------
2023-02-27
뒤로가기, 새로고침 등에서 제대로 작동하지 않음을 확인하고 수정하였습니다. MutationObserver를 이용하여 app 노드가 업데이트되면 URL을 검사한 뒤 읽는 시간을 업데이트하도록 하였습니다. content.js 내에서 옵저버가 활동하므로 background.js가 필요하지 않습니다.
