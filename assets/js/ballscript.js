document.addEventListener('DOMContentLoaded', () => {
    const ball = document.querySelector('.ball');
    const particlesContainer = document.getElementById('particles-container');
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let maxBallTravel = window.innerHeight - 60;
    let hasExploded = false;
    
    // Create particles (hidden initially)
    createParticles();

    function createParticles() {
        // Clear any existing particles
        particlesContainer.innerHTML = '';
        
        // Create 80 particles for a more dramatic explosion
        for (let i = 0; i < 80; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Randomize particle size for more realistic effect
            const size = 2 + Math.random() * 8;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Vary the orange shades
            const hue = 25 + Math.random() * 15; // Orange is around 30-40 in hue
            const lightness = 45 + Math.random() * 25;
            particle.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
            
            particle.style.opacity = '0';
            particlesContainer.appendChild(particle);
        }
    }

    function explodeBall() {
        // Hide the ball with transition
        ball.style.transition = 'opacity 0.3s ease-out';
        ball.style.opacity = '0';
        ball.classList.remove('pulse');
        
        // Get ball position for explosion center
        const ballRect = ball.getBoundingClientRect();
        const centerX = ballRect.left + ballRect.width / 2;
        const centerY = ballRect.top + ballRect.height / 2;
        
        // Get all particles
        const particles = document.querySelectorAll('.particle');
        
        // Make each particle explode in all directions
        particles.forEach((particle, index) => {
            // Stagger the explosions slightly for more natural effect
            const delay = Math.random() * 200;
            
            // Random angle for 360-degree explosion
            const angle = Math.random() * Math.PI * 2;
            
            // Random distance - some particles go further than others
            const distance = 50 + Math.random() * 250;
            
            // Calculate x and y based on angle and distance
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            // Random rotation
            const rotation = Math.random() * 720 - 360;
            
            // Set initial position at the ball's center
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            
            // Make visible
            particle.style.opacity = '1';
            
            // Trigger explosion animation with slower timing
            setTimeout(() => {
                // Slower transition - between 1.5 and 3 seconds
                const duration = 1.5 + Math.random() * 1.5;
                particle.style.transition = `transform ${duration}s cubic-bezier(0.1, 0.8, 0.2, 1), opacity ${duration}s ease-out`;
                
                // Add some gravity effect with translateY for some particles
                const gravity = Math.random() > 0.5 ? Math.random() * 100 : 0;
                particle.style.transform = `translate(${x}px, ${y + gravity}px) rotate(${rotation}deg)`;
                particle.style.opacity = '0';
            }, delay);
        });
        
        // Reset after animation completes (longer timeout for slower animation)
        setTimeout(() => {
            hasExploded = false;
            ball.style.transition = 'transform 0.1s ease-out, opacity 0.5s ease-out';
            ball.style.opacity = '1';
            createParticles();
        }, 4000); // Wait longer for the slower particles to finish
    }

    function updateBallPosition() {
        const scrollPercentage = window.scrollY / maxScroll;
        const ballPosition = scrollPercentage * maxBallTravel;
        
        // Check if we're approaching the bottom of the page
        if (scrollPercentage > 0.85 && scrollPercentage < 0.98 && !hasExploded) {
            // Add pulse effect as we approach the end
            ball.classList.add('pulse');
            // Set the custom property for the Y position to maintain scroll position during pulse
            ball.style.setProperty('--y-pos', `${ballPosition}px`);
        } else if (!hasExploded) {
            ball.classList.remove('pulse');
            ball.style.transform = `translateY(${ballPosition}px)`;
        }
        
        // Check if we're at the bottom of the page (with a small threshold)
        const isAtBottom = scrollPercentage > 0.98;
        
        // If at bottom and hasn't exploded yet, trigger explosion
        if (isAtBottom && !hasExploded) {
            hasExploded = true;
            explodeBall();
        }
    }

    // Initial position
    updateBallPosition();

    // Update on scroll
    window.addEventListener('scroll', updateBallPosition);
    
    // Update on resize
    window.addEventListener('resize', () => {
        maxScroll = document.body.scrollHeight - window.innerHeight;
        maxBallTravel = window.innerHeight - 60;
        updateBallPosition();
    });
});
