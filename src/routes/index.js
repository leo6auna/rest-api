const { Router } = require('express')
const router = Router()
// routes
router.get('/', (req, res)=>{
    res.json({"Title": "La concha de tu madre all boys"});
});

module.exports = router