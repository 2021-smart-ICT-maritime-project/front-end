function passwordCheck() {
    var p1 = document.getElementById('inputPassword').value;
    var p2 = document.getElementById('inputRepeatPassword').value;

     if(p1.length < 8) {
              alert('입력한 글자가 8글자 이상이어야 합니다.');
              return false;
          }

    if (p1 != p2) {
        alert("비밀번호가 일치 하지 않습니다");
        return false;
    } else {
        alert("비밀번호가 일치합니다");
        return true;
    }

}
