<template>
  <div class="pasd">
    <div class="passCon">
      <h2>设置交易密码</h2>
      <p>输入六位数字密码</p>
      <div class="pay-password">
        <input type="password" maxlength="6" class="real-ipt">
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dasd',
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
    }
  }
}
</script>
<style lang="scss" scoped>
.pasd{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(246, 246, 246);
  .passCon{
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
      font-size: 0.4rem;
      color: #1a1a1a;
    }
    p{
      font-size: 0.3rem;
      color: #b9b9b9;
      padding-top: 0.4rem;
    }
    .pay-password{
      width: 6.9rem;
      height: 0.95rem;
      margin: .5rem.4rem auto;
      position: relative;
      .real-ipt {
        width:7.3rem;
        height: 0.95rem;
        line-height: 0.6rem;
        z-index: 1;
        display:block;
        overflow: hidden;
        border:none;
        outline:medium;
        background-color:rgb(246,246,246);
        background:url('../../static/images/passback.png') no-repeat bottom left;
        background-size:contain;
        font-size:1.5rem;
        text-indent:.3rem;
        letter-spacing:.305em
      }
     
    }
  }
}
</style>


