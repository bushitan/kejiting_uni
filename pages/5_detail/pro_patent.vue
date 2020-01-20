<template>
	<view >
		<form @submit="formSubmit">
			
<!-- 		
	<uni-list-item :showText="true" title="专利名称"  :badge-text="progress.patentName" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利编码"  :badge-text="progress.patentNo" :showArrow="false" />
					<uni-list-item :showText="true" title="完成人"  :badge-text="progress.completionPerson" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利类型"   :badge-text="progress.patentType" :showArrow="false" />
					<uni-list-item :showText="true" title="完成时间"    :badge-text="progress.editTime" :showArrow="false"/>
					<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.relateDesc" :showArrow="false" />
			
	-->
			<view class="" v-if="isLeader">
				<view class="oa-node ">
					<uni-list>	
	<uni-list-item :showText="true" title="专利名称"  :badge-text="patentName" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利编码"  :badge-text="patentNo" :showArrow="false" />
					<uni-list-item :showText="true" title="完成人"  :badge-text="completionPerson" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利类型"   :badge-text="patentType" :showArrow="false" />
					<uni-list-item :showText="true" title="完成时间"    :badge-text="editTime" :showArrow="false"/>
					<uni-list-item :showText="true" title="有关说明"   :badge-text="relateDesc" :showArrow="false" />
					</uni-list>
					<uni-load-more status="noMore"></uni-load-more>
				</view>	
			</view>
			<view class="" v-else>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">专利名称</view>
					<input class="uni-input" :value="patentName" name="patentName" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">专利编码</view>
					<input class="uni-input" :value="patentNo" name="patentNo" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">完成人</view>
					<input class="uni-input" :value="completionPerson" name="completionPerson" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">专利类型</view>
					<input class="uni-input" :value="patentType" name="patentType" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">完成时间</view>
					<input class="uni-input" :value="editTime" name="editTime" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">有关说明</view>
					<input class="uni-input" :value="relateDesc" name="relateDesc" maxlength="100" placeholder="请输入" />
				</view>
				<view class=" oa-pd15  ">
					<button form-type="submit" type="primary" >保存</button>
					<view class="oa-space_10"></view>
					<button type="warn" @click="deleteItem()">删除</button>
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
								
				completionPerson: "",
				createTime: "",
				editTime: "",
				groupDate: "",
				id: "",
				patentName: "",
				patentNo: "",
				patentType: "",
				projectName: "",
				relateDesc: "",
				taskDoneTime: "",
				updateTime: "",
				isLeader:false,
			}
		},
		onLoad(option){
			
			this.setData({
				projectNo : option.projectNo  || "",
				datetime : option.datetime  || ""	,	
				id:option.id  || ""	,
				isLeader: uni.getStorageSync( this.$db.KEY_IS_LEADER)
			})
			
			if(option.id == "" || option.id == undefined)
				return 
			this.onInit()
		},
		
		methods:{
			/***********点击详情后点事情************/
			onInit(){
				// 1 按时间获取项目进度详情
				this.$db.ProjectPatentGet({
					"id": this.$data.id,
				}).then(res=>{		
					var data = res.data
					for (var i in data)
						this.$data[i] = data[i]					
					// console.log(this.$data)
				})
			},
			
			formSubmit(e) {
				var formdata = e.detail.value
				formdata.id = this.$data.id
				// formdata.editTime = this.$data.datetime
				formdata.projectNo = this.$data.projectNo
				// formdata.editTime = this.$data.datetime
				
				this.$db.ProjectPatentEditor(formdata).then(res=>{			
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
			
			deleteItem(){
				this.$db.ProjectPatentDelete({
					ids:[this.$data.id]
				}).then(res=>{			
					console.log('编辑进度',res)					
					uni.showModal({
						title:res.msg,
						success(){									
							var current = getCurrentPages()
							var prePage = current[current.length-2]
							prePage.getProgress()
							uni.navigateBack({})
						},
					})
				})
			},
		},
	}
</script>

<style>
</style>
