class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text) {
        let div = document.createElement('div');
        div.textContent = text;
        document.body.appendChild(div);
        div.style.height = `${this.height}px`;
        div.style.width = `${this.width}px`;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = `${this.fontSize}px`;
        div.style.textAlign = this.textAlign;
    }
}

let txt = new Options(200, 300, 'green', 30, 'center');

txt.createDiv('Hello!');

