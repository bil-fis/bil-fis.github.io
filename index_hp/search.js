function baidusearch() {
document.getElementById('searchbox').innerHTML='<form action="https://www.baidu.com/s" target="_blank"> <input style="animation-fill-mode: forwards;" id="search" class="search" type="text" name="word" size="60" placeholder="搜索"/>';
document.getElementById('baidu').innerHTML='<center id="baiduIconselect" class="youyuantext"><a tabindex="1" href="javascript:baidusearch()">百度</a></center>';

document.getElementById('sogou').innerHTML='<span id="sogou"><center id="sogouIcon" class="youyuantext"><a tabindex="3" href="javascript:sogousearch()">搜狗</a></center></span>';
document.getElementById('bing').innerHTML='<center id="bingIcon" class="youyuantext"><a tabindex="2" href="javascript:bingsearch()">必应</a></center>';
}

function sogousearch() {
document.getElementById('searchbox').innerHTML='<form action="https://www.sogou.com/web" target="_blank"> <input style="animation-fill-mode: forwards;" id="search" class="search" type="text" name="query" size="60" placeholder="搜索"/>';
document.getElementById('sogou').innerHTML='<span id="sogou"><center id="sogouIconselect" class="youyuantext"><a tabindex="3" href="javascript:sogousearch()">搜狗</a></center></span>';

document.getElementById('baidu').innerHTML='<center id="baiduIcon" class="youyuantext"><a tabindex="1" href="javascript:baidusearch()">百度</a></center>';
document.getElementById('bing').innerHTML='<center id="bingIcon" class="youyuantext"><a tabindex="2" href="javascript:bingsearch()">必应</a></center>';
}

function bingsearch() {
document.getElementById('searchbox').innerHTML='<form action="https://www.bing.com/search" target="_blank"> <input style="animation-fill-mode: forwards;" id="search" class="search" type="text" name="q" size="60" placeholder="搜索"/>';
document.getElementById('bing').innerHTML='<center id="bingIconselect" class="youyuantext"><a tabindex="2" href="javascript:bingsearch()">必应</a></center>';

document.getElementById('baidu').innerHTML='<center id="baiduIcon" class="youyuantext"><a tabindex="1" href="javascript:baidusearch()">百度</a></center>';
document.getElementById('sogou').innerHTML='<span id="sogou"><center id="sogouIcon" class="youyuantext"><a tabindex="3" href="javascript:sogousearch()">搜狗</a></center></span>';

}