import mongoose  from 'mongoose'
import timestamps from 'mongoose-timestamp'

const ProfileSchema = new mongoose.Schema({
  name: String,
  title: String,
	experiences: [{
		title: String,
		date: String,
		company: String,
		description: String
	}],
	educations: [{
		institution: String,
		career: String,
		date: String,
	}],
}, { collection: 'profiles' })

ProfileSchema.plugin(timestamps)

export default ProfileSchema