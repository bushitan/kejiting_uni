import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


import uniIcon from '@/components/uni-icon/uni-icon.vue'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
Vue.component('uni-icon', uniIcon)
Vue.component('uni-list', uniList)
Vue.component('uni-list-item', uniListItem)

import tabbar from '@/components/4_tabbar/4_tabbar.vue'   //菜单栏
import mark from '@/components/5_mark/5_mark.vue'   //菜单栏
import commonTask from '@/components/common_task/common_task.vue'   //任务node
Vue.component('tabbar', tabbar)
Vue.component('mark', mark)
Vue.component('common-task', commonTask)


//表格

import zTable from '@/components/z-table/z-table.vue'
Vue.component('z-table', zTable)


import noticeData from '@/common/notice_data.js' 
import mapData from '@/common/map_data.js' 
// 公共数据
Vue.prototype.AllData = {
	noticeDuBan: noticeData.DuBan , 
	noticeTongBao: noticeData.TongBao , 
	noticeNews: noticeData.News , 
	mapData:mapData.markers,
	programIDList:noticeData.programIDList,
	programList:noticeData.programList,
}




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