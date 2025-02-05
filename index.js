// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/apps', async (req, res) => {
//     try {
//         const response = await axios.get('https://api.render.com/v1/services', {
//             headers: {
//                 Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
//             },
//         });
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// import renderApi from '@api/render-api';

// renderApi.auth(process.env.NODE_ENV);
// renderApi.listServices({includePreviews: 'true', limit: '20'})
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

import renderApi from '@api/render-api';

renderApi.auth('rnd_aQ4FYLkhTfmAShXhDVCSfjlcz5xV');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));