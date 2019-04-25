$(function () {
    $('#header').load('./header.html');
    //引入底部
    $('#footer').load('./footer.html');
    //引入返回顶部
    $('#rock').load('./goTop.html');
    var W = 0;
    var H = 0;
    function init() {
        var W = $(window).innerWidth();
        var H = $(window).innerHeight() - $('.nav').innerHeight();
        //设置总屏幕高度
        $('.screen').height(H);
        //设置每一屏高度
        $('.screen>ul>section').height(H);

        //设置第二屏li宽度
        $('.block-two .slide').width(W);
        //设置第四屏li宽度
        $('.block-fonr .slide').width(W);
        /* 每一屏上色 */
        var colors = ['#221236', 'white', '#211135', '#211135', '#F1F1F5'];
        $.each($('.screen section'), function (k, v) {
            $(v).css('background', colors[k]);
        })
        // $('.screen section:even').css('background','red')

        //声明计数器，记录屏幕当前索引
        var screenIndex = hash || 0;
        //记录事件触发次数
        var wheelNumber = 0;
        /* 监听鼠标滚轮事件 */
        mouseWheel(window, function (down, e) {
            //dow方向
            //事件多次触发才执行
            if (wheelNumber > 5) {
                //进入事件清零记录
                wheelNumber = 0;
                //滚轮方向
                if (down) {
                    //滚轮向下，页面向上
                    //最后一屏止
                    if (screenIndex < 4) {
                        screenIndex++;
                        $('.screen>ul').stop().animate({ 'top': -screenIndex * H });
                        $('.nav>li').removeClass('now').eq(screenIndex - 1).addClass('now');
                        if (screenIndex == 4) {
                            $('.nav>li').eq(screenIndex).addClass('now');
                        }
                    }
                } else {
                    if (screenIndex > 0) {
                        screenIndex--;
                        slideGo(screenIndex);
                    }
                }
            } else {
                wheelNumber++;
            }

        })

        //点击导航，滑动指定位置
        $('.nav>li').on('click', function () {
            var i = $(this).index();
            if (i < 4) i++;
            //页面索引重置
            screenIndex = i;
            slideGo(i);
        })

        /* 页面加载跳转到指定屏幕 */
        var hash = window.location.hash.slice(1);
        if (hash) slideGo(hash);

        //封装滑动导航跟随
        function slideGo(index) {
            //处理页面滑动
            $('.screen>ul').stop().animate({ 'top': -index * H });
            //索引部分不为0更换高亮显示
            if (index != 0) {
                $('.nav>li').removeClass('now').eq(index - 1).addClass('now');
                if (index == 4) {
                    $('.nav>li').eq(index).addClass('now');
                }
            }
        }
        /* 一屏幕 下箭头*/
        $('.block-one .xia').click(function () {
            $('.nav>li').eq(0).click();
        })

        /* 第二屏轮播 */
        var twoIndex = 0;
        $('.block-two .right').on('click', function () {
            if (twoIndex < 2) {
                twoIndex++;
            }
            $('.block-two>ul').animate({ 'left': -twoIndex * W })
        })
        $('.block-two .left').on('click', function () {
            if (twoIndex > 0) {
                twoIndex--;
            }
            $('.block-two>ul').animate({ 'left': -twoIndex * W })
        })

        /* 第四屏轮播*/
        var flag = true;

        $('.block-fonr .right').on('click', function () {
            if (flag) {
                flag = false;
                changeSlide(-1 * W, this, { 'sleft': 78, 'tleft': 0 }, function () {
                    flag = true;
                });
            }

        })
        $('.block-fonr .left').on('click', function () {
            if (flag) {
                flag = false;
                changeSlide(0, this, { 'sleft': -78, 'tleft': 0 }, function () {
                    flag = true;
                });
            }
        })
        /* 封装 */
        function changeSlide(target, obj, json, fn) {

            //切换内容
            $('.block-fonr>ul').animate({ "left": target });
            //切换滑块
            $(obj).siblings().find('span').animate({ 'left': json['sleft'] }, function () {
                $(obj).find('span').animate({ 'left': json['tleft'] }, function () {
                    fn && fn();
                });
            });
        }
    }
    init()
    //页面大小改变之后，重置屏幕；
    window.onresize = function () {
        init();
    }
    // 开场动画
    setTimeout(function () {
        $('.welcome-K .box').animate({ 'top': 0 }).find('.text').slideDown(function () {
            $('.welcome-K').delay(2000).slideUp();
        })
    }, 4000)
    $('.welcome-K').on('click', function () {
        $(this).slideUp();
    })
    /* 切换特效 */
    setInterval(function () {
        $('.module-c .border-r').fadeToggle('slow')
    }, 1000)
})