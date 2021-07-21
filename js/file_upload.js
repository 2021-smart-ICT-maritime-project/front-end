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