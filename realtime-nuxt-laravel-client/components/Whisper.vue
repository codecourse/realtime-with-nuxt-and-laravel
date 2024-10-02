<script setup lang="ts">
import { PusherPrivateChannel } from 'laravel-echo/src/channel'

let channel: PusherPrivateChannel

onMounted(() => {
  channel = window.Echo.private('private')

  channel.listenForWhisper('whisper', (e: any) => {
    console.log(e)
  })
})

const whisper = () => {
  channel.whisper('whisper', { some: 'data' })
}
</script>

<template>
<div>
  <button v-on:click="whisper">Whisper</button>
</div>
</template>

<style scoped>

</style>