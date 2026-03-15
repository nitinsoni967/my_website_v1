// 1. Initialize Smooth Scroll (Lenis)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 2. GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // --- NAVBAR SHRINK LOGIC ---
        // When leaving the Hero section, shrink the navbar into a pill
        const navTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "bottom 20%",
                end: "+=150",
                scrub: 1,
            }
        });

        // Shrink the container
        navTl.to("#navbar", {
            width: "280px",
            padding: "8px 16px",
            backgroundColor: "rgba(255, 255, 255, 0.98)",
        })
        // Hide the links and button
        .to(".nav-center, .nav-right", {
            opacity: 0,
            display: "none",
            duration: 0.1
        }, 0)
        // Show the profile picture in the remaining pill
        .to("#nav-pic", {
            display: "block",
            opacity: 1,
            duration: 0.2
        }, 0)
        // Slide up the Speak Widget from the bottom
        .to("#speak-widget", {
            bottom: "32px",
            ease: "back.out(1.5)"
        }, 0);


        // --- SCROLL REVEAL ANIMATIONS ---
        // Grab all elements with the 'fade-up' class and animate them when scrolled into view
        gsap.utils.toArray('.fade-up').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });