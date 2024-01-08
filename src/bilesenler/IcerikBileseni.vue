<script >
import SolIcerik from "@/bilesenler/AltBilesenler/SolIcerik.vue";
import SagIcerik from "@/bilesenler/AltBilesenler/SagIcerik.vue";
export default {
  components:{
    SolIcerik,SagIcerik
  }
}
</script>

<template >
<div class="icerik">
  <router-view></router-view>
  <SagIcerik/>
</div>
</template>

<style scoped>
.icerik{
  display: flex;
  flex-direction: row;
  min-height: 430px;
}
</style>