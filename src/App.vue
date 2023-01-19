<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <n-config-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <router-view/>
        </n-dialog-provider>
      </n-notification-provider>

    </n-message-provider>
  </n-config-provider>
</template>
<script>

import { darkTheme } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    darkTheme () {
      return darkTheme
    }
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
