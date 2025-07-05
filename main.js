document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  let scrollTimeout;
  
  if (!footer) return; // extra safety
  
  window.addEventListener('scroll', () => {
    footer.classList.add('show-footer');
    
 
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      footer.classList.remove('show-footer');
    }, 7000);
  });
});
