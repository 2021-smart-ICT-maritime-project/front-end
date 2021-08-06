// var e1 = document.getElementById('inputEmail').value;
// var p1 = document.getElementById('inputPassword').value;
// var p2 = document.getElementById('inputRepeatPassword').value;
//
// if (e1.length == 0) {
//
// }
//
// if (p1.length < 8) {
//     alert('입력한 글자가 8글자 이상이어야 합니다.');
//     return false;
// }
//
// if (p1 != p2) {
//     alert("비밀번호가 일치 하지 않습니다");
//     return false;
// }

/*변수 선언*/
var id = document.querySelector('#inputEmail');
var pw1 = document.querySelector('#inputPassword');
var pw2 = document.querySelector('#inputRepeatPassword');
var userName = document.querySelector('#inputName');
var mobile = document.querySelector('#inputPhone');
var error = document.querySelectorAll('.error_next_box');

/*이벤트 핸들러 연결*/
id.addEventListener("focusout", checkId);
pw1.addEventListener("focusout", checkPw);
pw2.addEventListener("focusout", comparePw);
userName.addEventListener("focusout", checkName);
mobile.addEventListener("focusout", checkPhoneNum);

/*콜백 함수*/
function checkId() {
    var idPattern = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i
    if(id.value === "") {
        error[0].innerHTML = "필수 정보입니다.";
        error[0].style.display = "block";
    } else if(!idPattern.test(id.value)) {
        error[0].innerHTML = "이메일 형식에 어긋납니다.";
        error[0].style.display = "block";
    } else {
        error[0].style.display = "none";
    }
}

function checkPw() {
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if(pw1.value === "") {
        error[1].innerHTML = "필수 정보입니다.";
    } else if(!pwPattern.test(pw1.value)) {
        error[1].innerHTML = "8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.";
    } else {
        error[1].style.display = "none";
    }
}

function comparePw() {
    if(pw2.value === pw1.value && pw2.value != "") {
        error[2].style.display = "none";
    } else if(pw2.value !== pw1.value) {
        error[2].innerHTML = "비밀번호가 일치하지 않습니다.";
        error[2].style.display = "block";
    }

    if(pw2.value === "") {
        error[2].innerHTML = "필수 정보입니다.";
        error[2].style.display = "block";
    }
}

function checkName() {
    var namePattern = /[a-zA-Z가-힣]/;
    if(userName.value === "") {
        error[3].innerHTML = "필수 정보입니다.";
        error[3].style.display = "block";
    } else if(!namePattern.test(userName.value) || userName.value.indexOf(" ") > -1) {
        error[3].innerHTML = "한글과 영문 대소문자를 사용하세요. (특수기호, 공백 사용 불가)";
        error[3].style.display = "block";
    } else {
        error[3].style.display = "none";
    }
}

function checkPhoneNum() {
    var isPhoneNum = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

    if(mobile.value === "") {
        error[4].innerHTML = "필수 정보입니다.";
        error[4].style.display = "block";
    } else if(!isPhoneNum.test(mobile.value)) {
        error[4].innerHTML = "형식에 맞지 않는 번호입니다.";
        error[4].style.display = "block";
    } else {
        error[4].style.display = "none";
    }
}