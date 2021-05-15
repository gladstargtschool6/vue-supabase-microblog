module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
import express from "express";
const app = express();
const port = 8080;

app.get('/',(req,res)=> {
  res.send('Express Home page')
});

app.listen(port,() => console.log(`Server started running on ${port}`));
{
    "presets": [
        "@babel/preset-env"
    ]
}
