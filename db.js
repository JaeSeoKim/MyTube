import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/wetube", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✔ DB Connection Succes!");
const handleClose = error => console.log(`❌ DB Connection Fail : ${error}`);

db.once("open", handleOpen);
db.on("error", handleClose);

// {
//   id: 1234,
//   title: "Video Title - test!",
//   description: "this video is ~~~",
//   views: 24,
//   video_file:
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//   creator: {
//     id: 9999,
//     name: "김아무개",
//     email: "asdas@nasdc.com"
//   }
// }
