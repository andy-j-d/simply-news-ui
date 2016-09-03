export const getArticles = ({ qty, rss_url }) => fetch(`api/articles/?url=${rss_url}${qty ? `&qty=${qty}` : ''}`, {
  method: 'get'
}).then(response => response.json().then(data => data)
).catch((error) => {
  console.warn('deliver articles error', error);
});
