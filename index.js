const express = require('express');
const axios = require('axios');
const app = express();

// הגדרת route ל-fetch של נתונים מ-Render API
app.get('/render-apps', async (req, res) => {
  try {
    const apiKey = process.env.RENDER_API_KEY;
    if (!apiKey) {
      throw new Error('RENDER_API_KEY is missing');
    }

    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Render API:', error.response?.status || error.message);
    res.status(error.response?.status || 500).json({
      message: 'Error fetching data',
      error: error.message,
      details: error.response?.data,
    });
  }
});

// הפעלת השרת על פורט 3001 (או על הפורט שנמצא ב-process.env.PORT)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
