
export function rand(min, max) {
    return (Math.random() * (max - min)) + min;
}

class Particle {
    #position = {};
    #r = 1;
    #velocity = {};
    static #TWO_PI = Math.PI * 2;
    static #CONNECTION_DIST = 100;

    constructor(x, y) {
        this.#position = { x, y };
        this.#velocity = {
            x: 2*rand(-1, 1), y: 2*rand(-1, 1)
        }
    }

    get position() {
        const { x, y } = this.#position;
        return { x, y };
    }

    update(dt = 0.1) {
        this.#position.x += this.#velocity.x * dt;
        this.#position.y += this.#velocity.y;
    }
    drawDot(ctx) {
        const { x, y } = this.#position;
        ctx.fillStyle = "#FFF";
        ctx.beginPath();
        ctx.arc(x, y, this.#r, 0, Particle.#TWO_PI);
        ctx.fill();
    }
    connection(ctx, p2) {
        const { x, y } = this.#position;
        const { x2 = x, y2 = y } = this.#position;

        const dist = Math.hypot(x - x2, y - y2);
    }
}

export default Particle;