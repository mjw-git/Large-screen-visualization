<template>
  <div class="home">
   <Header/>
   <Main/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header'
import Main from '@/components/main'
export default {
  components: {
    Header,Main
  },
}
</script>
