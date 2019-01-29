<template>
  <div class="home">
      <header-view></header-view>
      <article-view></article-view>
      <article-view></article-view>
  </div>
</template>

<script>
import headerView from "../../components/common/header/Header.vue"
import articleView from "../../components/article/Article.vue"

export default {
  components: {
    headerView,
    articleView
  }
}
</script>
