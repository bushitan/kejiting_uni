<template>
	<view>
		<view class="oa-node ">
			<map 
				:latitude="map.latitude" 
				:longitude="map.longitude"
				:scale="map.scale"
				:markers="map.markers"
				class="map"
				@markertap="clickMarker"
			></map>
		</view>
		<!-- <view class="oa-node ">			
			<tabbar :list="tabBars" @ontabtap="clickTab"></tabbar>
		</view> -->
		
		<!-- 暂时屏蔽 -->
		<!-- <view class="oa-white ">
		   <picker @change="bindPickerChange" :value="index" :range="array">
				<uni-list-item 
				title="选择区域" 
				
			    :showBadge="true" :badgeText="array[index]"></uni-list-item>
			</picker>	
		</view> -->
	<!-- 	<uni-list-item  class="oa-white "
			:showArrow="false" 
			title="统计信息" 
		></uni-list-item> -->
		
		<!-- <chart-ring :num="dataNum" :list="[1,23]" :text="'asd'"></chart-ring> -->
		
		
		<chart-ring :rate="rate" ></chart-ring>
		
		<chart-column></chart-column>
		<chart-line></chart-line>
		
		
		
		
		
		<view class="oa-space_10"></view>
		
		<view class="more">			
			<button  type="primary" size="mini" @click="toPlan">查看更多项目</button>
		</view>
		
		
		<!-- <view class="oa-white ">
		   <picker @change="bindPickerChange" :value="index" :range="array">
				<uni-list-item 
				title="项目详情(选择区域)"
				:showArrow="true" 
			    :showBadge="true" :badgeText="array[index]"></uni-list-item>
			</picker>	 
		</view>
		<uni-list>
			<view class="oa-node oa-pd15 oa-white oa-line_bottom" v-for="(item,key) in list">
				<view class="" @click="clickDetail(item.id)">
					<common-task
						status="1"
						:title="item.projectName"
						:companyName="item.underTakeWorkName"
						:leader="item.leader"	
						:des="item.fileReleaseNumber"		
					></common-task>
				</view>				
			</view>	
		</uni-list> -->
		
		<!-- <uni-load-more v-if="isMore" status="more"></uni-load-more> -->
		
		<!-- <uni-load-more status="noMore"></uni-load-more> -->
		<view style="height:60px"></view>
	</view>
</template>

<script>
	
	
	export default {
		data() {
			return {
				map:{},
				
				title: 'picker',
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
						name: '责任单位',
						id: 'tuijian'
					}, {
						name: '项目列表',
						id: 'tiyu'
					}, {
						name: '总体情况',
						id: 'redian'
					},
				],
							
				
				list:[],
				status:"all",
				
				dataNum:{
					pre:40,
					ing:30,
					complete:30,
				},
				
				rate:[],
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
				// console.log(this.AllData.mapData)
				this.setData({ 
					map:{
						latitude:"22.8171885913",
						longitude:"108.3663511276",	
						scale:7,		
						markers:this.AllData.mapData,	
					},
					// list :this.AllData.programIDList
				})
				this.setData({rate:[3,99],})
				// this.$db.ProjectGetList({
				// 	pageIndex:1,
				// 	pageSize:100,
				// }).then(res=>{
				// 	console.log(res)
				// 	this.setData({
				// 		list:res.data
				// 	})
				// })
				
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
				
				// this.setData({rate:this.countryRate[value]})
			},
			
			
			
			
			// 点击细节
			clickDetail(detailID){
				console.log(detailID)
				uni.navigateTo({
					url:"/pages/5_detail/5_detail?id=" + detailID
				})
				
			},
			
			// 点击坐标
			clickMarker(e){
				console.log(e.detail.markerId)
				// uni.navigateTo({
				// 	url:"/pages/5_detail/5_detail?id=" + e.detail.markerId
				// })
				
				this.toPlan()
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
				}
				console.log(list)
				this.setData({ list : list })
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
			
			toPlan(){
				uni.navigateTo({
					url:'/pages/4_plan/4_plan'
				})
			},
		},
		
	}
</script>

<style>
	.map{
		width: 100vw;
		height: 50vh;
	}
	.more{
		/* font-size: 11pt;
		color: #007AFF; */
		position: fixed;
		bottom: 15px;
		display: flex;
		left: 0;
		right: 0;
		justify-content: center;
		font-weight: bold;
		text-align: center;
		padding: 15px;
	}
	page{
		background-color: #ffffff;
	}
</style>
