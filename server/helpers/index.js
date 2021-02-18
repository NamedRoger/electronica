/**
 * 
 * @param {string} prefijo 
 * @param {string} name 
 * 
 * esta funcion genera codigos con prefijo 
 * por si alguna tabla de sql la llega ocupar
 */
const generateCode = (prefijo,name) => {
    let spltiName = name.split(/[\s_-]/);
    let code = "";
    spltiName.forEach(s => {
        if(s.length <5){
            code += s;
        }else{
            code += s.slice(0,5);
        }
    });
    return `${prefijo.toUpperCase()}_${code.toUpperCase()}`;
}

exports.generateCode = generateCode;