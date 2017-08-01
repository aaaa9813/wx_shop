var xhr = createXHR();
// 定义xhr对象的请求响应事件

//默认的回调方法
xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
        case 0 :
            //alert("请求未初始化");
            break;
        case 1 :
            //alert("请求启动，尚未发送");
            break;
        case 2 :
            //alert("请求发送，尚未得到响应");
            break;
        case 3 :
            //alert("请求开始响应，收到部分数据");
            break;
        case 4 :
            alert("===1===" + ttt);
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                var data = xhr.responseText;
                alert(data);
            } else {
                alert("Request was unsuccessful : " + xhr.status + " " + xhr.statusText);
            }
            break;
    }
};


function setCallfun(callfun)
{
    if(callfun==undefined || callfun=="" || callfun==null){
        alert("回调函数为空");
        return;
    }
    xhr.onreadystatechange = callfun;

}

function postSend(url, data)
{
    xhr.open("post", url, true);

    // 不支持FormData的浏览器的处理
    if (typeof FormData == "undefined") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }

    PostSend(xhr, data);
}



