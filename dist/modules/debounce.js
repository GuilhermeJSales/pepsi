export default function debounce(cb, wait = 20) {
    let h = 0;
    let callable = (...args) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait);
    };
    return callable;
}
//# sourceMappingURL=debounce.js.map