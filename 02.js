const axios = require('axios').default;

function getUserAccount() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  function getUserPermissions() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }
  
  axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
      const [a, b] = [acct.data, perms.data];
      a.forEach(el => {
          for(let i = 1; i <= b.length; i++){
            if(el.userId == i){
                el.user = Object.assign({},b[i-1])
            }
          }
      });

      console.log(a);    
      
    }));
