export function throttle(fn, wait) {
    let lastTime = 0
    return function (...args) {
        const now = new Date().getTime()
        if (now - lastTime >= wait) {
            fn.apply(this, args)
            lastTime = now
        }
    }
}
