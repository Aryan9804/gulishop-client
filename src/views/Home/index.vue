<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
export default {
  name: '',
  data () {
   return {

    }
  },
  methods:{

  },
  components: {
    ListContainer,
    TodayRecommend
  }
}
</script>

<style scoped>

</style>