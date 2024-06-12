const firebaseConfig = {
  apiKey: "AIzaSyDsm6wI35jgRua-YfUInm6O48HO8bV3n3E",
  authDomain: "project-yj-50048.firebaseapp.com",
  databaseURL: "https://project-yj-50048-default-rtdb.firebaseio.com",
  projectId: "project-yj-50048",
  storageBucket: "project-yj-50048.appspot.com",
  messagingSenderId: "347664621460",
  appId: "1:347664621460:web:930a7eacaf1681f2ef3981",
  measurementId: "G-WCQ6W6LHXH"
};

// 파이어베이스 앱 초기화
const app =firebase.initializeApp(firebaseConfig);

//파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

//데이터 저장 실습
function writeUserData(userId, email, nick) {
  database.ref("users/"+userId).set({
    email: email,
    nick: nick
  });
}
//데이터 읽기 실습
//1. 전체 조회된 결과 출력
//-테이블 태그 or 목록 태그를 활용해서 출력

//2. 특정 사용자 조회
//-id 값 입력받은 후 해당 사용자의 email,nick 출력
function readUserData(){
  database.ref("users/").on('value',(snapshot)=>{
    //실시간 데이터베이스 값 접근 
    console.log(snapshot.val());

    let data =snapshot.val();
    let keys = Object.keys(data)

    console.log(Object.keys(data));
    console.log(data["smart"]);
    console.log(data[keys[0]]);

    const result = document.getElementById("result")

    //데이터베이스 웹 페이지 출력
    result.innerText = `${data[keys[0]].email}/${data[keys[0]].nick}`;
    
  });
}





/////////////////////////////////////////////////  
  let form = document.getElementById("rbtn");
  const readBtn =document.getElementById("readBtn")

  readBtn.addEventListener("click",()=>{
    readUserData();
  })
  
  form.addEventListener("click",(event) => {
    event.preventDefault();

  var id = document.getElementById("ID").value;
  var email = document.getElementById("eMail").value;
  var nick = document.getElementById("nIck").value;
  

  console.log("아이디:" + id + "이메일" + email + "닉네임" + nick);

  writeUserData(id,email,nick)
});