import axios from "./index";
import constant from './constant'

/**
 * demo接口调用-get
 * @param param 关键字
 */
export function get(url, param) {
    return axios({
        url: constant.demo + url,
        method: "get",
        params: param,
    });
}

/**
 * demo接口调用-post
 * @param param 关键字
 */
export function post(url, param) {
    return axios.post(constant.demo + url, param);
}
