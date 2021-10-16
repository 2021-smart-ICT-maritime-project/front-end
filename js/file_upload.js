function upload() {
                let filename = $('#formFileMultiple').val()

                $.ajax({
                    type: "POST",
                    url: "/upload",
                    data: {url_give:filename},
                    success: function (response) { // 성공하면
                        alert(response["msg"]);
                        window.location.reload()
                    }
                })
            }

function refresh() {
    alert("녹음파일이 업로드 됐습니다.");
    location.href = "../html/board_detailed.html";
}