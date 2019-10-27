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
		<view class="oa-white oa-pd15">
			<view class="example-title">三千两百项目列表</view>
		</view>
		<uni-list>
			<view class="oa-node oa-pd15 oa-white oa-line_bottom" v-for="(item,key) in list">
				<view class="" @click="clickDetail(item[0])">
					<common-task
						status="1"
						:title="item[1]"
						:companyName="item[2]"
						:leader="item[3]"	
						:des="item[5]"		
					></common-task>
				</view>				
			</view>	
		</uni-list>
		
		<view style="height:30px"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				map:{},
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
				console.log(this.AllData.mapData)
				this.setData({ 
					map:{
						latitude:"22.8171885913",
						longitude:"108.3663511276",	
						scale:7,		
						markers:this.AllData.mapData,	
					},
					list :this.AllData.programIDList
				})
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
				uni.navigateTo({
					url:"/pages/5_detail/5_detail?id=" + e.detail.markerId
				})
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
		},
		
	}
</script>

<style>
	.map{
		width: 100vw;
		height: 70vh;
	}
</style>
