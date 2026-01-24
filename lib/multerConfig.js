// multerConfig.js
import multer from "multer";
import path from "path";

// Define where to store files and how to name them
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Make sure the 'uploads/' directory exists
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        // Use the original field name and a timestamp
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname),
        );
    },
});

// Configure Multer with the storage options
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
    fileFilter: function (req, file, cb) {
        // Example: only allow image files
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error("Only image files are allowed!"), false);
        }
        cb(null, true);
    },
});

// Export the upload middleware for use in routes/controllers
export default upload;
