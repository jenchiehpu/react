import axios from 'axios';

function init() {
  console.log('initFetchExample');
  fetch('/api/400')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((error) => {
      console.error(error);
    });

  //
  axios.get('/api/400')
    .catch((error) => {
      console.log('axios error');
      console.error(error);
    });
}
init();
