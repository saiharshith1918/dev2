const express = require("express");
const app = express();
const PORT = process.env.PORT || 3033;

app.get("/", (req, res) => {
  res.send("🔥 second demo");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
