/*  const multer = require('multer')


const storage =multer.diskStorage({
    destination:function(req,file,cb){
        //nereye yuklaeyecgimiyi karar veriyoruyy upload null hataalri gorme
        //uploads klasoru olusturdum geleni buray yukle
        //sonra app app.use dosyasini olusturuz 
        cb(null,'uploads')

    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+file.originalname)

    }
})
const fileFilter =(req,file,cb)=>{
    cb(null,true)
}
const uploads=multer({storage:storage,fileFilter:fileFilter,}).single('file')
module.exports=uploads*/