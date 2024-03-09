
      try {
        (function C({contextBridge:J,ipcRenderer:V}){if(!V)return;V.on("__ELECTRON_LOG_IPC__",($,ne)=>{window.postMessage({cmd:"message",...ne})}),V.invoke("__ELECTRON_LOG__",{cmd:"getOptions"}).catch($=>console.error(new Error(`electron-log isn't initialized in the main process. Please call log.initialize() before. ${$.message}`)));const K={sendToMain($){try{V.send("__ELECTRON_LOG__",$)}catch(ne){console.error("electronLog.sendToMain ",ne,"data:",$),V.send("__ELECTRON_LOG__",{cmd:"errorHandler",error:{message:ne==null?void 0:ne.message,stack:ne==null?void 0:ne.stack},errorName:"sendToMain"})}},log(...$){K.sendToMain({data:$,level:"info"})}};for(const $ of["error","warn","info","verbose","debug","silly"])K[$]=(...ne)=>K.sendToMain({data:ne,level:$});if(J&&process.contextIsolated)try{J.exposeInMainWorld("__electronLog",K)}catch{}typeof window=="object"?window.__electronLog=K:__electronLog=K})(require('electron'));
      } catch(e) {
        console.error(e);
      }
    