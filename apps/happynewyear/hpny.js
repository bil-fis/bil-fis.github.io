// @author: bil_fis
// @github: https://github.com/bil-fis
// @bilibili: https://space.bilibili.com/586310538
// b站bil_fis制作

window.onload= function(){setTimeout("check()",200);}

function check(){
console.log('check已经执行');
      //平台、设备和操作系统
        var system = {
            win: false,
            mac: false,
            xll: false,
            ipad:false
        };
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
        //跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
        if (system.win || system.mac || system.xll||system.ipad) {
        var audio = document.getElementById('audio');
        setup();
            
        } else {
        setup();
        }
}

function setup(){
    //获取年份
    var date = new Date();
    var year = date.getFullYear();
    //获取生肖
    var ss=year-2008;//设定2008为初始年份
    var ssc=ss%12;
    var ssyear=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
    console.log("今年是"+year+"年\n"+"祝你"+ssyear[ssc]+"年快乐！");
    
    var last_text = "bil_fis祝你"+ssyear[ssc]+"年快乐！"
    
    //准备祝福语
    var zfy = new Array("在这快乐的新春之夜，让我们共同祈求三件事，<br />一个好朋友，<br />一个好胃口，<br />一个好梦！<br />","繁星点点，夜色宁静，在你回家的路上，送上我真挚的祝福。<br />繁星如我，伴你同行，道一声朋友，","祝你财源滚滚，发得像壮牛；<br />身体棒棒，壮得像狗熊；爱情甜甜，美得像蜜蜂；<br />好运连连，多得像牛毛！<br />","晨曦出现的第一缕阳光是我对您的深深祝福，<br />夕阳收起的最后一抹嫣红是我对您的忠心问候。<br />在除夕来临之际，<br />送上我真挚祝福：<br />","送你健康，那是最佳的礼物。<br />送你知足，那是最大的财富。<br />送你信心，那是最好的品德。<br />送你关心，那是最真挚的祝福。<br />");
    
    //随机选取祝福语
    //
    //输出祝福语
    document.getElementById("text").innerHTML=zfy[Math.floor(Math.random() * 6)]+last_text;
    console.log(zfy[Math.floor(Math.random() * 6)]);
    
    //执行逐字输出
    type();
}

function type(){
    //逐字输出
    var typ_text = document.getElementById('text'),
        show_text = document.getElementById('show_text'),
        i = 0,
        timer = setInterval (function(){
            show_text.innerHTML = typ_text.innerHTML.substring(0, i);
            i++;
            if(show_text.innerHTML==typ_text.innerHTML){
                change_breath();
                clearInterval(timer);
            };
        },60);
}

function change_breath(){
    document.getElementById('type_lantern').className='lantern';
}
function music(){
    var audio = document.getElementById('audio');
    var img=document.getElementById('playmusic');
    if(audio!=null){
        if(audio.paused){
            audio.play();
            splaymusic.className='playmusic';
        }else{
            audio.pause();
            playmusic.className='';
        }
    }
}