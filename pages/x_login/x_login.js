  // import service from '../../service.js';
    // import {
    //     mapState,
    //     mapMutations
    // } from 'vuex'
    // import mInput from '../../components/m-input.vue'

var GP 
    export default {
        // components: {
        //     mInput
        // },
        data() {
            return {
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
		},
        methods: {
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
				if( userName=="admin" && password == "123"){
					uni.navigateTo({
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
			
        },
        onReady() {
            // this.initPosition();
            // this.initProvider();
        },
		
    }