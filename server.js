const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dummy AWS Access Key (for testing only)
const AWS_ACCESS_KEY_ID = "AKIA123456789EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "abcd1234abcd1234abcd1234abcd1234abcd1234";

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app; // Export for testing
