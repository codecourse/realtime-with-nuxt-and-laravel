<script setup lang="ts">
const strings = ref(<string[]>[])

onMounted(() => {
  window.Echo.channel('public')
      .listen('ExampleEvent', (e: ExampleEvent) => {
          strings.value.push(e.string)
      })
})

const sendRequest = () => {
  $fetch('http://realtime-nuxt-laravel.test/api/realtime', {
    method: 'POST'
  })
}
</script>

<template>
  <div>
    <button v-on:click="sendRequest">Send request</button>

    <div>
      <div v-for="(string, index) in strings" :key="index">
        <div>{{ string }}</div>
      </div>
    </div>
  </div>
</template>
