<template>
    <div id="wrap">
    <article>
      <ul class="cointype">
        <li v-for="(item, index) in cointype" :key="index" @touchend="choosetype(index)"><div class="circles fl"><img :src='item.address' alt=""></div>{{item.name}}</li>
      </ul>
    </article>
    </div>
</template>


<script>
import bus from '../assets/bus';
export default {
    name:'cointype',
    data() {
        return {
            cointype:[
                {name:'BHP',address:'../static/images/bhp_03.png'},
                {name:'BCNY',address:'../static/images/btc_11.png'},
                {name:'BTC',address:'../static/images/bhp_03.png'} 
            ],
            title:'选择红包代币'
        }
    },
    methods: {
        changetitle(){
            document.title=this.title
        },
        choosetype(index){
              this.$router.push({
                path:'/hongbao/send',
                query:{
                  type:this.cointype[index].name
                }
            })
        }
    },
    mounted(){
        this.changetitle()
    }
}
</script>

<style lang="scss" scoped>
    #app{
        width:100%;
        height:100%;
    }
    #wrap{
        width:100%;
        height:100%;
    }
    article{
      width: 100%;
      height: 100%;
      padding-top:.3rem;
      background-color: rgb(246,246,246);
    }
    .cointype li{
      background-color: #fff;
      border-bottom: 1px solid rgb(236,236,236);
      color: #1a1a1a;
      font-family:Helvetica;
      font-size: .36rem;
      font-weight: normal;
      height: 1.2rem;
      line-height: 1.2rem;
      padding-left: .3rem;
    }
    .cointype li:last-of-type{
        border:none;
    }
    .circles{
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 50%;
   
      margin-top: .2rem;
      margin-right: .3rem;
    }
    .circles img{
        height:.6rem;
        position:relative;
        top:-.05rem
    }
</style>