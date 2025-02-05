import renderApi from '@api/render-api';

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


renderApi.auth('rnd_aQ4FYLkhTfmAShXhDVCSfjlcz5xV');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));