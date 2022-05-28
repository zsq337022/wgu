
type wguobj = {
    browser: any
}
const wgu: wguobj = { browser: {} };
if (window) {
    Object.defineProperty(window, 'wgu', {
        value: wgu,
        writable: false,
        enumerable: true,
        configurable: true
    })
}
export default wgu;