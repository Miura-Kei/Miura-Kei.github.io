//////////////////////////////////クイズ//////////////////////////////////
function checkAnswer(choice) {
    if (choice === 'correct') {
    document.getElementById('result').innerHTML = '正解です！ 80%以上のシェアを誇り、『二輪車＝ホンダ』となっており他社製のバイクであって『ホンダ』と呼んでいる';
 } else {
    document.getElementById('result').innerHTML = '残念でした。';
}
    
let buttons = document.querySelectorAll('.choice-button');
    for (var i = 0; i < buttons.length; i++) { buttons[i].disabled = true; } }
    
//////////////////////////////////パスワード//////////////////////////////////
function checkPassword() {
        let passwordInput = document.getElementById("passwordInput").value;
        let correctPassword = "FND19";
    
    if (passwordInput === correctPassword) { window.location.href = "https://app.slack.com/client/T02DS9VKWLU/C02DYMXNBS5";
} else {
    document.getElementById("message").textContent = "パスワードが違います。";
 }
}