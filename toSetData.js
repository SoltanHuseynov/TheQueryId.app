const fs=require("fs")

fetch(`https://raw.githubusercontent.com/SoltanHuseynov/basic-datas/main/PersonID.txt`)
.then((data)=>{
    return data.text()
}).then((data)=>{
    fs.writeFile("Api/db.txt",data,(err)=>{
        if(err) throw err
    })
})
//part 2
function convertJson(){
    const response=fs.readFileSync("Api/db.txt","utf-8")
    let render=response.split("\n")
    .map((str)=>{
        return str.split(/\s+/)
    })
    var heading=render.shift()
    let toDisplayJson=render.map((str)=>{
        var renderData={}
        for(x=0;x<str.length-1;x++){
            renderData[heading[x]]=isNaN(Number(str[x]))? str[x]: +str[x]//the '+str[i] have to just for number because it's return 'fasle'
            //there is a 'true' at here so this is determine like 'str[i]' and the 'str[i]' is not a Number
        }
        return renderData
    })
    return toDisplayJson
}
// to set the enviroment 
class toSetEnviroment {
    constructor(req){
        this.Id=req.query.identity
        this.toConvertJson=convertJson()
        this.toDisplayError=""
        this.none=""
    }
    toSet(){
        for(let x=0;x<this.toConvertJson.length;x++){
            if(this.toConvertJson[x].Identity==this.Id){
                return this.toConvertJson[x]
            }
            else if(this.Id?.length<10){
                return `That is Not Id: ${this.Id}`  
            }
        }
        return `The Data Not Found !`
    }
    toDsiplay(){
        const List=this.toSet()
        let newList=[List?.NAME,List?.AGE,List?.COUNTRY,List?.WORK]
        if(newList[0]==undefined){
            this.toDisplayError=List
            this.none="display:none;"
        }if (this.Id==null){
            this.toDisplayError=`The Empty Data`
        }
        
        return newList
    }
}

try{
    fs.mkdirSync("Api")
    module.exports=toSetEnviroment
    
} catch(erro) {
    module.exports=toSetEnviroment
    
}
