<template>
  <div class="hello">
<<<<<<<<< Temporary merge branch 1
    <h1>{{ msg }}</h1>
    hahaha

=========
    hahaha

     <!-- 分支 -->
     <span>
      分支
    </span>
>>>>>>>>> Temporary merge branch 2
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;

  display: flex;

  justify-content: space-between;


}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
