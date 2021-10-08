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

    // 搜索框文字动画效果
    let mytext = $('.search input').prop('placeholder');
    let str = '';
    let timer;
    let i = 0;
    const addChar = () => {
        console.log(str);
        $('.search input').prop('placeholder', str + '_');
        str += mytext.charAt(i++);
        type();
    }
    const type = () => {
        if (i < mytext.length+1){
            timer = setTimeout(addChar, 100);
        } else {
            clearTimeout(timer);
        }
    }
    $(document).ready(type);

})

