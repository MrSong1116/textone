<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
(function (doc,win) {
    var docEl = doc.documentElement;
    var HT = document.getElementsByTagName('html')[0];
    var BO = document.getElementsByTagName('body')[0];
  
    //设备重置
    console.log(window.sessionStorage)
    var resizeEvt ='orientationchange' in window ? 'orientationchange':'resize',
        relalc=function(){
            //获取屏幕宽度
            var a = document.screenHeight
            var clientWidth=docEl.clientWidth;
            var screenHeight=window.screen.height;
            if(!clientWidth) return;
            
            docEl.style.fontSize=(clientWidth/7.5)+"px";
            HT.style.height=screenHeight+"px";
            BO.style.height=screenHeight+"px";
            console.log(BO.style.height)
            console.log(docEl.style.fontSize) 
        };
    if(!addEventListener) return;
    win.addEventListener(resizeEvt,relalc,false);
    doc.addEventListener("DOMContentLoaded",relalc,false);
    
  })(document,window);

export default {
  name: 'App'
}
</script>

<style>
*{    
   font-family:'苹方';
  margin:0;
  padding:0;
}
#app{
  height:100%;
}
table {
  border-collapse:collapse;    
  border-spacing:0;
}
.clear:after{
  content: '';
  display: block;
  clear: both;
}
.fl{
  float: left;
}
.fr{
  float: right
}
.point{
  cursor: pointer;
}
a{
  text-decoration: none;
  color: black
}
fieldset,img {    
  border:0;
}
ol,ul {    
  list-style:none;
}
sup {    
  vertical-align:text-top;
}
sub {    
  vertical-align:text-bottom;
}
header{
  position: relative;
  font-size: .35rem;
}
.title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
footer{
  background-color: #999;
  height: 1rem;
  line-height: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%
}
footer>div{
  float: left;
  font-size: .3rem;
}


</style>
