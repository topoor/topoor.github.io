

$(function() {
    // nav 的 li
    $('.nav_ul').children('li').on('mouseenter', function() {
        $(this).css({
            'background-color' : '#495c69'
        })
        $(this).children('.bd').css('display', 'block')
    })
    $('.nav_ul').children('li').on('mouseleave', function() {
        $(this).css({
            'background-color' : '#93b5cf'
        })
        $(this).children('.bd').css('display', 'none')
    })
    
    // li 的 li
    $('.bd dd').on('mouseenter', function() {
        $(this).css({
            'border' : '2px solid #93b5cf'
        })
    })
    $('.bd dd').on('mouseleave', function() {
        $(this).css({
            'border' : ''
        })
    })
    $('.demo .bd li').on('mouseenter', function() {
        $(this).css({
            'border' : '2px solid #93b5cf'
        })
    })
    $('.demo .bd li').on('mouseleave', function() {
        $(this).css({
            'border' : ''
        })
    })

    // 跳转
    $('.demo a').eq(0).prop('href','./demo/计时器.html')
    $('.notes .h dd').eq(0).on('click', function() {
        console.log('跳转');
        location.href = './notes/表格.txt'
    })
})
