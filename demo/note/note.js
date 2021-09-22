
$(function() {
    $('aside').on({
        mouseenter: function() {
            console.log('mouse enter aside');
            $('aside').css({
                width: 350
            });
            $('aside .massage').addClass('massage-pass');
            $('aside .massage .pic').addClass('pic-pass');
            $('aside .massage .content').css('display', 'block');

        },
        mouseleave: function() {
            console.log('mouse leave aside');
            $('aside').css({
                width: 100
            });
            $('aside .massage').removeClass('massage-pass')
            $('aside .massage .pic').removeClass('pic-pass');
            $('aside .massage .content').css('display', 'none');
        }
    });
    $('.registered span').on({
        mouseenter: function() {
            $(this).css({
                cursor: 'pointer',
                opacity: 1
            });
        },
        mouseleave: function() {
            $(this).css({
                opacity: .7
            })
        }
    });


    
})