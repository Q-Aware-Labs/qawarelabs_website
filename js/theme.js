// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use default light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme or default
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('theme-toggle').checked = true;
    }
    
    // Setup the theme toggle switches (desktop and mobile)
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // Function to handle theme toggle
    function toggleTheme(isChecked) {
      if (isChecked) {
        // Switch to dark mode
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        // Sync both toggles
        themeToggle.checked = true;
        themeToggleMobile.checked = true;
      } else {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        // Sync both toggles
        themeToggle.checked = false;
        themeToggleMobile.checked = false;
      }
    }
    
    // Add event listeners to both toggles
    themeToggle.addEventListener('change', function() {
      toggleTheme(this.checked);
    });
    
    themeToggleMobile.addEventListener('change', function() {
      toggleTheme(this.checked);
    });
  
    // Loading animation (preserved from original)
    setTimeout(function() {
      animateLoading();
    }, 500);
  });
  
  // Loading animation function (preserved from original)
  function animateLoading() {
    const loadingTexts = [
      "ai-testing-framework",
      "bias-detection-module",
      "prompt-validation-tools",
      "adversarial-test-generator",
      "data-quality-analyzer"
    ];
    
    const loadingTextElement = document.getElementById('loading-text');
    const progressBar = document.getElementById('progress-bar');
    const loadingTerminal = document.getElementById('loading-terminal');
    
    let currentIndex = 0;
    let progress = 0;
    
    const textInterval = setInterval(function() {
      loadingTextElement.textContent = loadingTexts[currentIndex];
      currentIndex = (currentIndex + 1) % loadingTexts.length;
    }, 800);
    
    const progressInterval = setInterval(function() {
      progress += 5;
      progressBar.style.width = progress + '%';
      
      if (progress >= 100) {
        clearInterval(textInterval);
        clearInterval(progressInterval);
        
        setTimeout(function() {
          loadingTerminal.style.opacity = 0;
          setTimeout(function() {
            loadingTerminal.style.display = 'none';
          }, 500);
        }, 500);
      }
    }, 150);
  }
  
  // Mobile menu toggle (preserved from original)
  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  });