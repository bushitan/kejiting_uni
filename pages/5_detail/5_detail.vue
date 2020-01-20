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
		<view class="oa-space_10"></view>
		
		<!-- <view class="oa-white oa-pd15">
			<view class="example-title">项目详情</view>
		</view> -->
		
		
		<view class="oa-white " v-show="current == 0">		
			<!-- <z-table :tableData="tableData" :columns="columns" :stickSide="true"></z-table>	
			 -->
			 <view class="oa-node oa-pd15">
			 	<xx-mark text="项目详细情况" type="pre"></xx-mark>
			 </view>
			
			<uni-list>
				<uni-list-item  :showText="true" title="三百两千名称"  :badge-text="project.projectNameInScene" :showArrow="false"/>	
				<uni-list-item  :showText="true" title="项目名称"  :badge-text="project.projectName" :showArrow="false"/>
				<uni-list-item  :showText="true" title="下达文号"  :badge-text="project.fileReleaseNumber" :showArrow="false"/>
				<uni-list-item  :showText="true" title="承担单位名称"  :badge-text="project.underTakeWorkName" :showArrow="false"/>
				<uni-list-item  :showText="true" title="负责人"  :badge-text="project.leader" :showArrow="false"/>
				<uni-list-item  :showText="true" title="联系电话"  :badge-text="project.contactNumber" :showArrow="false"/>
				<uni-list-item  :showText="true" title="邮箱"  :badge-text="project.email" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目编号"  :badge-text="project.projectNo" :showArrow="false"/>
				<uni-list-item  :showText="true" title="责任处室"  :badge-text="project.leaderWork" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目类别"  :badge-text="project.projectCate" :showArrow="false"/>
				<uni-list-item  :showText="true" title="承担单位地址"  :badge-text="project.underTakeWorkAddr" :showArrow="false"/>
				<uni-list-item  :showText="true" title="总投资"  :badge-text="project.totalInvestment" :showArrow="false"/>
				<uni-list-item  :showText="true" title="科技厅资助经费"  :badge-text="project.stFunding" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目开始时间"  :badge-text="project.projectStartTime" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目结束时间"  :badge-text="project.projectEndTime" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目进度"  :badge-text="project.projectProgress" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目状态"  :badge-text="project.projectStatus" :showArrow="false"/>
				<uni-list-item  :showText="true" title="技术指标"  :badge-text="project.technicalIndex" :showArrow="false"/>
				<uni-list-item  :showText="true" title="经济指标"  :badge-text="project.economicIndicators" :showArrow="false"/>
				<uni-list-item  :showText="true" title="建设指标"  :badge-text="project.overallObjective" :showArrow="false"/>
				<uni-list-item  :showText="true" title="其他指标"  :badge-text="project.otherIndicators" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目申请时间"  :badge-text="project.projectApprovalTime" :showArrow="false"/>
				<uni-list-item  :showText="true" title="项目立项下达时间"  :badge-text="project.projectApplyTime" :showArrow="false"/>
				<uni-list-item  :showText="true" title="合同签订时间"  :badge-text="project.projectContractSignTime" :showArrow="false"/>
				<uni-list-item  :showText="true" title="总体目标"  :badge-text="project.overallObjective" :showArrow="false"/>
			</uni-list>
		</view>
		
		
		<view class=" " v-show="current == 1">		
			<project-detail :processDetail="processDetail"></project-detail>
		
		</view>
		<view class="oa-space_60">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
							
				//顶部tab选项卡
				current:0,
				tabList:['项目详情','实施进度'],		
				
				indexTabber:0,		
				tabBars:[
					{name:'项目进度',id:'1'},
					{name:'论文',id:'2'},
					{name:'成功',id:'3'},
					{name:'专利',id:'4'},
				],
				
				id:"",
				project:{},
				process:{},
				processDetail:{},
				projectInfos:{}, //项目概况
				paperInfos:{},//论文
				achievements:{},//成果
				patentInfos:{},//专利
				
				
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
			this.setData({
				id:options.id
			})
			// var id = options.id
			this.onInit()
		},
		methods:{
			/**
			 * @method 初始化
			 */
			onInit(){
				this.getDetail()
				this.getProgress()
			},
			
			getDetail(){				
				this.$db.ProjectGetDetail({
					id:this.$data.id,
				}).then(res=>{
					console.log(res)
					this.setData({
						project:res.data
					})
				})
			},
			getProgress(){				
				this.$db.ProjectGetProgress({
					id:this.$data.id,
				}).then(res=>{
					console.log(res)
					
					var process = res.data
					this.setData({
						processDetail:process,
						projectInfos:process.projectInfos,
						patentInfos:process.patentInfos,
						paperInfos:process.paperInfos,
						achievements:process.achievements,
					})
				})
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
			
			/***********点击详情后点事情************/
			// 点击详情的细节状态
			clickTabbar(e){
				console.log(e)
				// this.setData({
				// 	indexTabber:1,
				// 	// Status:this.$static.ProjectStatus[e.index].DicId
				// })
				// this.$db.listInit(this)
				// this.getList()
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


			<!-- <detail-tabbar :list="tabBars" @ontabtap="clickTabbar"></detail-tabbar>
		
			<view class="oa-white oa-pd15 title">
				<view class="example-title">2019年11月完成情况</view>
			</view>
										
			<view class="oa-node oa-pd15 ">
				<xx-mark text="进度概况" type="ing"></xx-mark>
			</view>
			<view class="oa-node ">
				<uni-list>					
					<uni-list-item  :showText="true" title="本月完成内容"  :badge-text="projectInfos.doneContentOnMonth" :showArrow="false"/>
					<uni-list-item :showText="true" title="工作量占比"   :badge-text="projectInfos.doneContentRateOnMonth" :showArrow="false"/>
					<uni-list-item :showText="true" title="考核指标"   :badge-text="projectInfos.coaIndicators" :showArrow="false" />
					<uni-list-item :showText="true" title="资助经费"   :badge-text="projectInfos.assistFee" :showArrow="false" />
					<uni-list-item :showText="true" title="配套资金"   :badge-text="projectInfos.comInvestment" :showArrow="false" />
					<uni-list-item :showText="true" title="配套内容"  :badge-text="projectInfos.underTakeDoneWorkInfo" :showArrow="false"   />
					<uni-list-item :showText="true" title="总体进度"  :badge-text="projectInfos.projectWorkInfoStage" :showArrow="false"  />
					<uni-list-item :showText="true" title="存在的问题"   :badge-text="projectInfos.projectExistProblem" :showArrow="false" />
				</uni-list>
			</view>
			
			<view class="oa-node oa-pd15 ">
				<xx-mark text="论文"  type="close"></xx-mark>
			</view>
			<view class="oa-node ">		
				<uni-list>
					<uni-list-item :showText="true" title="专著、论文名称"  :badge-text="progress.paperName" :showArrow="false"  />
					<uni-list-item :showText="true" title="完成人"  :badge-text="progress.completePerson" :showArrow="false" />
					<uni-list-item :showText="true" title="申请人排位"  :badge-text="progress.applyPersonSort" :showArrow="false"  />
					<uni-list-item :showText="true" title="发表时间"   :badge-text="progress.publishDate" :showArrow="false" />
					<uni-list-item :showText="true" title="收录类别"    :badge-text="progress.dirCate" :showArrow="false"/>
					<uni-list-item :showText="true" title="被引用次数"  :badge-text="progress.refTimes" :showArrow="false"  />
					<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.relateDec" :showArrow="false" />
				</uni-list>
			</view>		

			<view class="oa-node oa-pd15 ">

				<xx-mark text="成果" type="complete"></xx-mark>
			</view>
			<view class="oa-node ">
				<uni-list>
					<uni-list-item :showText="true" title="成果名称"  :badge-text="progress.projectName" :showArrow="false"  />
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
					<uni-list-item :showText="true" title="专利名称"  :badge-text="progress.patentName" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利编码"  :badge-text="progress.patentNo" :showArrow="false" />
					<uni-list-item :showText="true" title="完成人"  :badge-text="progress.completionPerson" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利类型"   :badge-text="progress.patentType" :showArrow="false" />
					<uni-list-item :showText="true" title="完成时间"    :badge-text="progress.editTime" :showArrow="false"/>
					<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.relateDesc" :showArrow="false" />
				</uni-list>
			</view>	 -->