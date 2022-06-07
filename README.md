# 프로젝트 소개

## 프로젝트명
신발판매 쇼핑몰사이트 개발 (Part2)

## 개발인원
2명

## 프로젝트 개요 및 동기
본 프로젝트에서는 앞서 제작했던 신발판매 쇼핑몰 프론트엔드 개발(https://github.com/ykkim97/Shoes-ShoppingMall-Project)에 이어서 Firebase를 이용하여 로그인을 비롯한 사용자 관리와 제공되는 데이터베이스를 연동하는 작업을 진행하였습니다.

## 기술 스택

- HTML
- CSS
- Bootstrap
- Javascript
- React
- Redux
- Firebase

## 구현 기능
### 로그인/로그아웃/회원가입
페이지에서 로그인 버튼을 눌러 로그인을 시도할 수 있습니다. 

<img src="https://user-images.githubusercontent.com/17917009/172348473-aa38d095-a6f5-4629-ab7d-d0fc6910b5fd.gif" style="text-align : center">
로그인 버튼을 클릭하면 로그인페이지로 이동하여 이메일과 비밀번호를 입력하고 로그인할 수 있습니다.  
<br/>
<img src="https://user-images.githubusercontent.com/17917009/172355484-ffb829b8-b271-49b3-a31a-9a15579f64f6.gif" style="text-align : center">
계정 정보가 맞지 않을 경우 사용자에게 알림을 보냅니다.  
<br/>

<img src="https://user-images.githubusercontent.com/17917009/172357157-22bc66c3-c1e2-4b92-9e60-3fd85d67f412.gif" style="text-align : center">
회원가입버튼을 클릭하여 회원가입을 진행할 수 있습니다.  
<br/>

<img src="https://user-images.githubusercontent.com/17917009/172358151-f9ef682b-31ab-4644-a33b-6bdfbc61a613.JPG" style="text-align : center">
회원가입이 완료된 사용자 정보를 Firebase Authentication 탭에서 확인할 수 있습니다.  
<br/>

<img src="https://user-images.githubusercontent.com/17917009/172359444-2d94cfb7-c37d-4fab-b374-b06bbeef09a6.png" style="text-align : center">
회원가입이 정상적으로 완료되면 데이터베이스에 사용자 UID가 추가되고 하위에 이메일정보가 추가됩니다.  
<br/>


### 스토리지 및 데이터베이스 연동

Firebase에서 제공되는 데이터베이스 시스템을 이용하여 상품정보를 가져오거나 저장할 수 있도록 하였습니다. 이미지 데이터의 경우 Firebase Storage에 저장하여 필요할 때 이미지를 불러올 수 있도록 하였습니다.  
<img src="https://user-images.githubusercontent.com/17917009/172360848-8e772845-bb62-4f24-a330-3a47215066a5.png" style="text-align : center">  
위 이미지는 한 사용자계정의 데이터베이스구조입니다. 이메일과 장바구니(cart), 최근본상품(history)가 저장되어있습니다.  
<br/>
<img src="https://user-images.githubusercontent.com/17917009/172362312-26449c3f-db33-481d-9503-fcc9ab0dff7b.gif" style="text-align : center">  
접속하면 위와 같이 데이터베이스에서 장바구니에 저장된 데이터와 최근본상품 데이터를 가져온 것을 확인할 수 있습니다.  
<br/>

## 느낀점
기존에 만들었던 것에 백엔드 시스템을 연동하는 과정은 쉽지 않았다. 프론트엔드 개발을 희망하지만 그렇다고 백엔드에 대한 지식을 아예 모르는 것은 바람직하지 않다고 생각했기 때문에 Part2 프로젝트를 진행했다. 백엔드에 대한 지식이 많이 없었던터라 완벽하지도 않고 시간이 꽤 오래걸렸던 것 같다. 아직 부족한 것이 많지만 프로젝트를 하나씩 하다보니 지식이나 실력이 조금씩 쌓여가는 느낌이 든다. 더 열심히 개발공부에 전념해야겠다.

## 추가 사항
- 본 프로젝트는 상업적으로 사용되지 않습니다.
- 본 프로젝트에서 사용된 이미지는 저작권이 없는 이미지를 사용하였습니다.
