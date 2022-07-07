import { ipcMain, dialog } from 'electron';
import * as fs from 'fs';

ipcMain.handle('select-directory',async()=>{
  return dialog.showOpenDialog({
    properties:['openDirectory'],
    // title
    // defaultPath
    // message
  });
});

ipcMain.handle('get-directories',async(_,rootPath:string)=>{
  const resultList=await fs.promises.readdir(rootPath,{withFileTypes:true});
  const directories=resultList.filter(item=>item.isDirectory())
    .map(item=>item.name);
  return directories;
});
