<template>
  <div>
    <!-- Search<br/>
    params: {{$route.params.keyword}}--------{{keyword}}<br/>
    query: {{$route.query.keyword1}} -->
    <TypeNav/>
  </div>
</template>

<script>
export default {
  name: '',
  // 接收Header组件传递的params参数
  props: ['keyword'],
  data () {
   return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>