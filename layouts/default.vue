<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <!-- output the page content -->
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// @import 'styles/main.scss';
//
</style>
