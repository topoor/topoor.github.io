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
        if (pwd == 'e10adc3949ba59abbe56e057f20f883e') {
            console.log(typeof pwd);
            window.location.href = 'newdoc.html';
        }
        else {
            alert('密码错误！请重新输入！');
            $('.load input').val(null);
        }
    }
})