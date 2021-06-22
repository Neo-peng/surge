const fs = require('fs');

fs.readFile('./backwaves.list', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data);
  // console.log(JSON.parse(data));
  let nodes = JSON.parse(data);
  for (let e of nodes) {
    console.log('*'.repeat(18));
    console.log(e);
  }
});
