<template>
	<view>
		
		<!-- 顶部选项卡 -->
		<view class="oa-node ">			
			<uni-segmented-control 
				:current="current" 
				:values="tabList" 
				style-type="text" 
				@clickItem="onClickItem"
			/>
		</view>
		
		<!-- <view class="oa-white oa-pd15">
			<view class="example-title">项目详情</view>
		</view> -->
		
		
		<view class="oa-white oa-pd15" v-show="current == 0">		
			<z-table :tableData="tableData" :columns="columns" :stickSide="true"></z-table>	
		</view>
		
		
		<view class="oa-white " v-show="current == 1">		
			<view class="oa-white oa-pd15 title">
				<view class="example-title">2019年10月完成情况</view>
			</view>
										
			<view class="oa-node oa-pd15 ">
				<xx-mark text="进度概况" type="ing"></xx-mark>
			</view>
			<view class="oa-node ">
				<uni-list>
					<uni-list-item  :showText="true" title="本月完成内容"  :badge-text="progress.ttt" :showArrow="false"/>
					<uni-list-item :showText="true" title="工作量占比"   :badge-text="progress.ttt" :showArrow="false"/>
					<uni-list-item :showText="true" title="考核指标"   :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="资助经费"   :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="配套资金"   :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="配套内容"  :badge-text="progress.ttt" :showArrow="false"   />
					<uni-list-item :showText="true" title="总体进度"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="存在的问题"   :badge-text="progress.ttt" :showArrow="false" />
				</uni-list>
			</view>
			
			<view class="oa-node oa-pd15 ">
				<xx-mark text="论文"  type="close"></xx-mark>
			</view>
			<view class="oa-node ">
				<uni-list>
					<uni-list-item :showText="true" title="专著、论文名称"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="完成人"  :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="申请人排位"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="发表时间"   :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="收录类别"    :badge-text="progress.ttt" :showArrow="false"/>
					<uni-list-item :showText="true" title="被引用次数"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.ttt" :showArrow="false" />
				</uni-list>
			</view>		

			<view class="oa-node oa-pd15 ">
				<xx-mark text="成果" type="complete"></xx-mark>
			</view>
			<view class="oa-node ">
				<uni-list>
					<uni-list-item :showText="true" title="成果名称"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="完成人"  :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="申请人排位"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="获奖时间"   :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="奖励类别"    :badge-text="progress.ttt" :showArrow="false"/>
					<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.ttt" :showArrow="false" />
				</uni-list>
			</view>
			
			<view class="oa-node oa-pd15 ">
				<xx-mark text="专利"></xx-mark>
			</view>
			<view class="oa-node ">
				<uni-list>
					<uni-list-item :showText="true" title="专利名称"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利编码"  :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="完成人"  :badge-text="progress.ttt" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利类型"   :badge-text="progress.ttt" :showArrow="false" />
					<uni-list-item :showText="true" title="完成时间"    :badge-text="progress.ttt" :showArrow="false"/>
					<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.ttt" :showArrow="false" />
				</uni-list>
			</view>
			
								

		</view>
		
		<!-- <uni-list>
			<uni-list-item 
				v-for="(item,key) in list"
				:showArrow="false" 
				:showText="true" 
				:title="item" 
			 />
			
		</uni-list> -->
		
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
				tabList:['项目详情','实施进度'],
			
				
				list:[],
				status:"all",
				
				progress:{
					ttt:"",
				},
											

							// 表格
			tableData : [
				{title:"三百两千中项目名称",content:"1"},
				{title:"项目名称",content:" "},
				{title:"承担单位名称",content:" "},
				{title:"负责人",content:" "},
				// {title:"联系电话",content:" "},
				{title:"邮箱",content:" "},
				{title:"项目编号",content:" "},
				{title:"责任处室",content:" "},
				{title:"项目类别",content:" "},
				{title:"承担单位地址",content:" "},
				{title:"总投资",content:" "},
				{title:"科技厅资助经费",content:" "},
				{title:"项目开始时间",content:" "},
				{title:"项目结束时间",content:" "},
				{title:"项目进度",content:" "},
				{title:"技术指标",content:" "},
				{title:"经济指标",content:" "},
				{title:"建设指标",content:" "},
				{title:"其他指标",content:" "},
				{title:"项目状态",content:" "},
				{title:"项目申请时间",content:" "},
				{title:"项目立项下达时间",content:" "},
				{title:"合同签订时间",content:" "},
				{title:"总体目标",content:" "},
				{title:"下达文号",content:" "},
			],
			columns :[
				{title:"名称",key:"title",width:250},
				{title:"详情",key:"content",width:20000,height:400},
			],
				
			};
		},
		onLoad(options){
			console.log(options)
			var id = options.id
			this.onInit(id)
		},
		methods:{
			/**
			 * @method 初始化
			 */
			onInit(id){
				var programList = this.AllData.programList
				
				var tableData = []
				
				console.log(programList[0])
				var currentTitle = programList[0]
				var currentProgram = programList[id]
				
				for( var i=0; i<currentTitle.length; i++){
					if ( currentTitle[i] == '联系电话')
						continue
					tableData.push({
							title:currentTitle[i], 
							content:currentProgram[i]
					})
				}
				this.setData({
					tableData:tableData
				})
				
				
				// for( var i=0; i<programList[0].length; i++){
				// 	// var program = programList[0]
				// 	tableData.push({
				// 		{title:"下达文号",content:" "}
				// 	})
				// }
				// 	console.log(programList[i])
				// 	// tableData[i].content = programList[i+1]
				// }
				// this.setData({
				// 	tableData:
				// })
				// this.setData({
				// 	list:programList[id]
				// })
				// this.setData({ list : this.AllData.noticeNews })
			},
			
			/**
			 * @method 切换顶部选项卡
			 */
			onClickItem(index) {
				console.log(index)
				// debugger
				if (this.current !== index) {
					this.setData({
						current:index
					})
				}
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
	.title{
		text-align: center;
		font-size: 13pt;
		font-weight: bold;
	}
</style>
