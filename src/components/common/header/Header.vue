<template>
  <div class="header_bg" v-model="image_path" :style="{backgroundImage: 'url(' + image_path + ')'}">
    <ul class="header_navigation">
      <li><a @click="toPage('tag')">Tags</a></li>
      <li><a @click="toPage('archive')">Archives</a></li>
      <li><a @click="toPage('about')">About</a></li>
      <li><a @click="toPage('')">Home</a></li>
    </ul>
    <div class="header_author">
      <h1>Angus
        <div>个人博客</div>
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // TODO: 动态绑定图片:根据点击的tag切换不同的背景图
        image_path: '/static/common/header/home_header.jpg',
      }
    },
    methods: {
      toPage (path) {
        if (path === 'archive') {
          this.$set(this, 'image_path', '/static/common/header/archive_header.jpg')
        } else if (path === 'about') {
          this.$set(this, 'image_path', '/static/common/header/about_header.jpg')
        } else if (path === 'tag') {
          this.$set(this, 'image_path', '/static/common/header/tag_header.jpg')
        } else {
          this.$set(this, 'image_path', '/static/common/header/home_header.jpg')
        }
        this.$router.push('/' + path)
      }
    }
  }

</script>

<style scoped>
  .header_bg {
    margin-top: -10%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    min-width: 100px;
    z-index: -10;
    zoom: 1;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    line-height: 2;
  }

  .header_author h1 {
    position: absolute;
    top: 45%;
    width: 100%;
    color: white;
    font-size: 80px;
    margin-top: 0;
    line-height: 1.1;
    font-weight: 700;
  }

  h1 div {
    font-size: 18px;
    margin-top: 20px;
  }

  .header_navigation li {
    margin-top: 10%;
    list-style: none;
    float: right;
    display: block;
  }

  .header_navigation li a {
    color: white;
    padding: 20px;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    font-weight: 800;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  .header_navigation li a:hover {
    color: rgba(255, 255, 255, .8);
  }
</style>
