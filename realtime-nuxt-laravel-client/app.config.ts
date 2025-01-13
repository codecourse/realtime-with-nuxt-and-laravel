// https://nuxt.com/docs/api/configuration/nuxt-config
import type { FetchContext } from 'ofetch'

export default defineAppConfig({
    sanctum: {
        interceptors: {
            onRequest: async (app: NuxtApp, ctx: FetchContext) => {
                if (import.meta.client) {
                    ctx.options.headers['X-Socket-Id'] = window.Echo.socketId()
                }
            }
        }
    },
})