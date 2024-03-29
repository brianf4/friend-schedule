const { button, div, pre } = van.tags

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Run = ({ sleepMs }) => {
    const steps = van.state(0)
        ; (async () => { for (; steps.val < 40; ++steps.val) await sleep(sleepMs) })()
    return pre(() => `${" ".repeat(40 - steps.val)}🚐💨Hello VanJS!${"_".repeat(steps.val)}`)
}



const Hello = () => {
    const dom = div()
    return div(
        dom,
        button({ onclick: () => van.add(dom, Run({ sleepMs: 2000 })) }, "Hello 🐌"),
        button({ onclick: () => van.add(dom, Run({ sleepMs: 500 })) }, "Hello 🐢"),
        button({ onclick: () => van.add(dom, Run({ sleepMs: 100 })) }, "Hello 🚶‍♂️"),
        button({ onclick: () => van.add(dom, Run({ sleepMs: 10 })) }, "Hello 🏎️"),

    )
}

const myComp = () => {
    const firstName = van.state('aaaaabrian');

    return div(
        firstName,
        button({ onclick: () => { firstName.val = 'fuentes'}}, "clickme!")
    )
}

van.add(document.body, Hello())
van.add(mainContainer, myComp());