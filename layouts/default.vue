<template>
  <div>
    <header class="">
      <v-card elevation="0">
        <v-toolbar flat>
          <v-toolbar-title>
            <v-img class="mpLogo" src="/mp/doctorme_logo.svg"></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <ul>
            <li color="primaryDark"><a @click="scrollToHref('banner')"> 首頁</a></li>
            <li color="primaryDark"><a @click="scrollToHref('product')"> 功能介紹</a></li>
            <li color="primaryDark"><a @click="scrollToHref('price')"> 價格方案</a></li>
            <li color="primaryDark"><a @click="scrollToHref('contact')"> 聯絡我們</a></li>
            <li><v-btn class="applyBtn" elevation="0">立即免費試用</v-btn></li>
          </ul>
          <v-btn elevation="0" class="mobileBtn" @click="expand = !expand">
            <v-icon class="material-icons-round"> menu </v-icon>
          </v-btn>
          <v-expand-transition>
            <v-card v-show="expand" class="mobileContenet">
              <ul>
                <li color="primaryDark"><a @click="scrollToHref('banner')"> 首頁</a></li>
                <li color="primaryDark"><a @click="scrollToHref('product')"> 功能介紹</a></li>
                <li color="primaryDark"><a @click="scrollToHref('price')"> 價格方案</a></li>
                <li color="primaryDark"><a @click="scrollToHref('contact')"> 聯絡我們</a></li>
                <li><v-btn class="applyBtn" elevation="0">立即免費試用</v-btn></li>
              </ul>
            </v-card>
          </v-expand-transition>
        </v-toolbar>
      </v-card>
    </header>

    <!-- output the page content -->
    <div class="">
      <slot />

      <v-btn :class="{ hide: scrollPosition }" class="gotoTopBtn" @click="scrollToTop" dark fixed right color="#3d3d3d" icon="mdi-arrow-up"> </v-btn>
    </div>
    <footer>
      <div class="footerInfo">
        <div class="">
          <img src="/mp/hywebLogo.png" alt="" />
        </div>
        <ul>
          <li>總公司：新竹縣竹北市台元一街8號5樓之6 / TEL：03-5601296</li>
          <li>台北分公司：台北市重慶南路二段51號5樓 / TEL：02-2395-6966</li>
          <li>台中分公司：台中市西屯區臺灣大道三段658號6樓A1 / TEL：04-2706-3968</li>
          <li>高雄分公司：高雄市新興區中正三路55號26樓之5 / TEL：07-2223606</li>
        </ul>
      </div>
      <div><p>Copyright© 2023 Hyweb Technology Inc. All Rights Reserved.</p></div>
    </footer>
    <!-- 消失時增加 className hide  -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import 'styles/main.scss';
//
</style>
