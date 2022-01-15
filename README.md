# Basic Photo Gallery

## 프로젝트 실시간 확인
[프로젝트 확인하러 가기](https://basic-photo-gallery.herokuapp.com/)

> `master` branch에 push하게 되면 자동으로 반영된다

<br />

## 프로젝트 실행 방법

1. Clone Repository
```shell
$ git clone https://github.com/JongMinLee0/basic-react-list.git
```

2. Install Dependency
```shell
$ npm install
```

3. Start App
```shell
$ npm start
```

> Node.js가 설치되어 있어야 합니다.

<br />

## 프로젝트 구조

```bash
/
│   README.md
│   .gitignore
│   package.json
└───package-lock.json
│
└───src
│   │   index.js
│   │   App.js
│   │   default-image.jpeg
│   └───loading.gif
│   │
│   └───components
│   │    └───card
│   │    │   │  CardList.js
│   │    │   └───Cards.js
│   │    │
│   │    └───filter
│   │    │   └───AuthorFilter.js
│   │    │
│   │    └───form
│   │        └───AddForm.js
│   │
│   └───css
│   │    │   AddForm.css
│   │    │   AuthorFilter.css
│   │    │   Cards.css
│   │    └───Detail.css
│   │
│   └───helper
│   │    └───api.js
│   │
│   └───views
│        │   index.js
│        │   List.js
│        └───Detail.js
│   
└───public
    │   index.html
    └───robots.txt
```

- src : 프로젝트 root 디렉토리
    - index.js : root js 파일
    - App.js : `fetch`를 통해 데이터를 가져오고, 인입되는 url에 따라 component를 불러온다
    - components : 컴포넌트를 모아 놓은 디렉토리
        - card : card 관련 컴포넌트
            - CardList.js : `Cards`컴포넌트를 이용하여 목록을 생성한다
            - Cards.js : 목록에 들어가는 Card형태의 컴포넌트
        - filter : filter 관련 컴포넌트
            - AuthorFilter.js : 입력되는 텍스트를 `List`컴포넨트에 전달하여 일치하는 Card목록만 나오게 해준다
        - form : form 관련 컴포넌트
            - AddForm.js : 목록에 추가하기 위한 input form 컴포넌트
    - css : css 파일 디렉토리
    - helper : 공통 기능을 모아놓은 디렉토리
        - api.js : `fetch`를 공통으로 사용하기 위한 js 파일
    - views : 페이지 관련 디렉토리
        - index.js : 페이지를 공통으로 핸들링하기 위한 js 파일
        - List.js : 리스트 페이지 컴포넌트
        - Detail.js : 상세 페이지 컴포넌트

<br />

## 프로젝트 기능

### 필터링

<p align="center">
<img width="400" height="200" src="https://user-images.githubusercontent.com/48028667/149462362-8ec46fb7-1ba1-415c-8785-4d1b510a7df9.png">
</p>

`Search Author` input box에 텍스트 입력시 일치하는 Author만 필터링된 목록이 나오게 된다

<br />

### 목록 추가

<p align="center">
<img width="400" height="300" src="https://user-images.githubusercontent.com/48028667/149462709-c374a9b5-ce06-42cd-b269-5016bb7000b8.png">
</p>

`id`, `author`, `image_url`을 입력한뒤 `ADD` 버튼을 누를 경우 목록에 해당하는 정보가 추가 된다

<br />

### 목록 삭제 & 페이지 전환

<p align="center">
<img width="400" height="400" src="https://user-images.githubusercontent.com/48028667/149462409-61dad83a-bf86-473d-a935-efdc7ead4333.png">
</p>

`DELETE` 버튼 클릭시 목록에서 삭제된다.  
`id`와 `image`를 클릭할 경우 사진이 확대되어 새창으로 열린다.  
`author`를 클릭할 경우 상세페이지로 이동한다.  

> 상세페이지의 경우 해당하는 카드가 제일 상단에 나오게 되고 아래의 목록에는 해당 카드를 제외한 해당 Author의 카드목록이 나오게 된다.  
또한 이미지가 없을 경우 `default-image`가 나오게 된다.

<br />

### 2022-01-15 수정사항
기존 상세페이지 이동이 새창으로 구현되어 있었으나 현재 탭에서 페이지 이동으로 변경되었다.  
새창으로 열릴시 데이터를 새로 받아오기 때문에 직접 추가한 데이터가 없어지기 때문이다.

<br />

## TODO(미구현)
1. 현재 임시 퍼블리싱 되어 있어 새롭게(개선) 만들어야 한다
2. Card Swiper 미구현
    - card에 나와있는 delete 버튼을 swipe시 나오게 하여야 한다. click event만 옮기면 삭제 기능 활성화
3. 사진 사이즈 공통화
    - 사진 사이즈가 달라 Card의 크기가 달라진다.

<p align="center">
<img width="400" height="400" src="https://user-images.githubusercontent.com/48028667/149461717-8e074d27-6c7a-403d-9f13-01d101f57ac4.png">
</p>