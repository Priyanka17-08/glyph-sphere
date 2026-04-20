A high-performance interactive particle system built using Vanilla JavaScript and the HTML5 Canvas API. 

This project renders 10,000 particles that dynamically transition between a 3D sphere and user-defined text in real time, creating a smooth and visually engaging experience with zero external dependencies.

## 🎬 Overview

GlyphSphere is an interactive particle visualization that blends 3D motion with real-time user input. It begins as a dynamic spherical structure composed of thousands of particles and transitions seamlessly into text as the user types.

The system leverages a perspective projection model to simulate depth on a 2D canvas, creating a convincing 3D effect without relying on external graphics libraries. Particle motion is governed by smooth interpolation, enabling fluid transitions between states.

With added interactivity such as cursor-based repulsion and a modern glass-style interface, the project focuses on delivering both technical performance and visual elegance.

## 🚀 Features

| Feature | Description |
|--------|------------|
| 10,000 Particles | Renders a high-density particle system for smooth and detailed visuals |
| 3D Perspective Effect | Simulates depth using perspective projection on a 2D canvas |
| Sphere Formation | Uses Fibonacci distribution for evenly spaced particles in a spherical shape |
| Text Morphing | Particles transition smoothly from sphere into user-entered text |
| Real-Time Input | Updates particle positions dynamically as the user types |
| Mouse Interaction | Cursor repels nearby particles, adding interactive feedback |
| Smooth Animation | Uses requestAnimationFrame for fluid motion and rendering |
| Glassmorphism UI | Modern input field with blur and transparency effects |
| Responsive Canvas | Automatically adapts to screen size changes |
| Zero Dependencies | Built entirely with Vanilla JavaScript, no external libraries |

## How to start

## 📦 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No additional tools or installations required

---

### 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/glyph-sphere.git

2.Open directly in your browser


## 🎮 Usage & Controls

### ⌨️ Keyboard

| Action | Effect |
|--------|--------|
| Type in input box | Particles morph into the entered text |
| Clear input field | Particles return to the sphere formation |

---

### 🖱️ Mouse

| Action | Effect |
|--------|--------|
| Move cursor | Repels nearby particles away from the pointer |

---

### 💡 Tips

- Use short words (3–8 characters) for clearer text shapes  
- Move the cursor slowly for smoother interaction  
- Let the sphere settle before typing for best visual effect  


## 🌐 Browser Support

| Browser | Status |
|--------|--------|
| Chrome (latest) | ✅ Fully Supported |
| Edge (latest) | ✅ Fully Supported |
| Firefox (latest) | ✅ Fully Supported |
| Safari (latest) | ✅ Fully Supported |
| Mobile Chrome | ⚠️ Supported (may lag with 10K particles) |
| Mobile Safari | ⚠️ Supported (performance may vary) |
> ⚠️ Note: Performance depends on device capability.  
> For smoother experience on low-end or mobile devices, consider reducing the particle count.