import { createServer } from 'restify';
import { Profile } from '../models/profile';
import { mongoose} from 'mongoose';

// por implementar Restify Router

const server = createServer();

server.post('/profiles', (req, res, next)=> {
    try {
        let data = req.body || {}
        const ProfileModel = mongoose.model('Profile', Profile)

		profile = new ProfileModel(data)
        profile.save()
    } catch (error) {
        console.log("🚀 ~ server.get ~ error", error)
        res.json({
            error: error.message,
            success: false
        })
    }
})


export default server