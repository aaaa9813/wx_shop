/**
 * aes加密代码
 */


/**
 * aes加密方法
 * @param data  明文
 * @returns  密文
 */
function AESEncrypt(data){
	//密钥
	var key =  "1234577290ABCDEF1264147890ACAE45";
	
	var block = 16;
	//var dataBase64 = Base64.encode(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

    // alert('===12==='+data);
     //var dataBase64 = Base64.encode(data);
     var dataBase64 = data;
    //
    // alert('===13==='+dataBase64);
    
	var length = dataBase64.length % block;
	var pad = block - length;
	dataBase64 += new Array( pad + 1 ).join(  String.fromCharCode(pad) );
	//key  = CryptoJS.enc.Hex.parse( CryptoJS.SHA256(key).toString() );
	//var iv   = CryptoJS.enc.Latin1.parse('');
    iv = CryptoJS.enc.Utf8.parse(key);

	return  CryptoJS.AES.encrypt(dataBase64, key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding}).toString();
	
}
