$(function () {
    //引入头部底部
    $('#header').load('./header.html');
    //引入底部
    $('#footer').load('./footer.html');
    //引入返回顶部
    $('#rock').load('./goTop.html');

    //轮播部分
    //申明计数器
    var n = 0;
    var flag = true;
    //点击部分
    $('.screen .border-M>li').on('click', function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.screen>ul>li').fadeOut().eq(index).fadeIn();
        //点击序号赋值计数器
        n = index;
    })
    //点击部分
    $('.screen .right').on('click', function () {
        if (flag) {
            flag = false;
            if (n >= 2) {
                n = 0;
            } else {
                n++;
            }
            $('.screen .border-M>li').siblings().removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })
    $('.screen .left').on('click', function () {
        if (flag) {
            flag = false;
            if (n <= 0) {
                n = 2;
            } else {
                n--;
            }
            $('.screen .border-M>li').siblings().removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })

    //公司简介轮播图
    var m = 0;
    var flag = true;
    $('.company-line>li').on('click', function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.area .company').fadeOut().eq(index).fadeIn();

        m = index;
    })
    //点击部分
    $('.arrow .right').on('click', function () {
        if (flag) {
            flag = false;
            if (m >= 5) {
                m = 0;
            } else {
                m++;
            }
            $('.company-line>li').removeClass('active').eq(m).addClass('active');
            $('.area .company').fadeOut().eq(m).fadeIn(function () {
                flag = true;
            });
        }
    })
    $('.arrow .left').on('click', function () {
        if (flag) {
            flag = false;
            if (m <= 0) {
                m = 5;
            } else {
                m--;
            }
            $('.company-line>li').removeClass('active').eq(m).addClass('active');
            $('.area .company').fadeOut().eq(m).fadeIn(function () {
                flag = true;
            });
        }
    })

    /* 业务范围*/
    $('.business>li').on('click', function (e) {
        if (e.toElement == $(this).find('img')[0] || e.toElement == $(this).find('.closed')[0]) {
            $(this).siblings().removeClass('active').end().toggleClass('active');
        }

    })

    /* 团队介绍 */
    $('.taim-screen>ul').append($('.taim-screen>ul>li').eq(0).clone());
    var x = 0;
    var y = 0;
    $('.our-team ol>.right').on('click', function () {

        // 调整li区间
        if (x > 2) {
            x = 0;
            $('.taim-screen>ul').css({ 'left': 0 });
        }
        x++;
        // 调整序号跟随的区间  
        y++;
        if (y > 2) {
            y = 0;
        }
        //获取ul临滑动前的位置
        var nowPos = $('.taim-screen>ul').offset().left;
        $('.taim-screen>ul').animate({ 'left': nowPos + 200 }).animate({ 'left': -x * $('.taim-screen>ul>li').innerWidth() });
        $('.our-team .border-M>li').removeClass('active').eq(y).addClass('active');
    })

    $('.our-team ol>.left').on('click', function () {

        // 调整li区间
        if (x <= 0) {
            x = 3;
            $('.taim-screen>ul').css({ 'left': -x * $('.taim-screen>ul>li').innerWidth() });
        }
        x--;
        // 调整序号跟随的区间  
        y--;
        if (y < 0) {
            y = 2;
        }
        //获取ul临滑动前的位置
        var nowPos = $('.taim-screen>ul').offset().left;
        $('.taim-screen>ul').animate({ 'left': nowPos - 200 }).animate({ 'left': -x * $('.taim-screen>ul>li').innerWidth() });
        $('.our-team .border-M>li').removeClass('active').eq(y).addClass('active');
    })
    // 统一当前页面定时器
    // var timer = null;

    // $('.our-team ol').mouseover(function () {
    //     clearInterval(timer);
    //     console.log(this)
    // })
    // $('.our-team ol').mouseout(function () {
    //     setInterval(function () {
    //         $('.our-team ol>.right').click();
    //     }, 2000)
    // })
    //  var col = setInterval(function () {
    //     $('.our-team ol>.right').click();
    // }, 2000)
    // clearInterval(col);


})

