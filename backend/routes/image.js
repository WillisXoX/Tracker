const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage: storage
});

router.route('/')
    .post(upload.array('file'), (req, res) => {
        res.json(req.files);
        /* console.log(req.file);
        res.json(req.file); */
    });

router.route('/upload')
    .post((req, res) => {
        res.json(req.body);
        
});


module.exports = router;