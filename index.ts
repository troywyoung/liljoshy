const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>liljoshy</title>
          <style>
            body {
              background-color: pink;
              margin: 0;
              padding: 20px;
              font-family: system-ui, -apple-system, sans-serif;
            }
          </style>
        </head>
        <body>
          <h1>Welcome to liljoshy!</h1>
        </body>
      </html>
    `;
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Listening on http://localhost:${server.port}`);