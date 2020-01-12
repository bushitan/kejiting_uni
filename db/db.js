
import dbNormal from '../db/db_4_project_editor.js'
class db extends dbNormal{	
	
	constructor(){
		super()
		this.$db = this
	}
	
	TestProject(){
		
		
		// 1登录
		this.$db.Login({
			"accout": "caokh",
			"password": "123456"
		}).then(res=>{			
			console.log('登录',res)
		})
		
		// 1 按时间获取项目进度详情
		this.$db.ProjectProgressDetailGet({
			"projectno": null,
			"datetime": "2020-01-11"
		}).then(res=>{			
			console.log('按时间获取项目进度详情',res)
		})
		
		
		// 2 编辑进度
		this.$db.ProjectProgressDetailEditor({
	  		"id": null,
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
		}).then(res=>{			
			console.log('编辑进度',res)
		})
		
		
		// 2 .1 成果编辑
		this.$db.ProjectAchiEditor({
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
		}).then(res=>{			
			console.log('成果编辑',res)
		})
		
		// 2 .2 获取成果详情
		this.$db.ProjectAchiGet({
			"id": null,	
		}).then(res=>{			
			console.log('获取成果详情',res)
		})
		
		// 2 .3 删除指定成果
		this.$db.ProjectAchiDelete({
			"ids": [1,2,3],	
		}).then(res=>{			
			console.log('删除指定成果',res)
		})
		
		// 3.1 更新论文
		this.$db.ProjectPaperEditor({
			"Id": null,
			"EditTime": null,
			"ProjectNo": null,
			"ProjectName": null,
			"PaperName": null,
			"CompletePerson": null,
			"ApplyPersonSort": null,
			"PublishDate": null,
			"DirCate": null,
			"RefTimes": null,
			"RelateDec": "0001-01-01",
			"CreateTime": "0001-01-01",
			"UpdateTime": "0001-01-01",
			"IsEdit": "",
		}).then(res=>{			
			console.log('更新论文',res)
		})
		
		// 3.2 获取论文详情
		this.$db.ProjectPaperGet({
			"id": "",	
		}).then(res=>{			
			console.log('获取论文详情',res)
		})
		// 3.3 删除指定论文
		this.$db.ProjectPaperDelete({
			"ids": [1,2,3],	
		}).then(res=>{			
			console.log('删除指定论文',res)
		})
	}
}
module.exports = new db()


// this.$db.Login({
// 	accout:"caokh",
// 	password:'123456',
// }).then(res=>{
// 	console.log('登录结果',res)
// })

	
// this.$db.ProjectGetList({
// 	kw:"柳州",
// 	pageIndex:1,
// 	pageSize:20,
// }).then(res=>{
// 	console.log(res)
// })



// /**
//  */
// this.$db.ProjectGetDetail({
// 	id:"0b65425e0ec64a98b275357d03cb66aa",
// }).then(res=>{
// 	console.log(res)
// })
	
// /**
//  */
// this.$db.ProjectGetProgress({
// 	id:"0b65425e0ec64a98b275357d03cb66aa",
// 	projectNum:"桂科计字[2018]242号",
// }).then(res=>{
// 	console.log(res)
// })
	
