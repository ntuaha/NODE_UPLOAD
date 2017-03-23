const multer = require('multer')
const path = require('path')
const express = require('express')

const router = express.Router()
const DATA_BASEPATH = path.join(__dirname, '/../public/data')

// uploadName 對應上傳的檔案Name
function makerUploader(name, uploadName) {
  const storage = multer.diskStorage({
    //檔案路徑
    destination(req, file, callback) {
      callback(null, DATA_BASEPATH)
    },
    //上傳後檔案名稱
    filename(req, file, callback) {
      callback(null, name)
    },
  })
  return multer({ storage }).single(uploadName)
}

const uploadAgent = makerUploader('source.txt', 'UPLOAD')


router.post('/', (req, res) => {
  uploadAgent(req, res, (err) => {
    if (err) {
      res.json({ status: err })
      return
    }
    res.json({ status: 'success' })
  })
})

module.exports = router
