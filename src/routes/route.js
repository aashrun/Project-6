const express = require('express');
const router = express.Router();
const profileController = require("../controllers/profileController.js")
const postController = require("../controllers/postController.js")




//====================================  Profile Handlers  ======================================//
router.post("/profile/register", profileController.createProfile)

router.post("/profile/login", profileController.loginUser)

router.get("/profile/:profileId/getProfile", profileController.getProfile)

router.put("/profile/:profileId/update", profileController.updateProfile)

router.delete("/profile/:profileId/delete", profileController.deleteProfile)


//====================================  Post Handlers  =========================================//
router.post("/post/create", postController.createPost)


//====================================  Invalid API  ==========================================//
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you requested is not available!"
    })
})
