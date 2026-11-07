var u=(c,l=100)=>{let e;const t=()=>{e!==null&&(clearTimeout(e),e=null)},n=(...o)=>{t(),e=setTimeout(()=>{c(...o)},l)};return n.cancel=()=>{t()},n};export{u as t};
