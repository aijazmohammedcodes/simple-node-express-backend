const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Hardcoded password for testing GitLeaks
const apiKey = 'AKIAFAKEKEY1234567890';

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app; // Export for testing
