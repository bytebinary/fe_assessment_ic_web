const filtered = () => {
    const btnFilter = document.querySelectorAll('.btn-filter');
    const portfolio = document.querySelectorAll('.portfolio');
  
    for (const btn of btnFilter) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        for (const btn of btnFilter) {
          btn.classList.remove('active')
        }
        btn.classList.add('active')
  
        const filter = e.target.dataset.filter;
        portfolio.forEach((work) => {
          filter === 'all'
            ? (work.style.display = 'block')
            : work.dataset.filter === filter
            ? (work.style.display = 'block')
            : (work.style.display = 'none');
        });
      });
    }
}
export default filtered