<template>
<div id='send'>
   <div v-show="logedin" class="person">
        <div class="circle">
            
        </div>
        <p class="total">
            共发放
            <span class="total-number">0</span>
            枚BHP
        </p>
    </div>
    <div class="choosers">
        <form>
        <div  @touchend.stop.prevent='choosetype' v-show="logedin" class="chooser">
            <span class="cname fl">代币</span>
            <span class="ctype fr">{{cointype}} ></span>
        </div>
        <div class="chooser">
            <span v-show="iflucky" class="cname fl">单个数量</span>
            <span v-show="!iflucky" class="cname fl">总数量</span>
            <div class="fr rel"><input v-model="datas.coinnum" type="number" placeholder="0.000"/><label class="unite">枚</label></div>
        </div>
        <div class="changetype-box clear">
            <p class="fl">持有{{cointype}}总量<span></span>{{allcoin}}</p>
            <p class="fr" @touchend.stop.prevent="changelucky">改为<span v-show="!iflucky" class="luckbag">拼手气红包</span><span v-show="iflucky" class="luckbag">普通红包</span></p>
        </div>
        <div class="chooser bagnum">
            <span class="cname fl">红包个数</span>  
            <div class="fr rel">
                <input id="writenum" v-model="datas.bagnum" type="number" placeholder="填写个数"><label class="unite" for="writenum">个</label>
            </div>
        </div>
        <div class="chooser gold">
            <input class="message" type="text" :value="message">
        </div>
        <input @click='sendmoney' class="setmoney" type="button" value="塞钱进红包">
    </form>
    </div>
    </div>
</template>


<script>
import bus from '../assets/bus';

export default {
    name: 'send',
    data() {
        return {
            logedin:true,
            iflucky:false,
            cointype:"BHP",
            allcoin:35.11,
            message:'红包一响，黄金万两',
            title:'发红包',
            datas:{
                totalval:'',
                type:this.iflucky,
                bagnum:''
            }
        }
    },
    methods: {
        changelucky(){
            this.iflucky=!this.iflucky;
            this.$http({
                method:'post',

            })
        },
         changetitle(){
            document.title=this.title
        },
        choosetype(){
            this.$router.push({
                path:'/hongbao/cointype',
                query:{
                    
                }
            })
        },
        sendmoney(){
            if(!/^\d+$/.test(writenum.value)){alert('红包数量为整数');return}
            bus.$emit("sendbag",this.datas)
            this.$router.push({
            path:'/hongbao/writecode',
            query:{
                  
            }
        })
        },
        gettype(){
            if(this.$route.query.type){
            this.cointype=this.$route.query.type
            }
        }
        },
        mounted() {
            this.gettype();
            this.changetitle()
        },
}
</script>

<style lang="scss" scoped>
        #send{
              background:rgba(246,246,246,1);
              color:#1a1a1a;
              height:100%;
              width:100%
          }
        .person{
              padding-top: 1rem;
          }
          .circle{
              width: 1.5rem;
              height: 1.5rem;
              border-radius: 50%;
              background: #eee;
              margin: 0 auto;
          }
          .total-number{
              font-size: .48rem;
              font-weight: bolder;
              color: #a90a0a;
          }
          .total{
              font-size: .26rem;
              color: #1a1a1a;
              text-align:center;
              margin-top: .20rem
          }
          .chooser:after{
              content: '';
              display: block;
              clear: both;
          }
          .choosers{
              padding: 0 .3rem;
          }
          .chooser.gold{
              padding-top:0;
              line-height: .5rem
          }
          .chooser{
              border-bottom: 1px solid #ccc;
              font-size: .34rem;
              padding-top: .7rem;
              height: .54rem;
              line-height: .24rem;
              color: #343434;
          }
          .chooser .rel{
              position: relative;
              top:-.30rem
          }
          .cname{
              font-weight: bolder;
          }
          .ctype{
              color: #ff3333;
              font-size: .28rem
          }
          .choosernum{
              color:#b9b9b9;
              font-weight: bolder
          }
          label{
              color:#999;
              margin-right: .15rem;
              font-weight: 350
          }
          .changetype-box{
              font-weight: 300;
              font-size: .22rem;
              line-height: .22rem;
              margin-top: .2rem;
              color:#999;
              position:relative;
          }
          .changetype-box .fr{
              position:absolute;
              right:0;
              width:2rem;
              text-align:right;
              padding-bottom:.2rem;
          }
          .bagnum{
              margin-top: .3rem;
          }
          .luckbag{
              font-size: .25rem;
              color:#ffcc33;
              margin-left: .05rem;
          }
          input{
              border: none; 
              height: .8rem;
              line-height: 1rem;
              outline: medium;
              width: 1.35rem;
              text-align: center;
              font-size: .3rem;
              background:rgba(246,246,246,1);
          }
          .unite{
              font-weight: 600;
          }
          .message{
              font-size: .3rem;
              color:#999;
              width: 100%;
              text-align: left;
          }
          .setmoney{
              width: 5.5rem;
              height: 1rem;
              line-height: 1rem;
              font-size: .36rem;
              text-align: center;
              margin: 0 auto;
              display: block;
              margin-top: 1rem;
              border-radius: .08rem;
              background-color: rgba(241,187,48,1)
          }
          footer{
            background: rgba(234,234,234,1)
          }
          footer>div{
              width: 50%;
              float: left;
           
          }
          .mine{
              text-align: center
          }
          .send{
          
              text-align: center
          }
          .send img{
            width: 0.35rem;
            height: 0.4rem;
            vertical-align: middle;
            margin-right:.02rem;
          }
          .mine img{
            width: .4rem;
            height: .4rem;
            vertical-align: middle;
            position: relative;
            top:-.03rem;
            margin-right:.02rem;
          }
    

</style>