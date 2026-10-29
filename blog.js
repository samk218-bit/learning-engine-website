document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('blogSearch');
  const cards = Array.from(document.querySelectorAll('.blog-card'));
  const buttons = Array.from(document.querySelectorAll('[data-blog-filter]'));
  const empty = document.getElementById('blogEmptyState');
  let filter = 'all';
  const apply = () => {
    const term = (search?.value || '').trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const lang = card.dataset.language || 'en';
      const categories = (card.dataset.categories || '').split(' ');
      const matchesFilter = filter === 'all' || filter === lang || categories.includes(filter);
      const matchesSearch = (card.dataset.search || '').toLowerCase().includes(term);
      card.hidden = !(matchesFilter && matchesSearch);
      if (!card.hidden) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  };
  search?.addEventListener('input', apply);
  buttons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.blogFilter;
    buttons.forEach(item => item.classList.toggle('active', item === button));
    apply();
  }));
});
