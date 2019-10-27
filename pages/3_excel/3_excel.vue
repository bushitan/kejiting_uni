<template>
	<view>
		
		<tabbar :list="tabBars" @ontabtap="clickTab"></tabbar>
		<view class="oa-space_10"></view>
		<view class="oa-node oa-pd15 oa-white oa-line_bottom" v-for="(item,key) in list">
			<common-task
				:status="item.Status"
				:content="item.TaskName"
				:username="item.UserName"
				:realEndTime="item.RealEndTime"
			></common-task>
		</view>	
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
						name: '投资情况',
						id: 'tuijian'
					}, {
						name: '开工率',
						id: 'tiyu'
					}, {
						name: '竣工率',
						id: 'redian'
					},{
						name: '签约率',
						id: 'redian1'
					},
				],
				list:[1,2,3],
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
				this.setData({ list : this.getDuBan()  })
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
