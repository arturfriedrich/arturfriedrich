<script>
import { reactive } from 'vue'

export default {
  name: 'App',
  components: {  },
  data() {
    const initData = reactive({

    })

    return {
      initData,
    }
  },
  computed: {

  },
  watch: {

  },
}
</script>

<template>
  <RouterView :initData="initData"/>
</template>

<style>

</style>