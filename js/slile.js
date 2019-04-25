$(function () {
    /* 引入头部 */
    $('#header').load('./header.html');
    /* 引入底部 */
    $('#footer').load('./footer.html');
    /* 返回顶部 */
    $('#rock').load('./goTop.html');

    //申明計數器，記録請求次數
    var n = 0;
    //第一次請求
    reauestData('listData0' + n);
    // 点击加载
    $('.cks>.png').on('click', function () {
        n++;
        if (n < 3) {
            reauestData('listData0' + n)

        } else {
            $(this).html()
        }
        console.log(this)
    })
    $('.cks>.ck').on('click', function () {
        n++;
        if (n < 3) {
            reauestData('listData0' + n)

        } else {
            $('.ck').html()
        }

    })
    //封裝
    function reauestData(reqData) {
        //請求數據
        $.ajax({
            type: 'get',
            url: './js/list.php',
            data: { type: reqData },
            success: function (data) {
                console.log(data);
                var res = data.data.list;
                $.each(res, function (k, v) {
                    var template = $('#template').html();
                    console.log(template);
                    template = template.replace(/#sysId#/, v.sysId);
                    template = template.replace(/#coverImg#/, v.coverImg);
                    template = template.replace(/#title#/, v.title);
                    template = template.replace(/#creatAt#/, v.creatAt);
                    template = template.replace(/#describe#/, v.describe);
                    $('.and').append($(template));
                })
            }
        })
    }
})