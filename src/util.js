// import {jwtDecode} from 'jwt-decode'
//  临时用saveSession表示用户登录后存储用户登录状态
export function saveSession(key,str){
    sessionStorage.setItem(key,str);
}

// 临时用getSession获取前端session中的登录状态
export function getSession(key){
    return sessionStorage.getItem(key);
}
