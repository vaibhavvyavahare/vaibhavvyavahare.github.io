export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/LENOVO/Desktop/vaibhav/MyWebsite/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello World"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/LENOVO/Desktop/vaibhav/MyWebsite/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
