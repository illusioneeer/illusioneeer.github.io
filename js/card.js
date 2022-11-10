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
            $('#aside-content .card-info .author-info__description').text('一名什锦区博主，这里我将记录学习过程中的笔记、生活中的点点滴滴，分享一些经验与想法。在这里相遇很幸运 💛💙');
            clearInterval(t);
        }
    }, 100)
    setInterval(function() {
        if(flag) {
            $('.status-bar_clock').text(getDate());
        }
    }, 60 * 1000)

})