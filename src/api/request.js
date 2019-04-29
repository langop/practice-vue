import Axios from 'axios'
import crypto from 'crypto'

import Util from '@/common/util'
import Mock from '@/mock/mock'
import {secret, readInterfaceUrl, writeInterfaceUrl} from '@/common/config'

Axios.defaults.timeout=5000;
Mock.mockData(Axios);

const request = {}

//公共参数，url格式：'/xx/yy'
const requestBaseData = function(uri) {

	let result = /^\/(\w+)\/(\w+)(\?.*)?$/.exec(uri);
	if(!result) {
		return false;
	}

	const modular = result[1];  //xx
	const requestname = result[2];  //yy
	const timeStamp = (new Date()).getTime(),
		  uuid = Util.getUUID();
	const md5 = crypto.createHash('md5');
	md5.update(`&timeStamp=${timeStamp}&uuid=${uuid}&secret=${secret}`);
	const secretKey = md5.digest("hex");

	return {
		modular,
		requestname,
		"param": {
			"authKey": "0",
			"dtype": "7",
			"timeStamp": timeStamp,
			"uuid": uuid,
			"custId": "EFAD2C1757EA418BABA8D58D49B9DDFB",
			"userKey": "878CDAC9D786481BE053191EA8C02E8D",
			"secretKey": secretKey
		},
		"version": "2.5"
	}
}

const ajaxPost = (baseUrl, uri, data, successFuc, failFuc) => {
	// let baseInfo = requestBaseData(uri);
	// let param = Object.assign({}, baseInfo.param, data);
	
	// const reqData = Object.assign({}, baseInfo, {param});
	//Axios.post(baseUrl, JSON.stringify(reqData)).then(response => {
	Axios.post(uri).then(response => {	
		let rspStatus =  response.status;
		console.log(rspStatus);
		if(rspStatus==200){
			successFuc(response.data);
		}else{

		}
	}).catch(error => {
		if(failFuc) failFuc(error);
		else console.log(`request ajaxPost error: `, error);
	});

	// let xhr = new XMLHttpRequest();
	// xhr.onreadystatechange = function(res){
	// 	if (xhr.readyState == 4) {
	// 		console.log("response: ", xhr);
	// 	}
	// }
	// xhr.open('post', url);
	// xhr.send(JSON.stringify({modular, requestname, param}));
}

request.ajaxReadPost = function(uri, ...params){
	ajaxPost(readInterfaceUrl, uri, ...params);
}

request.ajaxWritePost = function(uri, ...params){
	ajaxPost(writeInterfaceUrl, uri, ...params);
}

request.ajaxFileUpload = () => {
	
}

request.ajaxFileDownload = () => {
	
}

export default request;