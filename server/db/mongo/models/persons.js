/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  alternateEmail: String,
  cellPhone: String,
  homePhone: String,
  workPhone: String,
  tags: [String],
  lastUpdated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
  city: String,
  ishaCenter: String,
  state: String,
  country: { type: String, default: "US" }
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Person' collection in the MongoDB database
export default mongoose.model('Person', PersonSchema);
