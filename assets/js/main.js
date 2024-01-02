const titles = document.querySelectorAll('.page__title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        titles.forEach(t => {
            t.classList.remove('page-active');
        });

        title.classList.add('page-active');
    });
});
