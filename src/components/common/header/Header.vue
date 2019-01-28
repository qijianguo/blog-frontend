<template>
  <div class="header_bg">
    <ul class="header_navigation">
      <li>HOME</li>
      <li>ABOUT</li>
      <li>ARCHIVES</li>
      <li>TAGS</li>
    </ul>
    <div class="header_author">
      <h1>Angus
        <div>个人博客</div>
      </h1>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .header_bg {
    margin-top: -10%;
    background-image: url('/static/common/header/home_header.jpg');
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
    line-height: 1.5;
  }

  .header_author {
    position: absolute;
    top: 45%;
    width: 100%;
    height: auto;
    color: white;
    font-size: 36px;
  }
  h1 div {
    font-size: 18px;
  }
  .header_navigation {
    margin-top: 10%;
    list-style:none;
    float: left;
    border:1px #ccc solid;
    display:inline;
  }
</style>
