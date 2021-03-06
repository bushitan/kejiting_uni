import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import DB from './db/db.js'
import CODE from './db/code.js'
Vue.prototype.$db = DB;
Vue.prototype.$CODE = CODE;



import uniIcon from '@/components/uni-icon/uni-icon.vue'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniBadge from '@/components/uni-badge/uni-badge.vue'
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
Vue.component('uni-icon', uniIcon)
Vue.component('uni-list', uniList)
Vue.component('uni-list-item', uniListItem)
Vue.component('uni-badge', uniBadge)
Vue.component('uni-segmented-control', uniSegmentedControl)  // 顶部选项卡

import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue' // 加载更多
Vue.component('uni-load-more', uniLoadMore)

import tabbar from '@/components/4_tabbar/4_tabbar.vue'   //菜单栏
import FiveMark from '@/components/5_mark/5_mark.vue'   //菜单栏
import commonTask from '@/components/common_task/common_task.vue'   //任务node
import commonSearch from '@/components/common_search/common_search'   //搜索node
Vue.component('tabbar', tabbar)
Vue.component('mark', FiveMark)
Vue.component('common-task', commonTask)
Vue.component('common-search', commonSearch)

// 项目详情
import uniTabbar from '@/components/base_4_tabbar/tabbar.vue'// 选择条
Vue.component('detail-tabbar',uniTabbar)
import projectDetail from '@/components/1_project/project_detail.vue'// 选择条
Vue.component('project-detail',projectDetail)



import xxMark from '@/components/base_7_mark/mark.vue'
Vue.component('xx-mark', xxMark)


//表格
import zTable from '@/components/z-table/z-table.vue'
Vue.component('z-table', zTable)

// 图表
// import uCharts from '@/components/u-charts/u-charts.js';
// import uCharts from '@/components/u-charts/component.vue';
// Vue.component('u-charts', uCharts);

import ChartsRin from '@/components/6_rin/chart_rin.vue';
Vue.component('chart-rin', ChartsRin);

import chartRing from '@/components/6_rin/6_rin.vue';
Vue.component('chart-ring', chartRing);
import chartColumn from '@/components/6_column/6_column.vue';
Vue.component('chart-column', chartColumn);
import chartLine from '@/components/6_line/6_line.vue';
Vue.component('chart-line', chartLine);



// 基础数据
import noticeData from '@/common/notice_data.js' 
import mapData from '@/common/map_data.js' 

// 滑动
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
Vue.component('uni-swipe-action', uniSwipeAction)  // 滑动条


// 公共数据
Vue.prototype.AllData = {
	noticeDuBan: noticeData.DuBan , 
	noticeTongBao: noticeData.TongBao , 
	noticeNews: noticeData.News , 
	mapData:mapData.markers,
	programIDList:noticeData.programIDList,
	programList:noticeData.programList,
}

Vue.prototype.countryRate = [
	[30,30,40],
	[10,40,50],
	[38,61,1],
	[17,28,56],
	[15,5,80],
	[12,32,56],
	[17,28,56],
	[20,31,50],
	[5,5,90],
	[21,49,53],
	[35,40,25],
	[15,30,55],
	[50,20,30],
	[20,31,50],
	[10,80,10],
]



App.mpType = 'app'

function setData(obj){  
	let that = this;  
	let keys = [];  
	let val,data;  
	Object.keys(obj).forEach(function(key){  
		 keys = key.split('.');  
		 val = obj[key];  
		 data = that.$data;  
		 keys.forEach(function(key2,index){  
			 if(index+1 == keys.length){  
				 that.$set(data,key2,val);  
			 }else{  
				 if(!data[key2]){  
					that.$set(data,key2,{});  
				 }  
			 }  
			 data = data[key2];  
		 })  
	});  
}  
Vue.prototype.setData = setData
const app = new Vue({
    ...App
})
app.$mount()
// ,
// 	"tabBar": {
// 		"color" : "#7A7E83",
// 		"selectedColor" : "#007AFF",
// 		"borderStyle" : "black",
// 		"backgroundColor" : "#F8F8F8",
// 		"list":[
// 			{
// 			    "pagePath" : "pages/index/index",
// 			    "iconPath" : "static/tab_class.png",
// 			    "selectedIconPath" : "static/tab_class.png",
// 			    "text" : "首页"
// 			},
// 			{
// 			    "pagePath" : "pages/course/course",
// 			    "iconPath" : "static/tab_course.png",
// 			    "selectedIconPath" : "static/tab_course.png",
// 			    "text" : "课程"
// 			},
// 			{
// 			    "pagePath" : "pages/classification/classification",
// 			    "iconPath" : "static/tab_class.png",
// 			    "selectedIconPath" : "static/tab_class.png",
// 			    "text" : "分类"
// 			},
// 			{
// 			    "pagePath" : "pages/profile/profile",
// 			    "iconPath" : "static/tab_profile.png",
// 			    "selectedIconPath" : "static/tab_profile.png",
// 			    "text" : "我的"
// 			}
// 		]
// 	}