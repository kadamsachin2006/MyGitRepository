//Send order confirmation sms to whatup number
function Sendwhatsapp(){
    alert('hi');
    var name = document.querySelector(".name").value;
    var address = document.querySelector(".address").value;
    var mobile = document.querySelector(".mobile").value;
    var tamt = document.querySelector(".tamt").value;
alert(tamt);
    var url = "https://wa.me/" + 7745076426 + "?text="
        + "*Name :* " + name + "%0a"
        + "*Address :* " + address + "%0a"
        + "*Mobile:* " + mobile + "%0a"
        + "*Amount:* " + tamt + "%0a";

    //window.open(url, '_blank').focus();
}
