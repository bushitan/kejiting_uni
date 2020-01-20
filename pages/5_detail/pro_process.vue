<template>
	<view >
		<form @submit="formSubmit">
			
			<!-- <uni-list-item  :showText="true" title="本月完成内容"  :badge-text="projectInfos.doneContentOnMonth" :showArrow="false"/>
				<uni-list-item :showText="true" title="工作量占比"   :badge-text="projectInfos.doneContentRateOnMonth" :showArrow="false"/>
				<uni-list-item :showText="true" title="考核指标"   :badge-text="projectInfos.coaIndicators" :showArrow="false" />
				<uni-list-item :showText="true" title="资助经费"   :badge-text="projectInfos.assistFee" :showArrow="false" />
				<uni-list-item :showText="true" title="配套资金"   :badge-text="projectInfos.comInvestment" :showArrow="false" />
				<uni-list-item :showText="true" title="配套内容"  :badge-text="projectInfos.underTakeDoneWorkInfo" :showArrow="false"   />
				<uni-list-item :showText="true" title="总体进度"  :badge-text="projectInfos.projectWorkInfoStage" :showArrow="false"  />
				<uni-list-item :showText="true" title="存在的问题"   :badge-text="projectInfos.projectExistProblem" :showArrow="false" />
			 -->
			 
			 
			 
			<view class="" v-if="isLeader">
				<view class="oa-node ">
					<uni-list>	
						<uni-list-item  :showText="true" title="本月完成内容"  :badge-text="doneContentOnMonth" :showArrow="false"/>
						<uni-list-item :showText="true" title="工作量占比"   :badge-text="doneContentRateOnMonth" :showArrow="false"/>
						<uni-list-item :showText="true" title="考核指标"   :badge-text="coaIndicators" :showArrow="false" />
						<uni-list-item :showText="true" title="资助经费"   :badge-text="assistFee" :showArrow="false" />
						<uni-list-item :showText="true" title="配套资金"   :badge-text="comInvestment" :showArrow="false" />
						<uni-list-item :showText="true" title="配套内容"  :badge-text="underTakeDoneWorkInfo" :showArrow="false"   />
						<uni-list-item :showText="true" title="总体进度"  :badge-text="projectWorkInfoStage" :showArrow="false"  />
						<uni-list-item :showText="true" title="存在的问题"   :badge-text="projectExistProblem" :showArrow="false" />
					</uni-list>
					<uni-load-more status="noMore"></uni-load-more>
				</view>	
			</view>
			<view class="" v-else>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">本月完成内容</view>
					<input class="uni-input" :value="doneContentOnMonth" name="doneContentOnMonth" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">工作量占比</view>
					<input class="uni-input" :value="doneContentRateOnMonth" name="doneContentRateOnMonth" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">考核指标</view>
					<input class="uni-input" :value="coaIndicators" name="coaIndicators" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">资助经费</view>
					<input class="uni-input" :value="assistFee" name="assistFee" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">配套资金</view>
					<input class="uni-input" :value="comInvestment" name="comInvestment" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">配套内容</view>
					<input class="uni-input" :value="underTakeDoneWorkInfo" name="underTakeDoneWorkInfo" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">总体进度</view>
					<input class="uni-input" :value="projectWorkInfoStage" name="projectWorkInfoStage" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">存在的问题</view>
					<input class="uni-input" :value="projectExistProblem" name="projectExistProblem" maxlength="100" placeholder="请输入" />
				</view>
				
				<view class=" oa-pd15  " >
					<button form-type="submit" type="primary" >保存</button>
				</view>
			</view>
			
			
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				projectNo:"",
				datetime:"",
				doneContentOnMonth:"",
				doneContentRateOnMonth:"",
				coaIndicators:"",
				assistFee:"",
				comInvestment:"",
				underTakeDoneWorkInfo:"",
				projectWorkInfoStage:"",
				projectExistProblem:"",
				isLeader:false,
			}
		},
		onLoad(option){
			
			this.setData({
				projectNo : option.projectNo  || "",
				datetime : option.datetime  || ""	,	
				isLeader: uni.getStorageSync( this.$db.KEY_IS_LEADER)
			
			})
			
			this.onInit()
		},
		
		methods:{
			/***********点击详情后点事情************/
			onInit(){
				// 1 按时间获取项目进度详情
				this.$db.ProjectProgressDetailGet({
					"projectno": this.$data.projectNo,
					"datetime": this.$data.datetime
				}).then(res=>{
					
					console.log("获取项目进度详情:"+JSON.stringify(res));
					
					var data = res.data
					for (var i in data)
						this.$data[i] = data[i]					
					// console.log(this.$data)
				})
				
				
			},
			
			formSubmit(e) {
				var formdata = e.detail.value
				formdata.projectNo = this.$data.projectNo
				formdata.editTime = this.$data.datetime
				
				this.$db.ProjectProgressDetailEditor(formdata).then(res=>{			
					console.log('编辑进度',res)
					
					uni.showModal({
						title:res.msg,
						success(){					
							if(res.code == 0){						
								var current = getCurrentPages()
								var prePage = current[current.length-2]
								prePage.getProgress()
								uni.navigateBack({})
							}
						},
					})
				})
			},
		},
	}
</script>

<style>
</style>
