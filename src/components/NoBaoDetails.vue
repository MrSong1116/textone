<template>
  <div class="NoBaoDetails">
    <!-- <div class="bgi"></div> -->
    <div class="header">
    </div>
    <div class="section">
      <div class="content">
        <div class="top">
          <dl>
           <dt></dt>
           <dd>昵称红包</dd>
          </dl>
          <p>红包一响，黄金万两</p>
          <!-- <span><em>11.6587</em>BHP</span>
          <em>≈ 0.735 BTC</em>
          <em>≈ 0.735 BTC</em>
          <button>绑定手机号可提取  <i>去绑定</i></button> -->
          <h4>已领取1/3</h4>
        </div>
        
        <div class="list">
           <ul>
             <li>
               <dl>
                 <dt></dt>
                 <dd>
                   <h6>昵称1</h6>
                   <i>13:43:19</i>
                 </dd>
               </dl>
               <strong>
                 <h6>11.6857</h6>
                 <em>≈¥0.735</em>
               </strong>
             </li>
             <li>
              <dl>
                <dt></dt>
                <dd>
                  <h6>昵称1</h6>
                  <i>13:43:19</i>
                </dd>
              </dl>
              <strong>
                <h6>11.6857</h6>
                <em>≈¥0.735</em>
              </strong>
            </li>
            <li>
              <dl>
                <dt></dt>
                <dd>
                  <h6>昵称1</h6>
                  <i>13:43:19</i>
                </dd>
              </dl>
              <strong>
                <h6>11.6857</h6>
                <em>≈¥0.735</em>
              </strong>
            </li>
            <li>
              <dl>
                <dt></dt>
                <dd>
                  <h6>昵称1</h6>
                  <i>13:43:19</i>
                </dd>
              </dl>
              <strong>
                <h6>11.6857</h6>
                <em>≈¥0.735</em>
              </strong>
            </li>
            <li>
              <dl>
                <dt></dt>
                <dd>
                  <h6>昵称1</h6>
                  <i>13:43:19</i>
                </dd>
              </dl>
              <strong>
                <h6>11.6857</h6>
                <em>≈¥0.735</em>
              </strong>
            </li>
            <li>
              <dl>
                <dt></dt>
                <dd>
                  <h6>昵称1</h6>
                  <i>13:43:19</i>
                </dd>
              </dl>
              <strong>
                <h6>11.6857</h6>
                <em>≈¥0.735</em>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <div @click='sendbagtoo' class="con">
        <h4>我也要发红包</h4>
        <img src="../assets/imgs/hongbao.png" alt="">
      </div>
    </div>
    <div class="fenxiang" @click="popBlock">
      <img src="../assets/imgs/enjoy_03.png" alt="">
    </div>
    <div v-show="popShow" class="pop">
        <div class="popCon">
          <p>戳到这里可以分</p>
          <p>享到好友或朋友圈</p>
          <span @click="popHide">知道啦</span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NoBaoDetails',
  data() {
    return {
      popShow: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let windowHeight = $(window).height()
      let sectionTopSpace = $('.section').offset().top
      let topHeight = $('.content .top').height()
      $('.content .list > ul').css({
        'height': windowHeight - sectionTopSpace - topHeight + 'px'
      })
    },
    popHide() {
      this.popShow = false;
    },
    popBlock() {
      this.popShow = true;
    },
    sendbagtoo(){
      if(window.sessionStorage.getItem('iflogin')){
        this.$router.push({
          path:'/hongbao/send'
        })
      }else{
      this.$router.push({
            path:'/hongbao/login',
            query:{
                  
            }
        }
        )
        }
    }
  },
}
</script>
<style lang="scss" scoped>
.NoBaoDetails {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: rgb(246, 246, 256);
  // .bgi {
  //   position: absolute;
  //   bottom: 0;
  //   left: 50%;
  //   transform: translate(-50%, 55%);
  //   width: 150%;
  //   height: 200%;
  //   background-color: rgb(230, 172, 31);
  //   border-radius: 40%;
  //   z-index: -1;
  // }
  .section {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    margin-top: 0.2rem;
    // background-color: rgb(253, 254, 213);
    .content {
      min-width: 6.89rem;
      height: 100%;
      .top {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        dl {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          padding-top: 0.25rem;
          dt {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            background: skyblue;
          }
          dd {
            font-size: 0.3rem;
            padding: 0.25em 0 0.3rem 0;
            color: #1a1a1a;
          }
        }
        p {
          color: #f2ba31;
          font-size: 0.28rem;
          padding-bottom: 0.6rem;
        }
        // span {
        //   padding: 0.3rem 0;
        //   font-size: 0.28rem;
        //   em {
        //     font-style: normal;
        //     font-size: 0.48rem;
        //   }
        // }
        // em {
        //   color: #666666;
        //   font-size: 0.2rem;
        //   padding-bottom: 0.2rem;
        // }
        // button {
        //   // width: 3rem;
        //   height: 0.6rem;
        //   background: #ffffff;
        //   padding: 0.15rem;
        //   border-radius: 0.15rem;
        //   font-size: 0.22rem;
        //   color: #999999;
        //   outline: none;
        //   border: none;
        //   &:active {
        //     outline: none;
        //   }
        //   i {
        //     color: #ff3333;
        //     font-style: normal;
        //   }
        // }
        h4 {
          width: 100%;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.28rem;
          color: #999999;
          border-bottom: 1px solid #eaeaea;
          padding-left: 0.3rem;
          font-weight: normal;
          // padding-bottom: 0.2rem;
          background: #eeeeee;
        }
      }
      .list {
        padding: 0 0.3rem;
        ul {
          overflow: auto;
          height: 8rem;
          box-sizing: border-box;
          padding-bottom: 5rem;
          -webkit-overflow-scrolling: touch;
          li {
            width: 100%;
            height: 1.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eaeaea;
            dl {
              display: flex;
              justify-content: space-between;
              align-items: center;
              dt {
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background: skyblue;
              }
              dd {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                padding-left: 0.3rem;
                h6 {
                  font-size: 0.3rem;
                  color: #1a1a1a;
                  font-weight: normal;
                }
                i {
                  font-size: 0.22rem;
                  color: #b9b9b9;
                  font-style: normal;
                  padding-top: 0.15rem;
                }
              }
            }
            strong {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
              h6 {
                font-size: 0.3rem;
                color: #1a1a1a;
                font-weight: normal;
              }
              em {
                font-size: 0.22rem;
                color: #b9b9b9;
                font-style: normal;
                padding-top: 0.15rem;
              }
            }
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    background-image: url(../assets/imgs/woyaofahongbao_02.png);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
    padding-bottom: 0.15rem;
    .con {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 0.1rem;
      h4 {
        font-size: 0.32rem;
        color: #ffffff;
        font-weight: lighter;
      }
      img {
        height: 0.48rem;
        margin-left: 0.18rem;
        width: 0.48rem;
        flex: none;
      }
    }
  }
  .pop {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(../assets/imgs/wawa.png) no-repeat;
    background-size: contain;
    // background-position: bottom center;
    .popCon{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: fixed;
      right: 15%;
      top: 45%;
      p{
        color: #ffffff;
        font-size: 0.28rem;
        padding-top: 0.2rem;
        font-weight: 300;
      }
      span{
        padding: 0.1rem 0.5rem;
        color: #ffffff;
        font-size: 0.3rem;
        border: 2px dashed #ffffff;
        border-radius: 0.1rem;
        margin-top: 0.3rem;
        cursor: pointer;
        font-weight: 300;
      }
    }
  }
  .fenxiang{
    position: fixed;
    right: 6%;
    bottom: 10%;
    img{
      width: 1rem;
      height: 1rem;
    }
  }
}

</style>


