addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    if (!cursor) {
        console.log("no cursor")
        return;
    }
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
})

export const initCursor = () => {
    const cursor = document.getElementById('cursor');
    cursor.style.display = "block";
}