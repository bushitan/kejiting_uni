
/**
 * 项目请求的API接口
 * 
 * 
 * 
 */

import dbFather from '../db/db_2_base.js'
class dbSon extends dbFather{	
	constructor(){
		super()
	}		
	/*
	 * @method 3.1 获取项目列表
	 * @param
	 * 		kw{String}
	 * 		pageIndex{Number}
	 * 		pageSize{Number}
	 */
	ProjectGetList(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/project/getlist","GET", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
		/*
	 * @method 3.1.1 地址查询项目
	 * @param
	 * 		kw{String}
	 * 		pageIndex{Number}
	 * 		pageSize{Number}
	 */
	ProjectStatByAddr(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/project/statbyaddr","GET", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
	
	/*
	 * @method 3.2 获取项目详情
	 * @param
	 * 		id{String}
	 */
	ProjectGetDetail(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/project/detail","GET", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
	/*
	 * @method 3.3 获取项目进度
	 * @param
	 * 		id{String}
	 * 		projectNum{String}
	 */
	ProjectGetProgress(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/project/progress","GET", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
	
	
	
}
module.exports = dbSon