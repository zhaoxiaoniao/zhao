<template>
  <div class="about">
    <div class="about-title">
      <img
        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1588933302&di=d72e09151582ad1bd218631c250b05fa&src=http://hbimg.b0.upaiyun.com/61a388f9aca3c61e0c081b1cb4f1d7ac51c990cec2f4-ApOpru_fw658"
        alt=""
      />
    </div>
    <div class="bigbox">
      <ul></ul>
      <ul></ul>
      <ul></ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "about"
};
</script>
<style>
.about {
  width: 100%;
  height: 500px;
}
.about-title img {
  height: 300px;
  width: 100%;
}
.bigbox {
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: red; */
}
.bigbox ul {
  display: inline-block;

  width: 32%;
  height: 200px;

  background-color: yellow;
}
</style>
