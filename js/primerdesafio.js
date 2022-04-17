// JavaScript source code
function encrypt(msg) {
    /* d = msg.replaceAll("a", "ai");*/

    let rp = msg.replaceAll("e","1").replaceAll("i","2").replaceAll("a","3").replaceAll("o","4").replaceAll("u","5");
    let rp2 = rp.replaceAll("1","enter").replaceAll("2","imes").replaceAll("3","ai").replaceAll("4","ober").replaceAll("5","ufat");
    return rp2;
}

function decrypt(msg) {
    /* d = msg.replaceAll("a", "ai");*/
    let b = msg.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat","u");
    return b;
}

function encryptmsg() {
   
    var mymsg = document.getElementById('txt_toencrypt').value;
    var encryptedmsg = encrypt(mymsg);
    document.getElementById("txt_encrypted").value = encryptedmsg;
    
    alert("Your message has been encrypted");

    ccschange();
}

function ccschange(){

    let noEncontrado = document.getElementById('outpuldiv');
    let mensajeFinal = document.getElementById('finalmessage');
    noEncontrado.style.display = "none";
    mensajeFinal.style.display = 'block';

}


function decryptmsg() {
    var mymsg = document.getElementById('txt_toencrypt').value;
    var encryptedmsg = decrypt(mymsg);
    document.getElementById("txt_encrypted").value = encryptedmsg;
    alert("Your message has been decrypted");
}

function copymsg() {
    var mymsg = document.getElementById('txt_encrypted');
    mymsg.select();
    mymsg.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mymsg.value);
    mymsg.select();
    /* For mobile devices */
}



/*alert(encrypt("Conducta"));

alert(decrypt("Coberndufatctasi"));
*/
