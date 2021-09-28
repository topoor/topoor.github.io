// 判断输入的密码，从而实现网页的跳转
// 密码使用 md5 加密
$(function() {
    $('.record .complain').on('click', () => {
        console.log('click');
        let cilentW = window.innerWidth;
        console.log(cilentW);
        if (cilentW <= 1080) {
            // 跳转移动端
            location.href = './record/m.load.html';
        }
        else {
            // 跳转PC端
            location.href = './record/load.html';
        }
    })
})