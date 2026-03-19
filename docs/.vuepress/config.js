import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',

    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',
    }),

    bundler: viteBundler(),
})
