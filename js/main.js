(function() {
  'use strict';

  const transcriptToggle = document.getElementById('transcript-toggle');
  
  if (transcriptToggle) {
    transcriptToggle.addEventListener('click', function() {
      const content = document.getElementById('transcript-content');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle state
      this.setAttribute('aria-expanded', !isExpanded);
      content.setAttribute('aria-hidden', isExpanded);
      
      // Update button text
      const textSpan = this.querySelector('.toggle-text');
      if (textSpan) {
        textSpan.textContent = isExpanded ? 'Show Transcript' : 'Hide Transcript';
      }
      
      // Announce to screen readers
      announceToScreenReader(
        isExpanded ? 'Transcript hidden' : 'Transcript expanded'
      );
    });
  }

  // ============================================
  // TIMESTAMP NAVIGATION
  // Click timestamp to seek audio/video
  // ============================================
  const timestamps = document.querySelectorAll('.timestamp');
  const mediaPlayer = document.querySelector('audio, video');
  
  timestamps.forEach(function(timestamp) {
    timestamp.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (!mediaPlayer) return;
      
      // Parse time from ID (format: t-MM-SS or t-SS)
      const id = this.id;
      const timeParts = id.replace('t', '').split('-');
      let seconds = 0;
      
      if (timeParts.length === 2) {
        seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
      } else {
        seconds = parseInt(timeParts[0]);
      }
      
      mediaPlayer.currentTime = seconds;
      mediaPlayer.play();
      
      // Move focus to media player for screen readers
      mediaPlayer.focus();
      
      announceToScreenReader('Jumped to ' + this.textContent);
    });
  });

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  const menuToggle = document.querySelector('.mobile-menu-btn');
  const siteNav = document.querySelector('.site-nav');
  
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-open');
      
      // Toggle visibility
      if (!isExpanded) {
        siteNav.style.display = 'flex';
      } else {
        siteNav.style.display = '';
      }
      
      announceToScreenReader(
        isExpanded ? 'Menu closed' : 'Menu opened'
      );
    });
  }

  // ============================================
  // ANNOUNCE TO SCREEN READERS
  // ============================================
  function announceToScreenReader(message) {
    const announcer = document.getElementById('announcements');
    if (announcer) {
      announcer.textContent = message;
      // Clear after announcement
      setTimeout(function() {
        announcer.textContent = '';
      }, 1000);
    }
  }

  // ============================================
  // REDUCED MOTION CHECK
  // ============================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.body.classList.add('reduced-motion');
  }
  
  prefersReducedMotion.addEventListener('change', function(e) {
    if (e.matches) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  });

  // ============================================
  // KEYBOARD SHORTCUTS
  // ============================================
  document.addEventListener('keydown', function(e) {
    // Skip to main content with 'S' key (when not in input)
    if (e.key === 's' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      const skipLink = document.querySelector('.skip-nav');
      if (skipLink) {
        skipLink.focus();
      }
    }
  });

  // ============================================
  // LAZY LOADING FALLBACK
  // ============================================
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(function(img) {
      img.loading = 'eager';
    });
  }

  // ============================================
  // FOCUS MANAGEMENT FOR DYNAMIC CONTENT
  // ============================================
  // When transcript opens, move focus to first paragraph
  if (transcriptToggle) {
    transcriptToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        setTimeout(function() {
          const firstPara = document.querySelector('.transcript__text p');
          if (firstPara) {
            firstPara.setAttribute('tabindex', '-1');
            firstPara.focus();
          }
        }, 400);
      }
    });
  }

})()