var GP
export default {
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
		// this.test()
	},
	methods: {
		
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
				{
					this.loginSuccess(res)
				}
					
				else	//登陆超时，重新登录
					this.loginFail(res)
			})
		},			
		
		/**
		 * @method 登陆表单submit
		 */
		formSubmit: function(e) {
			var userName = e.detail.value.username
			var password = e.detail.value.password	
			
			
			if( userName=="" || password == ""){
				uni.showModal({
					title:"请输入完整的账号密码",
					showCancel:false,
				})
				return 
			}
			
			var that = this
			// 登录
			this.$db.Login({
				accout:userName,
				password:password,
			}).then(res=>{
		
				
				// return
				if(res.code == 0)
				{
					that.loginSuccess(res)
				}
				else
				{		
					that.loginFail(res)
				}
					
					
				console.log('登录结果',res)
			})				
		
		},
		
		
		// 登录成功
		loginSuccess(res){
			uni.setStorageSync(this.$db.KEY_TOKEN,res.data.token)
			uni.setStorageSync( this.$db.KEY_IS_LEADER,res.data.isLeader)
			if(res.data.isLeader)
			{
				uni.redirectTo({
					url:"/pages/index/index"						
				})
			}
			else
			{
				uni.redirectTo({
					url:"/pages/5_detail/5_detail?projectNo="+res.data.projectNo + "&id=" + res.data.projectId					
				})
			}
			
			// if(res.data.isLeader)
			// {
			// 	uni.redirectTo({
			// 		url:"/pages/index/index"						
			// 	})
			// }
			// else
			// {
			// 	console.log("/pages/5_detail/5_detail?id="+ res.data.projectId	);
			// 	uni.redirectTo({
			// 		url:"/pages/5_detail/5_detail?id="+ res.data.projectId						
			// 	})
			// }
			
		},
		
		// 登录失败
		loginFail(){
			
			// uni.showToast({
			// 	title:"身份超时，请重新输入账号密码登录",
			// })
		},
		
		
		
		// /**
		//  * @method 测试页面
		//  */
		// test(){
		// 	this.$db.TestProject()
			
			
		// },
		
	},	
}
	
	
	
	
	
	// /**
	//  * @method 登陆
	//  * @return 
	//  * 		true 账号正确，跳转
	//  * 		false  账号错误，提示
	//  */
	// login(userName,password){
		
		
	// 	this.$db.getToken(userName,password).then(res=>{
	// 		// var result = res.data.result
	// 		var code = res.code
			
	// 		///***** lwd 修改 ************
	// 		console.log("登录结果:" +res)
			
	// 		if(res.code == 0)
	// 		{
	// 			// 设置TOKEN
	// 			uni.setStorageSync(this.$db.KEY_TOKEN,res.data)
	// 			console.log(uni.getStorageSync(this.$db.KEY_TOKEN))
	// 			///如果是领导
	// 		  if(res.data.isLeader)	
	// 		  {
	// 			  this.toMain()
	// 		  }
			  
	// 		  /// 如果不是领导 则跳转到 该人员负责的项目
	// 		  else
	// 		  {
				  
	// 		  }
				
	// 		}
			
	// 		//****** lwd 修改结束*********
			
			
			
			
	// 	})
	// },
	
	
	
	// var ACCOUNT = [
	// 	{username:"caokh",password:"123456"},
	// 	{username:"liujh",password:"123456"},
	// 	{username:"chencs",password:"123456"},
	// 	{username:"liaowj",password:"123456"},
	// 	{username:"qianj",password:"123456"},
	// 	{username:"tangxl",password:"123456"},
	// 	{username:"wangb",password:"123456"},
	// 	{username:"liwh",password:"123456"},
	// 	{username:"xiexk",password:"123456"},
	// 	{username:"tangld",password:"123456"},
	// 	{username:"caicl",password:"123456"},
	// 	{username:"duwh",password:"123456"},
	// 	{username:"moby",password:"123456"},
	// 	{username:"mengfg",password:"123456"},
	// 	{username:"zhangxf",password:"123456"},
	// 	{username:"chensw",password:"123456"},
	// 	{username:"huangzb",password:"123456"},
	// 	{username:"lihh",password:"123456"},
	// 	{username:"chend",password:"123456"},
	// 	{username:"songjy",password:"123456"},
	// 	{username:"wangl",password:"123456"},
	// 	{username:"yeb",password:"123456"},
	// 	{username:"changq",password:"123456"},
	// 	{username:"caiqz",password:"123456"},
	// 	{username:"kegs",password:"123456"},
	// 	{username:"huangkl",password:"123456"},
	// 	{username:"huangsx",password:"123456"},
	// 	{username:"longg",password:"123456"},
	// 	{username:"chenwj",password:"123456"},
	// 	{username:"shim",password:"123456"},
	// ]