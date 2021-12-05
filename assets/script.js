fetch('https://dev.to/api/articles?username=fizzboop')
  .then((response) => response.json())
  .then(data => revealArticle(data))
  .catch((error) => console.error(error));

function revealArticle(articles) {
  if (articles.length > 0) {
    const articleSection = document.getElementById('devto');
    const article = document.getElementById('article');
    const latestArticle = articles[0];

    articleSection.classList.remove('hidden');
    articleSection.classList.add('show');

    article.setAttribute('href', latestArticle.url);
    article.textContent = latestArticle.title;
  }

  return;
};
