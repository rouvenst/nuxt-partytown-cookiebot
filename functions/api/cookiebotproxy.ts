export const onRequest: PagesFunction = async (context) => {
    const url = new URL(context.request.url).searchParams.get("url");
    if (url.startsWith('https://consent.cookiebot.com') || url.startsWith('https://consentcdn.cookiebot.com')) {
        const result = await fetch(url, {
            method: "GET"
        });
        return new Response(result.body, {headers: {"Content-Type": result.headers.get("Content-Type")}});
    }
}
