// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/partytown'],
    partytown: {
        forward: ["Cookiebot"],
        resolveUrl: "function (url, location, type) {\n" +
            "    if (type === 'script' && (url.href.startsWith('https://consent.cookiebot.com') || url.href.startsWith('https://consentcdn.cookiebot.com'))) {\n" +
            "      var proxyUrl = new URL('http://127.0.0.1:8788/api/cookiebotproxy');\n" +
            "      proxyUrl.searchParams.append('url', url.href);\n" +
            "      return proxyUrl;\n" +
            "    }\n" +
            "    return url;\n" +
            "  }"
    }, 
    app: {
        head: {
            script: [
                {src: "https://consent.cookiebot.com/uc.js", type: "text/partytown", async: true, id: "Cookiebot", "data-cbid": "xxxxx-xxxxx-xxxxx"}
            ]
        }
    }
})
