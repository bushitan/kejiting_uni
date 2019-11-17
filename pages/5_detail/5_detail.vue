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
		
		
		<view class="oa-white " v-show="current == 1">		
			<view class="oa-white oa-pd15 title">
				<view class="example-title">2019年11月完成情况</view>
			</view>
										
			<view class="oa-node oa-pd15 ">
				<xx-mark text="进度概况" type="ing"></xx-mark>
			</view>
			<view class="oa-node ">
				<uni-list>
					
					<!--   "id": "9f0d51fcc95b4e3eb573ecc56e0a9397",
					  "projectNo": "2017AA14002",
					  "projectName": "乘用车混批式混流智能制造车身关键工艺和装备技术研发",
					  "doneContentOnMonth": "乘用车关键冲压件模具冲压参数智能监控技术——完成SOR审核，进入PR采购环节。",
					  "doneContentRateOnMonth": "30%",
					  "coaIndicators": "1、关键工装设备柔性快速切换及其精度定位技术——总拼主夹具正在进行刚性验证，相关专利文件正在申请；柔性精确定位单元样机已完成加工，正在标定测试。\n2、白车身主线车体伺服机器人柔性定位技术——已完成柔性定位单元设计开发，正在上汽通用五菱汽车股份有限公司河西基地，宝骏基地，青岛分公司等车身焊装线进行生产验证。\n3、乘用车车身薄板机器人电阻点焊质量智能管控系统——点焊自适应控制箱原型样机已完成加工。\n4、在线焊接质量无损检测技术及机器人视觉实时纠偏算法——正在进行技术SOR校核。\n5、乘用车关键冲压模具冲压参数智能监控技术——模具设计开发中，已在开展传感器测试等工作。",
					  "assistFee": "",
					  "comInvestment": "",
					  "underTakeDoneWorkInfo": "",
					  "projectWorkInfoStage": "目前基本完成各子技术系统架构设计，部分子技术已进入设计加工阶段，总体完成30%工作量。",
					  "projectExistProblem": "公司目前进入产线结构调整阶段，人员工作繁忙，项目工作跟进延迟。",
					  "editTime": "2019-11-07 15:22:08",
					  "createTime": "2019-11-16",
					  "updateTime": "2019-11-16",
					  "groupDate": "2019年11月" -->
					  
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
					<!-- "id": "af98f63a01ec48399204233d012321a2",
					  "editTime": "2019-11-07 15:22:08",
					  "projectNo": "2017AA14002",
					  "projectName": "乘用车混批式混流智能制造车身关键工艺和装备技术研发",
					  "paperName": "",
					  "completePerson": "",
					  "applyPersonSort": "",
					  "publishDate": "",
					  "dirCate": "",
					  "refTimes": "",
					  "relateDec": "",
					  "createTime": "2019-11-16",
					  "updateTime": "2019-11-16",
					  "groupDate": "2019年11月"
					-->				
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
			<!-- 	 "id": "1efd4e8bd91447c9a0b6ebf8898ce729",
					  "editTime": "2019-11-07 15:22:08",
					  "projectNo": "2017AA14002",
					  "projectName": "乘用车混批式混流智能制造车身关键工艺和装备技术研发",
					  "patentName": "",
					  "patentNo": "",
					  "completionPerson": "",
					  "patentType": "",
					  "relateDesc": "",
					  "createTime": "2019-11-16",
					  "updateTime": "2019-11-16",
					  "taskDoneTime": "",
					  "groupDate": "2019年11月" 
					  -->	
				<uni-list>
					<uni-list-item :showText="true" title="专利名称"  :badge-text="progress.patentName" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利编码"  :badge-text="progress.patentNo" :showArrow="false" />
					<uni-list-item :showText="true" title="完成人"  :badge-text="progress.completionPerson" :showArrow="false"  />
					<uni-list-item :showText="true" title="专利类型"   :badge-text="progress.patentType" :showArrow="false" />
					<uni-list-item :showText="true" title="完成时间"    :badge-text="progress.editTime" :showArrow="false"/>
					<uni-list-item :showText="true" title="有关说明"   :badge-text="progress.relateDesc" :showArrow="false" />
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
			
				id:"",
				project:{},
				process:{},
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
				this.$db.ProjectGetDetail({
					id:this.$data.id,
				}).then(res=>{
					console.log(res)
					this.setData({
						project:res.data
					})
				})
				
				this.$db.ProjectGetProgress({
					id:this.$data.id,
				}).then(res=>{
					console.log(res)
					
					var process = res.data[0]
					this.setData({
						projectInfos:process.projectInfos[0],
						patentInfos:process.patentInfos[0],
						paperInfos:process.paperInfos[0],
						achievements:process.achievements[0],
					})
				})
				
				
				// var programList = this.AllData.programList
				// 
				// var tableData = []
				// 
				// console.log(programList[0])
				// var currentTitle = programList[0]
				// var currentProgram = programList[id]
				// 
				// for( var i=0; i<currentTitle.length; i++){
				// 	if ( currentTitle[i] == '联系电话')
				// 		continue
				// 	tableData.push({
				// 			title:currentTitle[i], 
				// 			content:currentProgram[i]
				// 	})
				// }
				// this.setData({
				// 	tableData:tableData
				// })
				
				
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
