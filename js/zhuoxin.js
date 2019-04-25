$(function () {
  /* 引入头部 */
  $('#header').load('./header.html');
  /* 引入底部 */
  $('#footer').load('./footer.html');
  //引入返回顶部
  $('#rock').load('./goTop.html');

  //页面加载
  $(function () {
    //页面加载

    var sendData = /type=([a-zA-Z0-9]*)/.exec(window.location.search.slice(1))[1];
    console.log(sendData);
    $.ajax({
      type: 'get',
      url: './js/article.php',
      data: { type: sendData },
      success: function (data) {
        console.log(data)
        var data = data.data;
        $('.title>h1 ').html(data.typeTitle);//大标题
        $('.title>.About').html(data.typeEntitle);//company culture
        $('.top-s>.one').html(data.title);//小标题
        $('.content-s>img').attr('src', data.coverImg)//图片
        $('.two').html(data.creatAt);//时间
        $('.top-s>span').html(data.creatByFullName);//管理员
      }
    })
  })

  /* 点赞 */
  $('.pen>i').mousemove(function () {
    $('span').stop().fadeIn();//淡入
    //划下
    $('.pen+p').stop().fadeIn();
  })

  $('.pen>i').mouseout(function () {
    $('span').stop().fadeOut();//淡出
    //划上
    $('.pen+p').stop().fadeOut();
  })
  var n = 0;
  $('.pen>i').on('click', function () {
    n++;
    $('span').html('喜欢' + (n));
  })
})