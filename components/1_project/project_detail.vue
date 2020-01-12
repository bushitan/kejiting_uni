<template>
		<view class="">
			<detail-tabbar :list="tabBars" @ontabtap="clickTabbar"></detail-tabbar>
			
			<view class="">
				<uni-list>
					<uni-list-item 
						v-for="(item,key) in list"
						:showArrow="true" 
						:showText="true" 
						:title="item.title" 
						:badge-text="item.text" 
						@click="toDetail(item.url,item.title)"						
					 />					
				</uni-list>				
			</view>			
			<uni-load-more status="noMore"></uni-load-more>
		</view>
</template>

<script>
	
	export default {
		props:{
			processDetail:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		data() {
			return {
				indexTabber:0,
				tabBars:[
					{name:'项目进度',id:'1'},
					{name:'论文',id:'2'},
					{name:'成果',id:'3'},
					{name:'专利',id:'4'},
				],
				
				list:[
					// {title:"2019年11月" , text:"详情", url:""},
				],
				
				detail:{},
				
				projectInfos:[],
				paperInfos:[],
				achievements:[],
				patentInfos:[],
			}
		},
		
		watch:{
			processDetail:{
				handler: function (val) {
					if (!val.hasOwnProperty("projectInfos"))
						return 
					var detail = val
					var projectInfos = []					
					for (var i = 0; i < detail.projectInfos.length ; i++)
						projectInfos.push({
							title: detail.projectInfos[i].groupDate , 
							text:"详情", 
							url : "/pages/5_detail/pro_process?projectNo=" + detail.projectInfos[i].projectNo +  "&datetime=" + detail.projectInfos[i].editTime ,
						})
					var paperInfos = []					
					for (var i = 0; i < detail.paperInfos.length ; i++)
						paperInfos.push({title: detail.paperInfos[i].paperName , text:"论文详情", url : "" })
					var achievements = []					
					for (var i = 0; i < detail.achievements.length ; i++)
						achievements.push({title: detail.achievements[i].achievementName , text:"成果详情", url : "" })
					var patentInfos = []					
					for (var i = 0; i < detail.patentInfos.length ; i++)
						patentInfos.push({title: detail.patentInfos[i].patentName , text:"专利详情", url : "" })						
					
					this.setData({
						list:projectInfos,
						projectInfos:projectInfos,
						paperInfos:paperInfos,
						achievements:achievements,
						patentInfos:patentInfos,
					})
				},
				deep: true,
				immediate: true,
			}
		},
		
		methods:{
			/***********点击详情后点事情************/
			// 点击详情的细节状态
			clickTabbar(e){
				console.log(this.$data)
				this.setData({
					indexTabber:e.index,
				})
				switch(e.index){
					case '0' : this.setData({ list : this.$data.projectInfos}) ; break;
					case '1' : this.setData({ list : this.$data.paperInfos}) ; break;
					case '2' : this.setData({ list : this.$data.achievements}) ; break;
					case '3' : this.setData({ list : this.$data.patentInfos}) ; break;
				}
				
				// console.log(this.$data.projectInfos) //项目进度
				// console.log(this.$data.paperInfos)  //论文
				// console.log(this.$data.achievements)//成果
				// console.log(this.$data.patentInfos) //专利
			},
			
			toDetail(url,title){
				uni.navigateTo({
					url:url
				})
			},
		},
	}
</script>

<style>
</style>
