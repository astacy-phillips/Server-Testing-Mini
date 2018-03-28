const serve = require('./server');
const port = 3030;

serve.listen(port, () => {
  console.log(`Magic is happening on port ${port}`);
});
