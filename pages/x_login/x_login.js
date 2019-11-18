  // import service from '../../service.js';
    // import {
    //     mapState,
    //     mapMutations
    // } from 'vuex'
    // import mInput from '../../components/m-input.vue'

var GP 

var ACCOUNT = [
	{username:"caokh",password:"123456"},
	{username:"liujh",password:"123456"},
	{username:"chencs",password:"123456"},
	{username:"liaowj",password:"123456"},
	{username:"qianj",password:"123456"},
	{username:"tangxl",password:"123456"},
	{username:"wangb",password:"123456"},
	{username:"liwh",password:"123456"},
	{username:"xiexk",password:"123456"},
	{username:"tangld",password:"123456"},
	{username:"caicl",password:"123456"},
	{username:"duwh",password:"123456"},
	{username:"moby",password:"123456"},
	{username:"mengfg",password:"123456"},
	{username:"zhangxf",password:"123456"},
	{username:"chensw",password:"123456"},
	{username:"huangzb",password:"123456"},
	{username:"lihh",password:"123456"},
	{username:"chend",password:"123456"},
	{username:"songjy",password:"123456"},
	{username:"wangl",password:"123456"},
	{username:"yeb",password:"123456"},
	{username:"changq",password:"123456"},
	{username:"caiqz",password:"123456"},
	{username:"kegs",password:"123456"},
	{username:"huangkl",password:"123456"},
	{username:"huangsx",password:"123456"},
	{username:"longg",password:"123456"},
	{username:"chenwj",password:"123456"},
	{username:"shim",password:"123456"},
]

    export default {
        // components: {
        //     mInput
        // },
        data() {
            return {
				header:{
					title:"广西科技项目管理APP",
					subTitle:"三百两千项目",
					btn:"项目大数据",
					
				},
				
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0,
				
					
				userName:"",
				password:""
            }
        },
		
		onLoad(){
			GP = this
			// this.toMain()
			// this.checkStatus()
			// this.getCode()
			this.test()
		},
        methods: {
			
			/**
			 * @method 测试页面
			 */
			test(){
				
			/**
			 * fileReleaseNumber: "桂科计字[2018]242号"
				id: "0b65425e0ec64a98b275357d03cb66aa"
				leader: "柏宏"
				projectName: "高品质乘用车（MPV）整车及关键技术开发与应用"
				projectNameInScene: "高品质MPV（多用途乘用车）整车及关键技术开发与应用"
				projectNo: "2018AA18012"
				projectProgress: "完成60%"
				registerAddr: "柳州市"
				sort: "1"
				underTakeWorkName: "上汽通用五菱汽车股份有限公司"
			 */
			this.$db.ProjectGetList({
				kw:"柳州",
				pageIndex:1,
				pageSize:20,
			}).then(res=>{
				console.log(res)
			})
			
			
			
			/**
			 */
			this.$db.ProjectGetDetail({
				id:"0b65425e0ec64a98b275357d03cb66aa",
			}).then(res=>{
				console.log(res)
			})
				
			/**
			 */
			this.$db.ProjectGetProgress({
				id:"0b65425e0ec64a98b275357d03cb66aa",
				projectNum:"桂科计字[2018]242号",
			}).then(res=>{
				console.log(res)
			})
				
				
				
				
			},
			
			/**
			 * @method 6.4我的任务--获取项目实施方式 DicCode="ExecutionType"
			 *         6.5我的任务--获取项目实施方式 DicCode="ProjectType"
			 *         6.6我的任务--获取项目实施方式 DicCode="ProjectStatus"
			 *         6.9我的任务--获取任务类型 DicCode="TaskType"
			 */
			getCode(){
				this.$db.getDictionary("TaskStatus").then(res=>{
					console.log("TaskStatus",res)
				})
				// this.$db.getDictionary("ExecutionType").then(res=>{
				// 	console.log("ExecutionType",res)
				// })
				// this.$db.getDictionary("ProjectType").then(res=>{
				// 	console.log("ProjectType",res)
				// })
				// this.$db.getDictionary("ProjectStatus").then(res=>{
				// 	console.log("ProjectStatus",res)
				// })
				// this.$db.getDictionary("TaskType").then(res=>{
				// 	console.log("TaskType",res)
				// })
			},
			
			/**
			 * @method 跳转至首页
			 */
			toMain(){
				uni.switchTab({
					url:"/pages/1_main/1_main"
				})
			},
			
			/**
			 * @method 检测登陆状态
			 * @return
			 * 		true 已登录，跳转x_detail
			 * 		fasle 保持现有页面
			 */
			checkStatus(){			
				
				var token = uni.getStorageSync(this.$db.KEY_TOKEN) || ""
				// 用户未登录
				if(token == "")
					return
				
				this.$db.checkToken(token).then(res=>{
					// uni.hideLoading()
					console.log(true,res.data)
					
					if(res.data==true)	// 登陆成功 跳转详情
						this.toMain()
					else	//登陆超时，重新登录
						uni.showToast({
							title:"身份超时，请重新输入账号密码登录",
						})
				})
			},
			
			/**
			 * @method 登陆
			 * @return 
			 * 		true 账号正确，跳转
			 * 		false  账号错误，提示
			 */
			login(userName,password){
				
				
				this.$db.getToken(userName,password).then(res=>{
					// var result = res.data.result
					var code = res.code
					console.log(res)			
			
					// 设置TOKEN
					uni.setStorageSync(this.$db.KEY_TOKEN,res.data)
					console.log(uni.getStorageSync(this.$db.KEY_TOKEN))
					this.toMain()
				})
			},
			
			/**
			 * @method 登陆表单submit
			 */
			formSubmit: function(e) {
				// console.log('onclick')
				var userName = e.detail.value.username
				var password = e.detail.value.password				
				// var userName = '18588276558'
				// var password = '123456'
				
				if( userName=="" || password == ""){
					uni.showModal({
						title:"请输入完整的账号密码",
						showCancel:false,
					})
					return 
				}
				// if( userName=="admin" && password == "123"){
				if( this.checkAccount(userName,password) ){
					// uni.navigateTo({
					// 	url:"/pages/index/index"
					// })
					uni.redirectTo({
						url:"/pages/index/index"						
					})
					// uni.navigateTo()({
					// 	url:"/pages/index/index"
					// })
				}else{
					uni.showModal({
						title:"账号密码错误",
						showCancel:false,
					})
				}
				
				
				// this.login(userName,password)
			
			},
					
			/**
			 * @method 判断账号密码
			 */
			checkAccount(username,password){
				for (var i = 0 ;i<ACCOUNT.length;i++)
					if(username == ACCOUNT[i].username && password == ACCOUNT[i].password )
						return true
						
				return false
			},
        },

		
        onReady() {
            // this.initPosition();
            // this.initProvider();
        },
		
    }