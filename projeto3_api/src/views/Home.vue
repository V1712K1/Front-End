<template>
<section>
  <div :style="image" class="image"></div>
</section>
</template>

<style>
    .image {
        height: 150px;
        background-repeat: no-repeat;
    }
</style>


<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      image: {backgroundImage: "url(../images/background_doge.jpg)"},
    };
  },
}
</script>
