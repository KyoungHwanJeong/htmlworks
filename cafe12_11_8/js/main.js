// main.js

window.onload = function(){
  // 이미지 슬라이드
  let picture = ["images/header0.jpg", "images/header1.jpg",
  "images/header2.jpg"];
  let picIdx = 0;

  showSlide();

  function showSlide(){
  // 이미지 경로  - src 속성 사용
  document.getElementById("pic").src = picture[picIdx];
  picIdx += 1;
  if(picIdx == picture.length){
  picIdx = 0;
  }

  // 3초에 한번씩 그림이 바뀐다
  setTimeout(showSlide, 3000);
  }
}

//시계 생성
// setInterval이 window 함수여서 먼저 실행된다
setInterval(myWatch, 1000);

function myWatch(){
  const now = new Date(); //날짜와 시간 함께 생성
  let time = now.toLocaleTimeString(); //시간만 출력하기
  console.log(time);

  let watch = document.getElementById("show");
  watch.innerHTML = time;
  watch.style.color = "blue";
}
