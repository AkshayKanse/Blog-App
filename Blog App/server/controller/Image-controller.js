import express from 'express'
import mongoose from 'mongoose';
 import grid from 'gridfs-stream';
//import  path from 'path';


const url = 'http://localhost:4444'
let  gfs;
const conn = mongoose.connection;
conn.once('open', () =>{
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})





export const uploadImage = (req, res) => {
    try {

        if (!req.file)
            return res.status(404).json("File not found");


        const imageURL = `${url}/file/${req.file.filename}`

        res.status(200).json(imageURL);
    } catch (error) {
        res.status(500).json(error);
    }





}


export const getImage = async (req,res) =>  {
//     const {filename} = req.params;
//     const dir =path.resolve();
//  const final=path.join(dir, 'file/'+filename);

    try{
       const file = await gfs.files.findOne({filename: req.params.filename});
       const readStream = gfs.createReadStream(file.filename);
       readStream.pipe(res);
    }catch(error){
        res.status(500).json(" Error while getimage",error);
    }
//     console.log(req.params)
//     console.log("dfghj");
// return res.sendFile(final);
   
}