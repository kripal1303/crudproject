const router=require('express').Router()

const profilesHandler=require('../controllers/profilesHandler')

router.get('/',profilesHandler.getProfiles)
router.get('/new',profilesHandler.createProfile)
router.post('/',profilesHandler.postCreateProfile)
router.get('/:id',profilesHandler.showProfile)
router.get('/:id/edit',profilesHandler.getEditProfile)
router.post('/:id/edit',profilesHandler.postEditProfile)
router.get('/',profilesHandler.deleteProfile)


module.exports.router=router