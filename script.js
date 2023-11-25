function changeBackgroundColor() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f' , '#fff' , '#cyan'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
