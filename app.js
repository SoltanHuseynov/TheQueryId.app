const express=require("express")
const JsonData=require("./toSetData")
let App=express()

let port=2000
let host="localhost"
App.use(express.static(__dirname+"/public"))
App.set("view engine","ejs")//we are defining here a root directory 
// and file extension

const toTextTag={
    tag:["Name","Age","Country","Work"],
    data:[]
}

App.get("/",(req,res)=>{
    const toSeparateJson=new JsonData(req)
    res.render("page/test",{
        items:toTextTag.tag,
        dat:toSeparateJson.toDsiplay(),
        error:toSeparateJson.toDisplayError,
        none:toSeparateJson.none
    })

})

App.listen(port,()=>{
    console.log(`http://${host}:${port}`);
})