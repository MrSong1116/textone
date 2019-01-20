<template>
    <div>
         <article>
      <h2>
        输入验证码
      </h2>
      <h3>
        我们已发送验证码到这个号码
      </h3>
      <h4>{{phonetit}} {{phonenum}}</h4>
      <button v-show="ifsend" class="sendstatus">
        验证码已发送...
      </button>
      <button v-show="!ifsend"  @touchend.stop.prevent='resendcode' class="sendstatus">
        再次发送验证码
      </button>
      <div class="number">
      <form action="" method="POST">
      <input v-on:input='oninput' v-model="val" class="password" type="text" maxlength="4"/>
        <ul class="gezi">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </form>

      <div class="reget" v-show="ifsend">{{time}}秒后重新获取</div>
      <div class="reget" v-show="!ifsend">请重新获取验证码</div>
      </div>
    </article>
    </div>
</template>

<script>
import bus from './bus.js'
export default {
    name:'writecode',
   data(){
     return {
       phonetit:44,
       phonenum:123456,
       ifsend:true,
       time:5,
       title:'设置交易密码',
       val:''
     }
   },
   methods: {
     regetcod(){
       var num=5;
       var timer = setInterval(()=>{
         if(num>1){
          num--;
          this.time=num
          console.log(num)
          }
          else{
            this.ifsend=false;
            this.time=5;
            clearInterval(timer)
          }
          
       },1000) 
     },
     oninput(){ 
       if(this.val.length==4){
         window.sessionStorage.removeItem('iflogin');
         this.$http({
           method:'post',
           url:'https://hongbao.iwentdowntotheriver.club/v1/hongbao',
           headers: {'Content-Type':'application/x-www-form-urlencoded'}
           
         }).then((result)=>{
           console.log(result)
           this.$router.push({
           path:'/hongbao/BaoDetails/snaged'
         })
         })
         
       }
     },
     resendcode(){
       this.ifsend=true;
       this.regetcod()
     },
     changetitle(){
        document.title=this.title
      },
   },
   mounted() {
     this.regetcod();
     this.changetitle()
   },
}
</script>

<style lang="scss" scoped>
     h2{
      font-size: .4rem;
      font-family:'苹方';
      color:#1a1a1a;
      line-height: .4rem;
      text-align: center;
      padding-top: 1.5rem;
      font-weight: 500;
    }
    h3{
      line-height: .3rem;
      font-size: .3rem;
      font-weight: 400;
      text-align: center;
      color:#b9b9b9;
      margin-top: .5rem;
    }
    h4{
      font-weight:400;
      margin:.5rem 0;
      font-size:.34rem;
      line-height:.34rem;
      text-align: center;
      color:#f2ba31
    }
    .number{
      width: 5.5rem;
      height: 1rem;
      position: relative;
      margin: 0 auto;
      margin-top:.2rem
    }
    .gezi{
      width: 5.5rem;
      height: 1px;
      position:absolute;
      bottom:0;
    }
    .gezi li{
      width: 1.08rem;
      margin:0 .14rem;
      background:#ccc; 
      height: 1px;
      float: left;
    }
    .gezi li:last-of-type{
      border: none
    }
    form{
      width:100%;
      height: 100%;
      position:relative;
    }
    .password{
      border: none;
      display: block;
      outline: medium;
      background-color:transparent;
      width:6rem;
      height: 100%;
      font-size:.8rem;
      letter-spacing:.88rem;
      text-indent:.5rem
    }
    .sendstatus{
        width:2rem;
        height:.5rem;
        margin:0 auto;
        font-size:.24rem;
        color:#fff;
        background-color:rgb(241,187,48);
        border-radius:.1rem;
        line-height:.5rem;
        text-align:center;
        display:block;
        border:none;
        outline:medium
    }
    .reget{
      text-align:center;
      line-height:.3rem;
      font-size:.3rem;
      padding-bottom:.2rem;
      color:#b9b9b9;
      margin-top:1rem
    }
</style>