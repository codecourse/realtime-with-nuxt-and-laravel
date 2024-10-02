import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

export default defineNuxtPlugin(() => {
    window.Pusher = Pusher

    window.Echo = new Echo({
        broadcaster: 'reverb',
        key: 'kscaenynxvk85d6pm8kj',
        wsHost: 'realtime-nuxt-laravel.test',
        wsPort: 8080,
        cluster: 'mt1',
        forceTLS: false
    })
})