// my api key 893724683005487f80022e1701dd76f9

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=893724683005487f80022e1701dd76f9";
  async function getArticles() {
    const response = await fetch(url);
    const json = await response.json();
    const { articles } = json;
    document.getElementById("title").innerHTML = `CoderNews (${articles.length})`;
    const articlesHTML = articles.map(renderArticle);
  document.getElementById("newsList").innerHTML = articlesHTML.join("");
  }
  getArticles()

  function renderArticle(article) {
    return `
      <li class="mb-3 align-self-center article">
          ${article.title}
          <img src="${article.urlToImage}" alt="Snow" />
        </div>
          <i class="fa fa-edit fa-xs"></i><h4 class="mb-0">${article.author}</h4>
          <h6 class="mb-0"><a href="${article.url}">${article.source.name}</a></h6>
        <p><i class="fa fa-envelope"></i>${article.content}</p>
      </li>
    `;
  }

const languages = ["ar", "zh", "en", "es", "fr", "ru"];

function renderLanguageAnchorTags() {
  const languageHTML = languages.map(
    (l) => `<a href="http://127.0.0.1:5500/index.html?language=${l}">${l}</a>`,
  );
  document.getElementById("languages").innerHTML = languageHTML.join("");
}
document.getElementById("languages").innerHTML = ("<h1>Languages:</h1>")
renderLanguageAnchorTags();