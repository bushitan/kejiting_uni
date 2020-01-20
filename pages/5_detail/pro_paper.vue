<template>
	<view >
		<form @submit="formSubmit">
			
<!-- 		<uni-list-item :showText="true" title="专著、论文名称"  :badge-text="progress.paperName" :showArrow="false"  />
		<uni-list-item :showText="true" title="完成人"  :badge-text="progress.completePerson" :showArrow="false" />
		<uni-list-item :showText="true" title="申请人排位"  :badge-text="progress.applyPersonSort" :showArrow="false"  />
		<uni-list-item :showText="true" title="发表时间"   :badge-text="progress.publishDate" :showArrow="false" />
		<uni-list-item :showText="true" title="收录类别"    :badge-text="progress.dirCate" :showArrow="false"/>
		<uni-list-item :showText="true" title="被引用次数"  :badge-text="progress.refTimes" :showArrow="false"  />
		<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.relateDec" :showArrow="false" />
				-->
			<view class="" v-if="isLeader">
						<view class="oa-node ">
							<uni-list>	
								<uni-list-item :showText="true" title="专著、论文名称"  :badge-text="paperName" :showArrow="false"  />
								<uni-list-item :showText="true" title="完成人"  :badge-text="completePerson" :showArrow="false" />
								<uni-list-item :showText="true" title="申请人排位"  :badge-text="applyPersonSort" :showArrow="false"  />
								<uni-list-item :showText="true" title="发表时间"   :badge-text="publishDate" :showArrow="false" />
								<uni-list-item :showText="true" title="收录类别"    :badge-text="dirCate" :showArrow="false"/>
								<uni-list-item :showText="true" title="被引用次数"  :badge-text="refTimes" :showArrow="false"  />
								<uni-list-item :showText="true" title="有关说明"   :badge-text="relateDec" :showArrow="false" />
							</uni-list>
							<uni-load-more status="noMore"></uni-load-more>
						</view>	
					</view>
			<view class="" v-else>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">专著、论文名称</view>
					<input class="uni-input" :value="paperName" name="paperName" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">完成人</view>
					<input class="uni-input" :value="completePerson" name="completePerson" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">申请人排位</view>
					<input class="uni-input" :value="applyPersonSort" name="applyPersonSort" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">发表时间</view>
					<input class="uni-input" :value="publishDate" name="publishDate" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">收录类别</view>
					<input class="uni-input" :value="dirCate" name="dirCate" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">被引用次数</view>
					<input class="uni-input" :value="refTimes" name="refTimes" maxlength="100" placeholder="请输入" />
				</view>
				<view class="uni-list-cell oa-pd15 oa-white">
					<view class="">有关说明</view>
					<input class="uni-input" :value="relateDec" name="relateDec" maxlength="100" placeholder="请输入" />
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
				//projectNo:"",
				datetime:"",
				//id:'',
				
				applyPersonSort: "",
				completePerson: "",
				createTime: "",
				dirCate: "",
				editTime: "",
				flag: false,
				id: "",
				paperName: "",
				projectName: "",
				projectNo: "",
				publishDate: "",
				refTimes: "",
				relateDec: "",
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
				this.$db.ProjectPaperGet({
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
				formdata.Id = this.$data.id
				formdata.projectNo = this.$data.projectNo
				// formdata.editTime = this.$data.datetime
				
				this.$db.ProjectPaperEditor(formdata).then(res=>{			
					console.log('编辑进度',res)
					uni.showModal({
						title:res.msg
					})
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
				this.$db.ProjectPaperDelete({
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
