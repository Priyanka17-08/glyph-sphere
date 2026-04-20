const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let W, H;

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const PARTICLE_COUNT = 10000;
const particles = [];

let mouse = { x: 0, y: 0 };

document.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// ===== PARTICLE CLASS =====
class Particle {
    constructor() {
        this.x = this.y = this.z = 0;
        this.tx = this.ty = this.tz = 0;
    }

    update() {
        this.x += (this.tx - this.x) * 0.08;
        this.y += (this.ty - this.y) * 0.08;
        this.z += (this.tz - this.z) * 0.08;

        // mouse repulsion
        let dx = this.x - (mouse.x - W / 2);
        let dy = this.y - (mouse.y - H / 2);
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
            this.x += dx * 0.05;
            this.y += dy * 0.05;
        }
    }

    draw() {
        let scale = 500 / (500 + this.z);
        let x2d = this.x * scale + W / 2;
        let y2d = this.y * scale + H / 2;

        ctx.fillRect(x2d, y2d, 1.5, 1.5);
    }
}

// ===== INIT =====
for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
}

// ===== FIBONACCI SPHERE =====
function generateSphere() {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    particles.forEach((p, i) => {
        let y = 1 - (i / (PARTICLE_COUNT - 1)) * 2;
        let radius = Math.sqrt(1 - y * y);

        let theta = goldenAngle * i;

        p.tx = Math.cos(theta) * radius * 200;
        p.ty = y * 200;
        p.tz = Math.sin(theta) * radius * 200;
    });
}

// ===== TEXT =====
function generateText(text) {
    let tempCanvas = document.createElement("canvas");
    let tctx = tempCanvas.getContext("2d");

    tempCanvas.width = 800;
    tempCanvas.height = 300;

    tctx.fillStyle = "white";
    tctx.font = "bold 120px Arial";

    // 🔥 CENTER ALIGN FIX
    tctx.textAlign = "center";
    tctx.textBaseline = "middle";

    // draw text in exact center
    tctx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);

    let data = tctx.getImageData(0, 0, 800, 300).data;

    let points = [];

    for (let y = 0; y < 300; y += 4) {
        for (let x = 0; x < 800; x += 4) {
            let i = (y * 800 + x) * 4;
            if (data[i + 3] > 128) {
                points.push({
                    x: x - 400,
                    y: y - 150
                });
            }
        }
    }

    particles.forEach((p, i) => {
        let point = points[i % points.length];
        p.tx = point.x;
        p.ty = point.y;
        p.tz = 0;
    });
}

  
// ===== ANIMATION =====
function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "white";

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
  
}

// ===== INPUT =====
const input = document.getElementById("inputBox");

input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        generateSphere();
    } else {
        generateText(input.value);
    }
});

// ===== START =====
generateSphere();
animate();