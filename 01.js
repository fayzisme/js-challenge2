const fs = require('fs')

const promise = new Promise((resolve, reject) => {
    fs.readdir('/', (err, result) => {
        if (err) {
          reject(new Error(err.message))
        }
        resolve(result)
      })
});

promise
    .then(response => {
        console.log(response);
    })
    .catch(response => {
        console.log(response);
    })