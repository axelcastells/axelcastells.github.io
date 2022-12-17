/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

function sendEmail(sender, senderMail, body){
    var senderNameContent = document.getElementById(sender).value;
    var senderMailContent = document.getElementById(senderMail).value;
    var bodyContent = document.getElementById(body).value;

    alert(senderNameContent);
    alert(senderMailContent);
    alert(bodyContent);

    Email.send({
        Host: "smtp.gmail.com",
        To: "axelcastellsmonllau@gmail.com",
        From: senderMailContent,
        Subject: "Contact from: "+senderNameContent,
        Body: bodyContent,
    }).then(function (message){
        alert("Mail Sent!")
    });
}