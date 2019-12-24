<template>
	<view>
		
		<view class="oa-white oa-pd15">
			<view class="example-title">最新通知</view>
		</view>
		<uni-list>
			<uni-list-item 
				v-for="(item,key) in list"
				:showArrow="false" 
				:showText="true" 
				:title="item.title" 
				:badge-text="item.text" 
				@click="toDetail(item.url,item.title)"
			 />
			
		</uni-list>
		
		<!-- <tabbar :list="tabBars" @ontabtap="clickTab"></tabbar>
		<view class="oa-space_10"></view>
		<view class="oa-node oa-pd15 oa-white oa-line_bottom" v-for="(item,key) in list">
			<common-task
				:status="item.Status"
				:content="item.TaskName"
				:username="item.UserName"
				:realEndTime="item.RealEndTime"
			></common-task>
		</view>	 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
							
				//顶部tab选项卡
				current: 0,
				tabBars: [
					{
						name: '督办',
						id: 'tuijian'
					}, {
						name: '通报',
						id: 'tiyu'
					}, {
						name: '通知',
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
				this.setData({ list : this.AllData.noticeNews })
				
				// this.$db.getMainInfo().then(res=>{
				// 	// console.log(res)			
				// 	// this.onInit(res)
				// 	var swiperList = res.data.swiper_list
				// 	var articleList = res.data.article_list
				// 	this.setData({
				// 		// swiperList:swiperList,
				// 		list:articleList
				// 	})
				// })
			},
			
			toDetail(url,title){
				url = encodeURIComponent(url)
				// cover = encodeURIComponent(cover)
				uni.navigateTo({
					url:"/pages/article/article?url=" + url + "&title=" + title 
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

</style>
