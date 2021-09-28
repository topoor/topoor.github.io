$(function() {
    // 点击进入
    $('#loading').on('click', () => {
        form_submit();
    });
    
    // 密码加密
    function form_submit() {
        console.log('111');
        let pwd = $('.load input').val();
        pwd = md5(pwd);
        // alert(pwd);
        if (pwd == '0032b142fe239e0da0e030c1a9343b8a') {
            console.log(typeof pwd);
            window.location.href = 'complain.html';
        }
        else {
            alert('偷看别人的日记可不是君子作为哦！');
            $('.load input').val(null);
        }
    }
})