# namu-readtime

구글 확장 프로그램 개발 연습.
해당 확장 프로그램을 적용하면 namu.wiki에서 해당 문서를 읽는 데 걸리는 시간을 제목 위에 입력해줍니다.

## 업데이트

### 2023-02-27

뒤로가기, 새로고침 등에서 제대로 작동하지 않음을 확인하고 수정하였습니다. MutationObserver를 이용하여 app 노드가 업데이트되면 URL을 검사한 뒤 읽는 시간을 업데이트하도록 하였습니다. content.js 내에서 옵저버가 활동하므로 background.js가 필요하지 않습니다.

### 2024-04-06

새로 바뀐 나무위키 페이지에 맞추어 스크립트를 갱신했습니다.
