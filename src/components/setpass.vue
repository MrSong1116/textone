<template>
    <div>
         <article>
      <h2>
        设置交易密码
      </h2>
      <h3>
        输入6位数字密码
      </h3>
      <h4>{{}}</h4>
      <div class="sendstatus"></div>
      <div class="number">
      <form action="" method="POST">
        <ul class="gezi">
          <li></li>
          <li> </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <input type="text" maxlength="1"/>
        </ul>
      </form>
      </div>
    </article>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
     h2{
      font-size: .45rem;
      line-height: .45rem;
      text-align: center;
      margin-top: 1.1rem;
      font-weight: 500;
    }
    h3{
      height: 0.25rem;
      line-height: .25rem;
      font-size: .25rem;
      font-weight: 400;
      text-align: center;
      color:#999;
      margin-top: .8rem;
    }
    .number{
      width: 5.93rem;
      height: 0.9rem;
      position: relative;
      margin: 0 auto;
      margin-top: .9rem;
    }
    .gezi{
      width: 5.93rem;
      height: 100%;
      border:1px solid #ccc
    }
    .gezi li{
      width: .968rem;
      border-right:1px solid #ccc;
      height: 100%;
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
    input{
      border: none;
      display: block;
      outline: medium;
      width:100%;
      height: .88rem;
      text-align:center;
      font-size:.8rem;
    }
    .sendstatus{
        width:2.4rem;
        height:.6rem;
        margin:0 auto;
        background-color:#ccc
    }
</style>