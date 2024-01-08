<script setup>

</script>

<template>
<div class="Menu">
  <a href="">Ana Menü</a>
  <a href="">Ürünler</a>
  <a href="">Markalar</a>
  <a href="">Satış İşlemleri</a>
  <a href="">Alış İşlemleri</a>
  <a href="">İletişim</a>
  <a href="">Hakkımızda</a>


</div>
</template>

<style scoped>
.Menu{

  background:var(--menu-arkaplan);
  color: var(--menu--yazirengi);
}
.Menu a{
  font-size: 20px;
  color: white;
  text-decoration: none;
  padding: 10px 40px;
}
.Menu{
  padding-top: 10px;
  padding-bottom: 9px;
  padding-left: 85px;
}
.Menu a:hover{
  background-color: var(--menu-arkaplan-uzeri);
  color: var(--menu--yazirengi-uzeri);
}
</style>