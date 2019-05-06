let util = {};

//getUUID：获取uuid
util.getUUID = function(len){
    let chars = [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'];
    if(!len && !parseInt(len)) len = 32;

    let uuid = [];
    while(len > 0){
        uuid[--len] = chars[0 | Math.random()*chars.length];        
    }
    return uuid.join('');
}

export default util;