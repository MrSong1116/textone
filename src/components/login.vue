<template>
    <div id="phone">
     <article>
      <img class="logo" src="../../static/images/shouji_03.png" alt="">
        <form actions='localhost:8080/writecode'>
          <div class="writenum">
            <div class="inputtit fl">
              {{address}}<div class="sanjiao"></div>
            </div>
            <input v-model="phonenum" type="tel" class="phonewriter" placeholder="请输入手机号">
          </div>
          <div class="checkcode">
              <input v-model='codenum' class="codewriter" type="text" placeholder="请输入手机验证码">
              <div v-show="!ifsend" @touchend.prevent='getcodenum' class="getcode">
                <div class="getcodemain">获取验证码</div>
              </div>
              <div v-show="ifsend" class="getcode">
                <div class="getcodemain">{{time}}秒后重新获取</div>
              </div>
          </div>
          <div class="writepass">
            <input type="password" placeholder="请输入密码">
          </div>
          <input @touchend.stop.prevent='login' class="makesure" type="button" value="立即注册">
        </form>
  </article>
    </div>
</template>

<script>
import bus from './bus.js'
export default {
    name:'phone',
    data(){
        return {
            address:"+86",
            phonenum:'',
            codenum:'',
            title:'绑定手机号并登陆',
            time:5,
            ifsend:false
        }
    },
    methods: {
      login(){
        if(this.phonenum){
          window.sessionStorage.setItem('iflogin',true)
          this.$http({
            method:'post',
            url:'https://hongbao.iwentdowntotheriver.club/v1/hongbao/login',
            header:{
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(
            
          )
           this.$router.push({
                path:'/hongbao/send',
                query:{
                 
                }
            })
        }
        },
      getcodenum(){
        this.ifsend=true;
          console.log(1)
        var number=5;
        var timer = setInterval(()=>{
         if(number>1){
          number--;
          this.time=number
          console.log(number)
          }
          else{
            this.ifsend=false;
            this.time=5;
            clearInterval(timer)
          }
        },1000) 
      },
      changetitle(){
        document.title=this.title;
        this.$http({
          method:'get',
          url:'https://hb.renrenmine.com/v1/hongbao/history',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'autherization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjowLCJ1c2VybmFtZSI6IiIsImF2YXRhciI6IiIsImV4cCI6MTU0Nzk4ODYyM30.FCj9BeX53lJ5xovN5FRkvyM2wnJQqcdZ44NBPt-QSLQ"
          },
          params:{
            type:"send",
            Autherization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjowLCJ1c2VybmFtZSI6IiIsImF2YXRhciI6IiIsImV4cCI6MTU0Nzk4ODYyM30.FCj9BeX53lJ5xovN5FRkvyM2wnJQqcdZ44NBPt-QSLQ"
          }
        }).then((result)=>{
          console.log(result.data)
          console.log(result.data.token)
           this.$http({
            headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'autherization': 'Bearer '+result.data.token
            },
            method:'get',
            url:'https://hb.renrenmine/v1/hongbao/history',
           
          });
        }).then((data)=>{
          console.log(data)
        })
      }
    },
    mounted () {
      this.changetitle()
  }

}
</script>


<style lang="scss" scoped>
   #phone{
      background: url('../../static/images/kuang_02.png') no-repeat center bottom;
      background-size:contain;
      background-color: rgb(246,246,246);
      width:100%;
      height:100%;
       article{
      font-size: .24rem;
      padding-top: 3.5rem;
      color:#1a1a1a;
      
      form>div{
      width: 5.5rem;
      height: 0.96rem;
      margin: 0 auto;
      margin-bottom: .28rem;
      border-bottom:1px solid #999;
      .phonewriter{
        width:3.8rem;
      }
       .inputtit{
      width: 1.4rem;
      text-align: center;
      position: relative;
      line-height: .98rem;
      font-size: .25rem;
      top:.05rem;
      .sanjiao{
      width: 0;
      height: 0;
      border: .09rem solid transparent;
      border-top: .12rem solid #999;
      border-bottom: .12rem solid transparent;
      position: absolute;
      top:.46rem;
      right:0
    }
    }
      input{
      height: .7rem;
      padding-top: .2rem;
      border: none;
      outline: medium;
      display: block;
      margin-top: 2px;
      width: 5.5rem;
      padding-left: .25rem;
      background-color: rgb(246,246,246);
    }
    }
    .checkcode{
      position: relative;
    }

    }
    }
    
   
    
   
    
    
    
    .writenum input{
      width:3.8rem
    }
    .getcode{
      position: absolute;
      top: 0;
      right: 0;
      width: 1.9rem;
      height: .96rem;
      z-index:999;
    }
    .getcodemain{
      background-color: #ffcc33;
      font-weight:300;
      display: block;
      color:#333;
      width: 1.8rem;
      height: 0.7rem;
      line-height: .7rem;
      text-align:center;
      border-radius: .08rem;
      border: none;
      margin: .18rem auto;
      outline: medium;
    }
    .makesure{
      width: 5.5rem;
      height: 1rem;
      background-color: #ffcc33;
      text-align: center;
      font-size: .35rem;
      color:#333;
      line-height: 1rem;
      border-radius: .08rem;
      margin: .68rem auto;
      display: block;
      padding: 0;
      border:none;
    }
    footer>div{
      width: 50%;
      height: 1rem;
      float: left;
      position: relative;
    }
  
    .footer-sanjiao{
      border: .25rem solid transparent;
      display: block;
      width: 0;
      height: 0;
      border-left-color: #666;
      margin-top: .21rem;
      position: absolute;
    }
    .lsanjiao{
      left:2.55rem;
      border-left-color: transparent;
      border-right-color: #666
    }
    .rsanjiao{
      right:2.55rem
    }
    .pic .getcodemain{
        background-color:#fff;
        border:1px solid #ffcc33
    }
    .logo{
      position:absolute;
      top:.6rem;
      height: 1.9rem;
      left:50%;
      transform: translateX(-50%)
    }

</style>