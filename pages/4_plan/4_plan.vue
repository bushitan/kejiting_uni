<template>
	<view>
		
		<view class="oa-white oa-pd15">
			<view class="example-title">项目进度</view>
		</view>
		<uni-list>
			<view class="oa-node oa-pd15 oa-white oa-line_bottom" v-for="(item,key) in list">
				<view class="" @click="clickDetail(item[0])">
					<common-task
						status="1"
						:title="item[1]"
						:companyName="item[2]"
						:leader="item[3]"	
						:sn="'项目进度'+item[4]"	
						:des="item[5]"		
					></common-task>
				</view>	
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
						name: '项目列表',
						id: 'tuijian'
					}, {
						name: '项目详情',
						id: 'tiyu'
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
				this.setData({ 
					// list : this.AllData.program ,
					
					list :this.AllData.programIDList
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
					case "3": list = this.getTongBao() ;break;
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
