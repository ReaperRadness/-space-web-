// script.js 
/*document.addEventListener('DOMContentLoaded', () => {
  // Replace 'YOUR_API_KEY' with your actual News API key
  const apiKey = "f5540772acb04cf6ba826a58eb355d1e";
  const newsEndpoint = `https://newsapi.org/v2/top-headlines?q=space&apiKey=f5540772acb04cf6ba826a58eb355d1e`;

  fetch(newsEndpoint)
    .then(response =>{console.log('API Response:', response);
      response.json()})
    .then(data => {
      console.log('News Data:')
      const spaceNewsSection = document.getElementById('space-news');

      // Loop through the news articles and create cards for each article
      data.articles.forEach(article => {
        const newsCard = createNewsCard(article);
        spaceNewsSection.appendChild(newsCard);
      });
    })
    .catch(error => {
      console.error('Error fetching news:', error);
      // Handle error if there's a problem fetching the news
    });

  // Function to create a news card
  function createNewsCard(article) {
    const card = document.createElement('div');
    card.classList.add('news-card');

    const image = document.createElement('img');
    image.src = article.urlToImage || 'placeholder-image.jpg';
    image.alt = article.title;
    card.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = article.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = article.description;
    card.appendChild(description);

    const readMoreLink = document.createElement('a');
    readMoreLink.textContent = 'Read More';
    readMoreLink.href = article.url;
    readMoreLink.target = '_blank';
    card.appendChild(readMoreLink);

    return card;
  }
});
*/
