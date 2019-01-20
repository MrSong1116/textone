<template>
  <div class="wrapbox">
    <div class="header"></div>
    <div class="section">
    <div class="redbox">
      <div class="packetCont">
         <dl>
          <dt></dt>
          <dd>人名</dd>
         </dl>
         <p>红包一响，黄金万两</p>
        <button @click="godetails">领取详情 ></button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      title:"红包",
      typenum:''
    }
  },
  mounted() {
    this.changetitle()
  },
  methods: {
    changetitle(){
      document.title=this.title
    },
     godetails() {
       if(this.title){this.typenum="snaged"}else{this.typenum="unsnaged"};
       this.$http({
         method:'post',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
         
         url:'https://www.cnblogs.com/beppezhang/p/5824986.html'
       }).then((result)=>{
         console.log(result)
       })
       this.$router.push({
         name: 'BaoDetails',
         params: {
            status: this.typenum
          }
       })
     }
  }
}
</script>
<style lang="scss" scoped>
.wrapbox {
  width: 100%;
  height: 100%;
  background: url(../assets/imgs/kuang_02.png) no-repeat;
  background-size: contain;
  background-position: bottom center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .section {
    .redbox {
      width: 5.87rem;
      height: 7rem;
      background: url(../assets/imgs/hongbao_03.png) no-repeat;
      background-size: contain;
      background-position: center;
      margin-top: 2rem;
      .packetCont {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 3.5em;
        dl {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          dt {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #ffffff;
          }
          dd {
            font-size: 0.32rem;
            color: #ffffff;
            font-weight: normal;
            padding-top: 0.25rem;
            font-weight: 300;
          }
        }
        p {
          font-size: 0.32rem;
          color: #ffffff;
          padding: 0.25rem 0 0.55rem 0;
          font-weight: 300;
        }
        button {
          background-color: transparent;
          border: none;
          font-size: 0.22rem;
          color: #ffcccc;
        }
      }
    }
  }
}

</style>

