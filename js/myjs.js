/**
 * Created by Administrator on 2017/7/13.
 */

function createXHR() {
// IE7+,Firefox, Opera, Chrome ,Safari
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    }
// IE6-
    else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXMLHttp"],
                i, len;
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    alert("=1==请升级浏览器版本");
                }
            }
        }
        return arguments.callee.activeXString;
    } else {
        throw new Error("XHR对象不可用");
    }
}

var xmlhttp;
function loadXMLDoc(url)
{
    xmlhttp=null;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp!=null)
    {
        xmlhttp.onreadystatechange=state_Change;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(null);
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}
/*
 // get请求
 // get请求添加查询参数
 function urlParam(url, name, value) {
 url += (url.indexOf('?') == -1 ) ? '?' : '&' ;
 url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
 return url;
 }

 // get请求
 url = urlParam("example.php","name","ccb");
 url = urlParam(url,"pass","123");
 xhr.open("get", url ,true);
 xhr.send(null);*/

// post请求
// 格式化post 传递的数据
function postDataFormat(obj) {
    if (typeof obj != "object") {
        alert("===输入的参数必须是对象");
        return;
    }

    // 支持有FormData的浏览器（Firefox 4+ , Safari 5+, Chrome和Android 3+版的Webkit）
    if (typeof FormData == "function") {
        var data = new FormData();
        for (var attr in obj) {
            data.append(attr, obj[attr]);
        }


        return data;
    } else
        {
        // 不支持FormData的浏览器的处理
        var arr = new Array();
        var i = 0;
        for (var attr in obj) {
            arr[i] = encodeURIComponent(attr) + "=" + encodeURIComponent(obj[attr]);
            i++;
        }
        return arr.join("&");
    }
}

function PostSend(xhr, data)
{
    var ret = postDataFormat(data);
   // ret= JSON.stringify(ret);
    alert('post===1=='+ret);
    xhr.send(ret);
}


