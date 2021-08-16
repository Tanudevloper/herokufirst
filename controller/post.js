const Albums = require("../models/post")
//midleware 
exports.albumscreate =  (req,res) => {
    let body = req.body;
    let albums = new Albums(body);
    albums.save().then((post) => {
    res.send({
    message: 'successfully created' 
    })
    }).catch((err) => {
    res.send(err);
    });
};
    
exports.getallalbums= (req, res) => {
       Albums.find().then((data) =>{
        res.json(
        data);
        }).catch(err=> {
        res.json({
        message:'done'+err
        });
        })
    };
    exports.getalbums=(req,res) =>{
        Albums.findById(req.params.id,(err,album)=>{
            if(err){               
                return res.status(500).json({message:err})
            }
            else if(!album){
                return res.status(404).json({message:"album not available"})
             }
             else{
                 return res.status(200).json(album)
             }
        })
    };
    
        exports.updatealbums= (req, res) => {
            Albums.findByIdAndUpdate(req.params.id,{userId:req.body.userId,id:req.body.id,title:req.body.title},(err,album)=>{
                if(err){
                    return res.status(500).json({message:err})
                }
                else if(!album){
                   return res.status(404).json({message:"album not found"})
                }
                else{
                    album.save((err,savedAlbum)=>{
                        if(err){
                            return res.status(400).json({message:err})
                        }
                        else{
                            return res.status(200).json({message:"album update successfully"})
                        }
                    })
                }
        
            })
          };
          exports.deletealbums=(req,res)=>{
            Albums.findByIdAndDelete(req.params.id,(err,album)=>{
                if(err){
                  return res.status(500).json({message:err})
                }else if(!album){
                  return res.status(404).json({message:"album not available"})
                }
                else{
                  return res.status(200).json({message:"album successfully deleted"})
                }
            })
        }
    