import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
const storage = new GridFsStorage({
  url:
    "mongodb://AkshayKanse:akshaykanse@blogweb-shard-00-00.c4a57.mongodb.net:27017,blogweb-shard-00-01.c4a57.mongodb.net:27017,blogweb-shard-00-02.c4a57.mongodb.net:27017/MYPROJECT?ssl=true&replicaSet=atlas-10e3cq-shard-0&authSource=admin&retryWrites=true&w=majority",
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    console.log(file)
    const match = ["image/png", "image/jpg","image/jpeg"];

    if (match.indexOf(file.mimeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
