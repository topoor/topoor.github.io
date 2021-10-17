
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

    // 写入文章
    let text = `  
1.CSS3新增选择器

①属性选择器
    可以根据元素特定属性来选择元素

    选择符           简介
    E[att]          选择具有att属性的E元素
    E[att="val"]    选择具有att属性且属性值等于val的E元素
    E[att^="val"]   匹配具有att属性且以val开头的E元素
    E[att$="val"]   匹配具有att属性且以val结尾的E元素
    E[att*="val"]   匹配具有att属性且值中含有val的E元素


    E[att]:
        <style>
            input[value] {
                color: darkgreen;
            }
        </style>

        <body>
            <input type="text" value="请输入用户名">
        </body>

    E[att="val"]:
        input[type=password]{
            color: darkred;
        }

        <input type="password" >

    E[att^="val"]:
        div[class^=icon] {

        }
        <div class="icon1">
        <div class="icon2">
        <div class="icon3">
        <div class="icon4">

    E[att$="val"]:
        div[class$=data] {

        }
        <div class="icon1-data">
        <div class="icon2-data">
        <div class="icon3">
        <div class="icon4">

②结构伪类选择器
    根据文本结构来选择元素，常用于根据父级选择器里面的子元素

    E:first-child       匹配父元素中的第一个子元素E
    E:last-child
    E:nth-child(n)      第n个
    E:first-of-type     指定类型E的第一个
    E:last-of-type
    E:nth-or-type

    注：ntn-child(n) 中，n可以是数字，关键词（odd/even）和公式(n/2n/2n+1/5n/n+5/-n+5 0开始，会自+1)

        ul li:first-child {
            color: darkred;
        }

③伪类选择器*
    利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构

    ::before    在元素内部的前面插入内容
    ::after     在元素内部的后面插入内容

    创建的元素属于行内元素，并且新创建的元素在文档树种是找不到的，所以称为伪元素
    before和after必须有content属性
    伪元素选择器和标签选择器一样，权重为1

    .box::before {
        font-family: "iconfont";
        content: '\e77f  before ';
    }
    阿里的字库图标调用时，需要把 &#xe77f; 改成\e77f（&#x-->\  +  去掉分号）

    鼠标进入div内的语法格式：
        div:hover::before

    伪元素清除浮动：
        本质上是在最后面插入一个盒子（同隔断法原理相同）
        .clearfix::after {
            content: "";
            display: block;     /*转为块元素*/
            height: 0;          /*让插入的盒子不显示出来*/
            clear: both;        /*清除浮动*/
            visibility:hidden;  /*同理，不显示这个元素*/

    双伪元素：
        .clearfix:before,
        .clearfix:after {
            content: "";
            display: table;     /*转换为块元素，且在一行上显示*/
        }

        .clearfix:after {
            clear: both;
        }
        



2.CSS3盒子模型
css3可以通过 box-sizing 来指定盒模型，有2个值：content-box/border-box
其中：
    ① box-sizing: content-box 
        盒子大小为 width + padding + border
    ② box-sizing: border-box
        盒子大小为 width


3.CSS3的其他特性

① css3滤镜filter
    将模糊或颜色偏移等图形效果应用于元素

    filter: 函数();
    例如：filter: blur(5px);    blur模糊处理，数值越大越模糊

② Calc()函数
    让你在声明css属性时执行一些计算

    width: calc(100%-80px);

③ 过渡*
    从一个状态渐渐过渡到另一个状态
    transition: 要过渡的属性 花费时间 运动属性 何时开始;
        属性：想要变化的css属性，宽高/颜色/内外边距..
             如果想要所有的属性都变化过渡，写一个all即可
        花费时间：单位 秒，如0.5s
        运动曲线：默认是ease（逐渐慢下来），可以省略
        合适开始：单位是 秒，可以设置延迟触发时间，默认是0（可以省略）

    .div2 {
        width: 200px;
        height: 30px;
        background-color: rgb(153, 160, 142);
        /* transition: 要过渡的属性 花费时间 运动属性 何时开始; */
        transition: all 1s;
    }
    .div2:hover {
        width: 250px;
        border: 1px solid darkolivegreen
    }

    这么写也行
    transition: width .5s, height .6s;
    
4.CSS3 2D转换
转换是CSS3中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果

① 移动 translate

    transform: translate(x px,y px);
    transform: translateX(n);
    transform: translateY(n);

    注：还占有原来的位置，不会影响其他盒子
        对行内元素无效

    让一个子盒子水平居中：
        position: absolute; //设置绝对定位后，就不会继续占有原来的位置了
        top: 50%;   //父盒子的50%
        left: 50%;
        
        transform: translate(-50%,-50%);    //子盒子的50%
        
② 旋转 rotate
    
    transform: rotate(度数 deg);
        单位 deg
        角度为正，顺时针；为负，逆时针

    设置旋转中心点
        transform-origin: x y;
    
③ 缩放 scale
    transform: scale(x,y);
    x y 写倍数
    如果倍数一样，可以只写一个参数


5.CSS3动画 animation
可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果
相比起过渡，动画可以实现更多变化，更多控制，连续自动播放等效果

① 定义动画

    <style>
        @keyframes 动画名称 {
            0% {
                属性
            }
            100% {
                属性
            }
        }
    </style>

    @keyframes  关键帧
    from / 0%   动画开始
    to / 100%   动画结束

② 使用（调用）动画

    选择器 {
        /*调用动画*/
        animation-name: 动画名称;
        /*持续时间*/
        animation-duration: 持续时间;
    }

③ 动画常见属性
    @keyframes                  规定动画
    animation                   所有动画的简写属性，除了animation-play-state属性
    animation-name              动画名称
    animation-duration          动画完成一个周期所花费的时间
    animation-timing-function   动画的速度曲线
    animation-delay             动画何时开始
    animation-iteration-count   动画播放的次数 1(默认)/infinite
    animation-direction         动画是否在下一周期逆向播放 normal/alternate
    animation-play-state        动画是否正在运行或暂停  running/pause
    animation-fil-mode          动画结束后的状态，保存forwards/回到起始backwards

    动画简写:
        animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;

    速度曲线细节：
        linear      匀速
        ease        默认，慢快慢
        ease-in     慢快
        ease-out    快慢
        ease-in-out 慢快慢
        steps(n)     时间函数中的间隔数量 分n步走

6.CSS 3D转换

① 位移
    translate3d(x,y,z)
    近大远小的效果需要借助透视

② 旋转
    rotate3d(x,y,z)
    沿边旋转

③ 透视
    perspective： ..px;
    给父盒子写

④ 3D呈现
    transform-style
        flat            默认子元素不开启3d立体空间
        preserve-3d     子元素开启立体空间

7.浏览器私有前缀
浏览器私有前缀是为了兼容老版本的写法，比较新版本的浏览器无需增加

① 私有前缀
    -moz-       firefox私有属性
    -ms-        ie私有属性
    -webkit-    safari、chrome私有属性
    -o-         Opera私有属性



    `;
    let content = document.querySelector('.right').querySelector('section');
    content.innerText = text;

    // 登录框
    $('.registered .load').on('click', function() {
        $('.w').toggleClass('filter');
        $('.login').toggleClass('block');
        $('.mask').toggleClass('block');
    });
    $('.login .close span').on('click', function() {
        $('.w').toggleClass('filter');
        $('.login').toggleClass('block');
        $('.mask').toggleClass('block');
    });
    
})