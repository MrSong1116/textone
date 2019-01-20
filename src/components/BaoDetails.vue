<template>
  <div class="BaoDetails">
    <component :is="oneComponent"></component>
  </div>
</template>
<script>
import NoBaoDetails from '@/components/NoBaoDetails'
import YesBaoDetails from '@/components/YesBaoDetails'
export default {
  name: 'BaoDetails',
  data() {
    return {
      oneComponent: '',
      title:'红包详情'
    }
  },
  mounted() {
    this.init();
    this.changetitle()
  },
  methods: {
    changetitle(){
      document.title=this.title
    },
    init() {
      let status = this.$route.params.status
      //  * 2:自己抢到了
      //  * 3:自己没抢到
      //  * 4:红包过期
      //  * 5:其他
      if (status == "snaged") this.oneComponent = 'YesBaoDetails'
      else if (status == "unsnaged") this.oneComponent = 'NoBaoDetails'
    },
  },
  components: {
    NoBaoDetails,
    YesBaoDetails,
  }
}
</script>
<style>
.BaoDetails {
  width: 100%;
  height: 100%;
}
</style>

