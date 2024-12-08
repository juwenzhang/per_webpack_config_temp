<template>
  <div class="title_vue container_vue">{{ title }}</div>
  <div>author_name:{{ juwenzhang }}</div>
</template>

<script setup>
  const title = "我是标题"
</script>

<style scoped>
  .title_vue {
    color: white;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
  }

  .container_vue {
    width: 200px;
    height: 200px;
    background-color: #000;
  }
</style>