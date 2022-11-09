let getDate = function() {
    let nowDate = new Date();
    let hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
    let minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
    return hour + ':' + minute;
}

$(function() {
    let flag = false;
    let t = setInterval(function() {
        if($('.status-bar_clock') || $('.status-bar_clock').size() > 0) {
            $('.status-bar_clock').text(getDate());
            flag = true;
            clearInterval(t);
        }
    }, 100)
    setInterval(function() {
        if(flag) {
            $('.status-bar_clock').text(getDate());
        }
    }, 60 * 1000)

})