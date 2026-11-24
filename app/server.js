const http = require('http');

const page = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DevOps Project</title>
<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Segoe UI", Arial, Helvetica, sans-serif;
    background: #f8fafc;
  }
  .card {
    background: #ffffff;
    padding: 56px 48px;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
    max-width: 640px;
    width: 90%;
  }
  .bar {
    width: 48px;
    height: 4px;
    background: #2563eb;
    border-radius: 2px;
    margin: 0 auto 24px;
  }
  h1 {
    font-size: 2.6rem;
    line-height: 1.25;
    margin: 0 0 16px;
    color: #0f172a;
  }
  p {
    font-size: 1.15rem;
    letter-spacing: 1px;
    color: #64748b;
    margin: 0;
  }
  p span {
    color: #2563eb;
    font-weight: 600;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="bar"></div>
    <h1>Hello from my DevOps Project</h1>
    <p>Deployed by <span>MUHAMMAD ADHINAN</span></p>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(page);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
