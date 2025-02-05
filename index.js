import renderApi from '@api/render-api';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Render יקבע את הפורט
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

renderApi.auth('rnd_aQ4FYLkhTfmAShXhDVCSfjlcz5xV');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));