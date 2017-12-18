const https = require("https");

const options = {
  hostname: 'api.github.com',
  path: '/users/jtbrubak/repos',
  method: 'GET',
  headers: {
    'User-Agent': 'jtbrubak'
  }
}

https.get(options, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    body.forEach((repo) => console.log(repo.name));
  });
});
