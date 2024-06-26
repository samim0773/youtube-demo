import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./publick/temp");
  },
  filename: function (req, file, cb) {
    cd(null, file.originalname);
  },
});

export const upload = multer({ storage });
