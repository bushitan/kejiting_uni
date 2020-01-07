<template>
	<view>
		
		<!-- <view class="oa-white oa-pd15">
			<view class="example-title">项目进度</view>
		</view> -->

		<view class="oa-white ">
		   <picker @change="bindPickerChange" :value="index" :range="array">
				<uni-list-item 
				title="项目详情(选择区域)" 
				:showArrow="true" 
			    :showBadge="true" :badgeText="array[index]"></uni-list-item>
			</picker>	 
		</view>
		<view class="oa-node oa-pd15 oa-white oa-line_bottom">
			<common-search @search="search" placeholder="请输入关键字进行查询"></common-search>
		</view>
		<view class="oa-space_10"></view>
		
<!-- 		<chart-ring :rate="rate" ></chart-ring>		
		<chart-column></chart-column>
		<chart-line></chart-line> -->
		
		<!-- <view class="oa-space_10"></view>		 -->

		<!-- <view class="oa-white oa-pd15 ">项目详情</view> -->
		<uni-list>
			<view class="oa-node oa-pd15 oa-white oa-line_bottom" v-for="(item,key) in list">
				
				<view class="" @click="clickDetail(item.id)">
					<!-- {{item.id}} -->
					<common-task
						status="1"
						:title="item.projectName"
						:companyName="item.underTakeWorkName"
						:leader="item.leader"	
						:sn="item.projectProgress.substr(0, item.projectProgress.length - 1)"	
						:projectStatus="'项目状态在研'"	
						:des="item.fileReleaseNumber"	
						:showRate="true"
					></common-task>
				</view>	
				
			<!-- 	<view class="" @click="clickDetail(item[0])">
					<common-task
						status="1"
						:title="item[1]"
						:companyName="item[2]"
						:leader="item[3]"	
						:sn="'项目进度'+item[4]"	
						:des="item[5]"		
					></common-task>
				</view>	
				 -->
				
				<!-- <common-task
					status="2"
					:title="item.title"
					:companyName="item.companyName"
					:leader="item.leader"
					:sn="'完成进度'+item.rate"
					:date="item.date"
				></common-task> -->
				
			</view>	
		</uni-list>
		<!-- <uni-load-more v-if="list" status="more"></uni-load-more> -->
		<uni-load-more status="noMore"></uni-load-more>
		<view style="height:60px"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [ '全部', '南宁', '桂林','柳州', '贺州',
					'河池','百色','崇左','来宾',
					'钦州','北海','防城港',
					'贵港','玉林','梧州',
				],
				index: 0,
				
				//顶部tab选项卡
				current: 0,
				tabBars: [
					{
						name: '项目列表',
						id: 'tuijian'
					}, {
						name: '项目详情',
						id: 'tiyu'
					},
				],
				list:[],
				status:"all",
				
				
				rate:[30,30,40],
				
			};
		},
		onLoad(){
			this.onInit()
		},
		methods:{
			/**
			 * @method 初始化
			 */
			onInit(e){
				// this.setData({ 
				// 	// list : this.AllData.program ,
				// 	
				// 	// list :this.AllData.programIDList
				// })
				this.$db.ProjectGetList({
					pageIndex:1,
					pageSize:100,
				}).then(res=>{
					// console.log(res)
					this.setData({
						list:res.data
					})
				})
				
			},
			search(e){
				var value = e.value
				this.$db.ProjectGetList({
					kw:value,
					pageIndex:1,
					pageSize:100,
				}).then(res=>{
					// console.log(res)
					this.setData({
						list:res.data
					})
				})
				
				// this.setData({
				// 	searchName:value
				// })
				// this.$db.listInit(this)
				// this.getList(this.$data.Projectid )
			},
			
			
			/**
			 * @method 选择选项卡
			 */
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				var value = e.target.value
				var kw = this.$data.array[value]
				if(value == 0)
					kw = ""
				this.setData({
					index:value
				})
				
				this.$db.ProjectGetList({
					kw:kw,
					pageIndex:1,
					pageSize:100,
				}).then(res=>{
					console.log(res)
					this.setData({
						list:res.data
					})
				})
				
				
				// this.index = value
				
				// this.setData({rate:this.countryRate[value]})
				
				
				
			},
			
			
			/**
			 * @method 点击菜单
			 */
			clickTab(e){
				console.log(e)
				var index = e.index
				if (this.$data.current == index)
					return
					
				this.setData({
					current:e.index
				})
				var list = []
				switch(index){
					case "0": list = this.getDuBan() ;break;
					case "1": list = this.getTongBao() ;break;
					case "2": list = this.getNews() ;break;
					case "3": list = this.getTongBao() ;break;
				}
				console.log(list)
				this.setData({ list : list })
			},
			// 点击细节
			clickDetail(detailID){
				console.log(detailID)
				uni.navigateTo({
					url:"/pages/5_detail/5_detail?id=" + detailID
				})
			},
			
			getDuBan(){
				return this.AllData.noticeDuBan
			},
			getTongBao(){
				return this.AllData.noticeTongBao
			},
			getNews(){
				return this.AllData.noticeNews
			},
		},
		
	}
</script>

<style>

</style>
