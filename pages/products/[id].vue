<template>
  <div>
    <p>product details for {{ id }}</p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus saepe ab, voluptates recusandae animi ratione minus blanditiis obcaecati laudantium id eius quae quos facere cumque illum eveniet dicta consectetur maxime?
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
});
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
