const dmmgr=require("./models/dbmgr");
const {contextBridge}=require('electron');


const getData=()=>{
   return dmmgr.getData();
}

contextBridge.exposeInMainWorld("api",{
    getData : getData
})