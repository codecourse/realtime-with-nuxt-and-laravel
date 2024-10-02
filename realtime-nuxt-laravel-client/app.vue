<script setup lang="ts">
const strings = ref(<string[]>[])
const config = useRuntimeConfig()
const sanctumFetch = useSanctumClient()

onMounted(() => {
  window.Echo.channel('public')
      .listen('ExampleEvent', (e: ExampleEvent) => {
          strings.value.push(e.string)
      })
})

const sendRequest = () => {
  sanctumFetch('/api/realtime', {
    method: 'POST'
  })
}
</script>

<template>
  <Navigation />

  <div>
    <button v-on:click="sendRequest">Send request</button>

    <div>
      <div v-for="(string, index) in strings" :key="index">
        <div>{{ string }}</div>
      </div>
    </div>
  </div>
</template>
