browser.menus.create({
    id: "view-archive",
    title: "View on Archive.org",
    contexts: ["link"]
})

browser.menus.onClicked.addListener((info) => {
    let url = `https://web.archive.org/web/*/${info.linkUrl}`
    browser.tabs.create({
        active: true,
        url
    })
        .then(() => {
            console.log(`redirected to ${url}`)
        })
        .catch((err) => {
            console.error(err)
        })
})