
/**
 * 项目请求的API接口
 * 
 * 
 * 
 */

import dbFather from '../db/db_3_normal.js'
class dbSon extends dbFather{	
	constructor(){
		super()
	}		
	
	/************************按月份统计项目进度**************************/	
	/*
	 * @method 1.1 按时间获取项目进度详情
	 * @param
			"projectno": null,
			"datetime": "2020-01-11"
	 */
	ProjectProgressDetailGet(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/project/getdetail","GET", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}		
	
	
	/*
	 * @method 1.2 编辑进度
	 * @param
	 * 		"id": null,
			"projectNo": null,
			"projectName": null,
			"doneContentOnMonth": null,
			"doneContentRateOnMonth": null,
			"coaIndicators": null,
			"assistFee": null,
			"comInvestment": null,
			"underTakeDoneWorkInfo": null,
			"projectWorkInfoStage": null,
			"projectExistProblem": null,
			"editTime": null,
			"createTime": "0001-01-01",
			"updateTime": "0001-01-01",
			"isEdit": false
	 */
	ProjectProgressDetailEditor(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/project/edit","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
	
	/************************成果编辑**************************/	
	/*
	 * @method 2.1 成果编辑
	 * @param
		   "id": null,
			"editTime": null,
			"projectNo": null,
			"projectName": null,
			"achievementName": null,
			"completionPerson": null,
			"applyPersonSort": null,
			"rewardDate": null,
			"rewardCate": null,
			"relateDesc": null,
			"createTime": "0001-01-01",
			"updateTime": "0001-01-01",
			"isEdit": false
	 */
	ProjectAchiEditor(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/achievements/edit","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
	/*
	 * @method 2.2 获取成果详情
	 * @param
		   "id": null,			
	 */
	ProjectAchiGet(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/achievements/getdetail","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}		
	
	/*
	 * @method 2.3 删除指定成果
	 * @param
		   ids:array[string]			
	 */
	ProjectAchiDelete(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/achievements/delete","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}		
	
	/************************论文编辑**************************/	
		
	/*
	 * @method 3.1 更新论文
	 * @param
		   ids:array[string]			
	 */
	ProjectPaperEditor(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/paperinfo/edit","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	/*
	 * @method 2.2 获取论文详情
	 * @param
		   "id": null,			
	 */
	ProjectPaperGet(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/paperinfo/getdetail","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}		
	
	/*
	 * @method 2.3 删除指定论文
	 * @param
		   ids:array[string]			
	 */
	ProjectPaperDelete(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/paperinfo/delete","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
	/************专利*************/
	/*
	 * @method 4.1 更新专利		
	 */
	ProjectPatentEditor(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/patentInfo/edit","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
	/*
	 * @method 4.2  获取专利详情
	 * @param
		   "id": null,			
	 */
	ProjectPatentGet(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/patentInfo/getdetail","GET", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}		
	/*
	 * @method 4.3 删除指定专利
	 * @param
		   ids:array[string]			
	 */
	ProjectPatentDelete(obj){
		return new Promise((resolve, reject) => {
			this.baseURL("api/patentInfo/delete","POST", obj).then(res=>{					
				resolve(res)					
			}).catch(res => {			
				reject(res)
			})
		})
	}	
	
}
module.exports = dbSon





	// // 3 首页信息获取
	// getMainInfo(obj) {
	// 	return new Promise((resolve, reject) => {
	// 		this.base({
	// 			url:"http://202.103.234.34:8000/wx/push/list/", 
	// 			data:{} ,
	// 			method:"POST"
	// 		} )
	// 		.then(res => resolve( res.data ))
	// 		.catch(res => reject(res.data))
	// 	})
	// }