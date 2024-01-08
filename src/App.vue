<script setup>
import MagazaMenuComponents from "@/veri/MagazaMenuComponents.vue";
import BaslikBileseni from "@/bilesenler/BaslikBileseni.vue";
import MenuBileseni from "@/bilesenler/MenuBileseni.vue";
import IcerikBileseni from "@/bilesenler/IcerikBileseni.vue";
import AltBilgi from "@/bilesenler/AltBilgi.vue";
import {temaDukkaniKullan} from "@/dukkanlar/temaDukkani.js";
import {storeToRefs} from "pinia";
import Tema_secici from "@/bilesenler/ortak/tema_secici.vue";

const tema_dukkani=temaDukkaniKullan();
const {secili_tema}=storeToRefs(tema_dukkani);

</script>

<template>
  <div class="kapsayici":class="secili_tema">
<BaslikBileseni />
    <MenuBileseni />
    <IcerikBileseni/>
    <AltBilgi/><MagazaMenuComponents/>
    <Tema_secici/>
      </div>

</template>
<style scoped>
.tema_secici{
  position: absolute;
  top:0;
  right: 0;
}
</style>
