<template>
  <div class="header_bg" v-model="image_path" :style="{backgroundImage: 'url(' + image_path + ')'}">
    <ul class="header_navigation">
      <li><a @click="toPage('tags')">Tags</a></li>
      <li><a @click="toPage('archive')">Archives</a></li>
      <li><a @click="toPage('about')">About</a></li>
      <li><a @click="toPage('')">Home</a></li>
    </ul>
    <div class="header_author">
      <h1>测试
        <div>二级标题</div>
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // TODO: 动态绑定图片:根据点击的tag切换不同的背景图
        image_path: '/static/common/header/home.jpg',
      }
    },
    methods: {
      toPage (path) {
        this.$router.push('/' + path)
      }
    },
    mounted () {
      let path = this.$route.path
      console.log(path)
      if (path === '/archive') {
        this.$set(this, 'image_path', '/static/common/header/archive.jpg')
      } else if (path === '/about') {
        this.$set(this, 'image_path', '/static/common/header/about.jpg')
      } else if (path === '/tags') {
        this.$set(this, 'image_path', '/static/common/header/tags.jpg')
      } else if (path === '') {
        this.$set(this, 'image_path', '/static/common/header/home.jpg')
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
  }

  .header_author h1 {
    position: absolute;
    top: 40%;
    width: 100%;
    color: white;
    font-size: 80px;
    font-weight: 700;
    margin-top: 4%;
  }

  h1 div {
    font-size: 18px;
    margin-top: 0.5%;
    line-height: 1.1;
    font-weight: 300;
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
