const mongoose = require("mongoose");

// Disable strictQuery to avoid deprecation warnings
mongoose.set("strictQuery", false);

// MongoDB connection string
const connectionString =
  "mongodb+srv://patilhardika96:hpatil123@cluster0.fe8j2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(connectionString)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("Connection error:", err));

// Export mongoose for reusability
module.exports = mongoose;
