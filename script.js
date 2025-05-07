document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
  project.addEventListener('mouseleave', () => {
    project.style.boxShadow = 'none';
  });
});
