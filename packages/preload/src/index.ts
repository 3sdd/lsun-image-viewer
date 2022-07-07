/**
 * @module preload
 */

import { ipcRenderer } from 'electron';


export {sha256sum} from './nodeCrypto';
export {versions} from './versions';



export function selectDirectory(){
  return ipcRenderer.invoke('select-directory');
}

export function getDirectories(rootPath:string){
  return ipcRenderer.invoke('get-directories',rootPath);
}
