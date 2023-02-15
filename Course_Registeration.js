function pyoDisplay() {
  //Search 버튼 눌렀을 때 표 표시
  const pyo = document.getElementById('pyo')
  if (pyo.style.visibility !== 'hidden') {
    pyo.style.visibility = 'visible'
  }
}

function notEntry() {
  //notice, 수강신청 및 수정/삭제, 개발자 소개 외의 버튼 눌렀을 때 실행
  alert("'수강신청 및 수정/삭제'를 눌러 측정을 시작하세요.")
}

function register1Click() {
  //첫 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc1 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc1++
      done(1)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function register2Click() {
  //두 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc2 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc2++
      done(2)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function register3Click() {
  //세 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc3 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc3++
      done(3)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function register4Click() {
  //네 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc4 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc4++
      done(4)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register5Click() {
  //다섯 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc5 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc5++
      done(5)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register6Click() {
  //여섯 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc6 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc6++
      done(6)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register7Click() {
  //일곱 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc7 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc7++
      done(7)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}
function register8Click() {
  //여덟 번째 과목 클릭 시 실행되는 함수
  var TorF = confirm('해당 과목을 수강신청 하시겠습니까?')
  if (TorF == true) {
    if (rc8 + 1 == 2) {
      alert(
        '201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.'
      )
    } else {
      alert('수강신청이 저장완료되었습니다.')
      count++
      rc8++
      done(8)

      if (count === 8) {
        stopStopwatch()
      }
    }
  }
}

function stopStopwatch() {
  //스톱워치, register 총합 8번 눌렸을 시 스톱워치 종료
  var today2 = new Date()
  alert(`${(today2 - today1) / 1000}초 걸렸습니다.`) //스톱워치 종료시간에서 페이지 입장 시간을 뺌
  //location.replace('index.html');
}

function deleteDone(){
  var torf = confirm('해당 과목을 삭제 하시겠습니까?')
  if (torf === true){
    alert('000 : 개발 중인 기능입니다.')
  }
}

function done(clicked) {
  //몇번을 클릭했느냐에 따라 함수 호출
  cnt += 1 //몇번째로 클릭했느냐에 따라 번호 출력
  const item = document.getElementById('done')
  if (clicked === 1) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' + //innerHTML을 통해 테이블의 내용 출력
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>전공</td>' +
      '<td>T01234567</td>' +
      '<td>F</td>' +
      '<td>MacOS</td>' +
      '<td>2</td>' +
      '<td>3</td>' +
      '<td>Bill Gates</td>' +
      '<td>월 1 2 3 ( )</td>' +
      '<td>0 / 100</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
  if (clicked === 2) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' +
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>전공</td>' +
      '<td>T87654321</td>' +
      '<td>F</td>' +
      '<td>How to use Facebook</td>' +
      '<td>2</td>' +
      '<td>3</td>' +
      '<td>Mark Zuckerberg</td>' +
      '<td>수 1 2 3 ( )</td>' +
      '<td>0 / 60</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
  if (clicked === 3) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' +
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>전공</td>' +
      '<td>S20212223</td>' +
      '<td></td>' +
      '<td>애플학개론</td>' +
      '<td>2</td>' +
      '<td>3</td>' +
      '<td>이재용</td>' +
      '<td>수 4 5 ( )</td>' +
      '<td>0 / 23</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
  if (clicked === 4) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' +
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>전공</td>' +
      '<td>I23398948</td>' +
      '<td></td>' +
      '<td>프론트엔드의 모든 것</td>' +
      '<td>2</td>' +
      '<td>2</td>' +
      '<td>임창용</td>' +
      '<td>화 7 8 ( )</td>' +
      '<td>0 / 14</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
  if (clicked === 5) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' +
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>과기</td>' +
      '<td>T35140000</td>' +
      '<td>F</td>' +
      '<td>Tesla Mechanism</td>' +
      '<td>-</td>' +
      '<td>2</td>' +
      '<td>Elon Musk</td>' +
      '<td>월 7 8 ( )</td>' +
      '<td>0 / 100</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
  if (clicked === 6) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' +
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>생활</td>' +
      '<td>U19900905</td>' +
      '<td></td>' +
      '<td>체육(피겨)</td>' +
      '<td>-</td>' +
      '<td>1</td>' +
      '<td>김연아</td>' +
      '<td>금 3 4 ( )</td>' +
      '<td>0 / 50</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
  if (clicked === 7) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' +
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>인성</td>' +
      '<td>B20230213</td>' +
      '<td></td>' +
      '<td>밥상머리인성교육</td>' +
      '<td>-</td>' +
      '<td>2</td>' +
      '<td></td>' +
      '<td>금 5 6 ( )</td>' +
      '<td>0 / 10</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
  if (clicked === 8) {
    item.innerHTML +=
      '<tr><td>' +
      cnt +
      '</td>' +
      '<td><button class="delete" onClick="deleteDone()"></button></td>' +
      '<td>사철</td>' +
      '<td>H19540420</td>' +
      '<td></td>' +
      '<td>한국외국어대학교사</td>' +
      '<td>-</td>' +
      '<td>2</td>' +
      '<td>박정운</td>' +
      '<td>화 5 6 ( )</td>' +
      '<td>0 / 20</td>' +
      '<td><input type="checkbox"></td>' +
      '<td></td></tr>'
  }
}

var count = 0
let cnt = 0 //done()함수용 count 위랑 다릅니다
var rc1 = 0
var rc2 = 0
var rc3 = 0
var rc4 = 0
var rc5 = 0
var rc6 = 0
var rc7 = 0
var rc8 = 0
var today1 = new Date() //수강신청 및 수정/삭제 페이지 들어오자마자의 시간