

$(function() {
    // 切换页面颜色
    $('.red').on('click', function() {
        console.log('切换红色主题');
        $('.hello').css('background-color','#a7535a')
        $('.nav').css('background-color','#e9ccd3')
        $('.bd').css('background-color','#c45a65')
        $('.content').css('background-color','#f0c9cf')
        $('footer').css('background-color','#a7535a')
    })
    $('.blue').on('click', function() {
        console.log('切换蓝色主题');
        $('.hello').css('background-color','#495c69')
        $('.nav').css('background-color','#93b5cf')
        $('.bd').css('background-color','#495c69')
        $('.content').css('background-color','#d0dfe6')
        $('footer').css('background-color','#495c69')
    })

    // nav 的 li
    $('.nav_ul').children('li').on('mouseenter', function() {
        $(this).css({
            'background-color' : $('.hello').css('background-color')
        })
        $(this).children('.bd').css('display', 'block')
    })
    $('.nav_ul').children('li').on('mouseleave', function() {
        $(this).css({
            'background-color' : $('.nav').css('background-color')
        })
        $(this).children('.bd').css('display', 'none')
    })
    
    // li 的 li
    $('.bd dd').on('mouseenter', function() {
        $(this).css({
            'border' : '2px solid',
            'border-color' : $('.nav').css('background-color')
        })
    })
    $('.bd dd').on('mouseleave', function() {
        $(this).css({
            'border' : ''
        })
    })
    $('.demo .bd li').on('mouseenter', function() {
        $(this).css({
            'border' : '2px solid',
            'border-color' : $('.nav').css('background-color')

        })
    })
    $('.demo .bd li').on('mouseleave', function() {
        $(this).css({
            'border' : ''
        })
    })

    // 跳转
    $('.demo a').eq(0).prop('href','./demo/计时器移动端.html')
    $('.notes .h dd').eq(0).on('click', function() {
        console.log('跳转');
        location.href = './notes/表格.txt'
    })

})
