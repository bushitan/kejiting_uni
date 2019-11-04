<template>
	<view class="page_edu">
		<view class="page_edu_header">
			<!-- <view class="header">
				<image src="/static/icon_main.png" class="btn" @click="program()"></image>
				<view class="input">
					<image src="/static/search.png" class="search" @click="search"></image>
					<input type="text" value="" placeholder="搜索" />
				</view>
				<image src="/static/msg.png" class="btn" @click="notic"></image>
			</view> -->
			<view class="header_content">
				<view class="left">
					<text class="title">{{header.title}}</text>
					<text class="sub_title">{{header.subTitle}}</text>
					<text class="btn" @click="plan()">{{header.btn}}</text>
				</view>
				<view>
					<image src="/static/right.png" style="width: 131px;height: 122px;"></image>
				</view>
			</view>
		</view>
		<view class="page_content">
			<view class="menu">
				<template v-for="(it,i) in menus">
					<view class="item" :key="'menu_'+i">
						<view class="img_view" :style="{background: it.bg}" @click="nav(it.pathUrl)">
							<image :src="it.icon" class="image"></image>
						</view>
						<text class="txt">{{it.txt}}</text>
					</view>
				</template>
			</view>
			<view class="oa-node map_box">
				<map
					:latitude="map.latitude" 
					:longitude="map.longitude"
					:scale="map.scale"
					:markers="map.markers"
					class="map"
					@markertap="clickMarker"
				></map>
			</view>
<!-- 			<view class="oa-node oa-pd15">
				<view class="oa-white oa-pd15">					
						<view class="example-title">下达文号</view>
				</view>
				<uni-list>
					<uni-list-item 
						:show-arrow="true" 
						:title="item.name" 
						v-for="(item,key) in articleList" 
						@click="program()"
					/>				
				</uni-list>
			</view> -->
			
			<!-- <view class="menu_swiper">
				<swiper :indicator-dots="true" 
					:autoplay="true" :interval="3000" 
					:duration="1000" >
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/swiper1.jpg" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/swiper2.jpg" mode=""></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item"><image src="../../static/swiper3.jpg" mode=""></image></view>
					</swiper-item>
				</swiper>
			</view> -->
			<!-- <view class="s_menu">
				<template v-for="(it,i) in second_menus">
					<view class="item" :key="'s_menu_'+i">
						<image :src="it.icon" class="image"></image>
						<text class="txt">{{it.txt}}</text>
					</view>
				</template>
			</view>
			<view class="ad">
				<view class="ad_btn">
					<text class="title">教资面试课上线</text>
					<text class="sub_title">老用户现实立减100元</text>
				</view>
				<image src="/static/tag.png" class="bg"></image>
			</view> -->
		</view>
		<view class="mark" @click="program()">
			<view class="title">下达文号</view>
			<view class="more" >更多</view>
		</view>
		<scroll-view scroll-x="true" class="slider">
			<template v-for="(it, i) in records">
				<view class="item" :key="'slider_item_'+i" 
					:style="{background: it.bg, marginRight: i === records.length - 1 ? '15px' : '0px'}"
					@click="program()">
					<view class="item_content" >
						<view class="title">
							<text class="first">{{it.title}}</text>
							<text class="main">{{it.mainTeacher}}</text>
							<!-- <text class="sub" :style="{color:it.subColor}">标题名称</text> -->
						</view>
						<!-- <image class="image" :src="it.icon"></image>
						<text class="free">免\n费</text> -->
					</view>
				</view>
			</template>
		</scroll-view>
		<view style="height:30px" class="oa-white"></view>
		<!-- <view class="footer">
			———— 广西科技厅提供技术支持 ————
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				header:{
					title:"广西科技项目管理APP",
					subTitle:"三百两千项目",
					btn:"项目大数据",
					
				},
				
				map:{},
				articleList:[
					{name:"桂科创字[2017]25号"},
					{name:"桂科创字[2017]25号"},
					{name:"桂科计字[2017]204号"},
					{name:"桂科计字[2018]118号"},
					{name:"桂科计字[2018]242号"},
					{name:"桂科计字[2019]46号"},
				],
				
				
				menus: [{
						bg: 'linear-gradient(0deg,rgba(9,216,162,1),rgba(90,242,217,1))',
						icon: '/static/graduation.png',
						pathUrl:"/pages/2_program/2_program",
						txt: '三百两千',
						isFree: true
					},{
						bg: 'linear-gradient(0deg,rgba(9,177,252,1),rgba(24,200,255,1))',
						icon: '/static/question_bank.png',
						pathUrl:"/pages/4_plan/4_plan",
						txt: '项目进度',
						isFree: true
					},
					{
						bg: 'linear-gradient(0deg,rgba(251,184,35,1),rgba(255,228,40,1))',
						icon: '/static/live.png',
						pathUrl:"/pages/1_notic/1_notic",
						txt: '通知公告',
						isFree: false
					},
					// {
					// 	bg: 'linear-gradient(0deg,rgba(255,126,34,1),rgba(240,184,27,1))',
					// 	icon: '/static/emblem.png',
					// 	pathUrl:"/pages/3_excel/3_excel",
					// 	txt: '项目报表',
					// 	isFree: true
					// }
				],
				second_menus: [{
						icon: '/static/exam.png',
						txt: '考试教案'
					},
					{
						icon: '/static/textbook.png',
						txt: '教材教案',
					},
					{
						icon: '/static/book_ticket.png',
						txt: '青书券'
					},
					{
						icon: '/static/more.png',
						txt: '全部课程'
					}
				],
				records: [{
						bg: 'linear-gradient(-30deg,rgba(171,218,255,1),rgba(215,239,255,1))',
						title: '桂科创字[2017]25号',
						// mainTeacher: '2019-10-22',
						// subTitle: '标题名称',
						// subColor: '#15639F',
						// icon: '/static/test2.png',
						// isFree: true
					},
					{
						bg: 'linear-gradient(-30deg,rgba(192,253,227,1),rgba(224,252,240,1))',
						title: '桂科创字[2017]25号',
					},
					{
						bg: 'linear-gradient(-30deg,rgba(171,218,255,1),rgba(215,239,255,1))',
						title: '桂科计字[2017]204号',
					},
					{
						bg: 'linear-gradient(-30deg,rgba(171,218,255,1),rgba(215,239,255,1))',
						title: '桂科计字[2018]118号',
					},
					{
						bg: 'linear-gradient(-30deg,rgba(192,253,227,1),rgba(224,252,240,1))',
						title: '桂科计字[2018]242号',
					},
					{
						bg: 'linear-gradient(-30deg,rgba(171,218,255,1),rgba(215,239,255,1))',
						title: '桂科计字[2019]46号',
					}
				]
			}
		},
		onLoad() {
			this.onInit()
		},
		methods: {
			onInit(e){
				this.setData({ 
					map:{
						latitude:"22.8171885913",
						longitude:"108.3663511276",	
						scale:6,		
						markers:this.AllData.mapData,	
					},
				})
			},
			
			nav(pathUrl){
				uni.navigateTo({
					url:pathUrl
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
			 * @method 项目
			 */
			program(){
				this.nav("/pages/2_program/2_program")
			},
			/**
			 * @method 通知公告
			 */
			notic(){
				this.nav("/pages/1_notic/1_notic")
			},
			/**
			 * @method 搜索
			 */
			search(){
				this.nav("/pages/3_excel/3_excel")
			},
		
			/**
			 * @method 项目进度
			 */
			plan(){
				this.nav("/pages/4_plan/4_plan")
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
		background-color: #ebebeb;
	}
</style>
<style lang="scss" scoped>
	@function realSize($args) {
		@return $args / 1.5;
	}

	.page_edu {
		width: 100%;
	}

	.page_edu_header {
		padding-top: var(--status-bar-height);
		background-color: #0bc99d;
		width: 100%;
		padding-top:realSize(30px);
		// height: realSize(415px);
		height: realSize(330px);

		.header {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: realSize(20px);

			.btn {
				width: realSize(36px);
				height: realSize(30px);
			}

			.input {
				height: realSize(59px);
				width: 100%;
				margin-left: realSize(20px);
				margin-right: realSize(20px);
				background: rgba(255, 255, 255, 1);
				border-radius: realSize(30px);
				display: flex;
				flex-direction: row;
				align-items: center;

				.search {
					width: realSize(30px);
					height: realSize(30px);
					margin-left: realSize(20px);
					margin-right: realSize(20px);
				}
			}
		}

		.header_content {
			display: flex;
			flex-direction: row;

			.left {
				display: flex;
				flex-direction: column;
				width: 57%;
				margin-top: 10px;
				margin-left: 15px;
				margin-right: 15px;

				.title {
					width: realSize(419px);
					height: realSize(59px);
					font-size: 17pt;
					font-weight: bold;
					color: rgba(255, 255, 255, 1);
				}

				.sub_title {
					margin-top: 3px;
					font-size: 11pt;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);

					background: linear-gradient(0deg, rgba(120, 255, 224, 1) 0%, rgba(255, 255, 255, 1) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				.btn {
					margin-top: 3px;
					width: realSize(198px);
					height: realSize(60px);
					background: linear-gradient(-30deg, rgba(252, 135, 29, 1), rgba(246, 185, 9, 1));
					box-shadow: 0px 4px 10px 0px rgba(255, 121, 0, 0.5);
					border-radius: realSize(30px);
					color: rgba(255, 255, 255, 1);
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}

	.page_content {
		width: 100%;
		margin-top: -74px;
		// background-color:#eee;
		.menu {
			margin-left: 10px;
			margin-right: 10px;
			padding-left: 10px;
			padding-right: 10px;
			height: realSize(176px);
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 10px 10px 0px rgba(0, 161, 124, 0.1);
			border-radius: 10px;
			display: flex;
			flex-direction: row;
			align-items: stretch;
			justify-content: space-around;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.img_view {
					width: 60px;
					height: 60px;
					border-radius: 30px;
					display: flex;
					align-items: center;
					justify-content: center;

					.image {
						width: 50px;
						height: 50px;
					}
				}

				.txt {
					margin-top: 5px;
					font-size: 14px;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
		.map_box{
			padding: 15px;
		}
		.map{
			width: 100%;
			height: 40vh;
			box-shadow: 0px 5px 5px 0px rgba(0,0,0, 0.2);
		}
		.menu_swiper{
			display: flex;
			flex-direction: row;
			align-items: stretch;
			justify-content: space-between;
			margin-top: 10px;
			margin-left: 10px;
			margin-right: 10px;
			padding: 0px 0 15px;
			swiper{
				width:100%;
				height:200px;
			}
			image{
				width: 100%;
			}
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			
				.image {
					width: 35px;
					height: 35px;
				}
			
				.txt {
					margin-top: 5px;
					font-size: 14px;
					color: rgba(51, 51, 51, 1);
				}
			}
		}

		.s_menu {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			justify-content: space-between;
			margin-top: 15px;
			margin-left: 10px;
			margin-right: 10px;
			padding-left: 10px;
			padding-right: 10px;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.image {
					width: 35px;
					height: 35px;
				}

				.txt {
					margin-top: 5px;
					font-size: 14px;
					color: rgba(51, 51, 51, 1);
				}
			}
		}

		.ad {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.bg {
				position: absolute;
				width: 120px;
				height: 105px;
				left: 0;
			}

			.ad_btn {
				width: 100%;
				height: 63px;
				margin: 30px;
				background: linear-gradient(0deg, rgba(253, 155, 28, 1), rgba(251, 197, 33, 1));
				border-radius: 67px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.title {
					font-size: realSize(38px);
					font-family: PingFang-SC-Heavy;
					font-weight: 800;
					color: rgba(255, 255, 255, 1);
				}

				.sub_title {
					background: linear-gradient(0deg, rgba(255, 128, 37, 1), rgba(255, 153, 32, 1));
					box-shadow: 0px 4px 5px 0px rgba(92, 53, 48, 0.3), 0px 1px 0px 0px rgba(228, 228, 228, 1);
					border-radius: realSize(24px);
					font-size: realSize(24px);
					font-family: PingFang-SC-Heavy;
					font-weight: 800;
					font-style: italic;
					color: rgba(255, 236, 177, 1);
					line-height: realSize(26px);
				}
			}
		}
	}
	
	.mark{
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		padding: 15px 15px 0;
		
		.title{
			font-size:11pt; 
			color:#0bc99d;
			font-weight:bold;
		}
		.more{ 
			font-size: 9pt;
			color: #888;
		}
	}

	.slider {
		white-space: nowrap;
		width: 100%;
		background-color: white;

		.item {
			display: inline-block;
			margin-left: 15px;
			margin-top: 13px;
			margin-bottom: 13px;
			width: 60%;
			border-radius: 10px;

			.item_content {
				display: flex;
				flex-direction: row;

				.title {
					width: 36%;
					margin: 20px;
					display: flex;
					flex-direction: column;
					
					.first {
						font-size: 16px;
						color:rgba(46,65,69,1);
					}
					.main {
						font-size: 13px;
						color:rgba(79,103,101,1);
						word-break:break-all; width:200px; overflow:auto;

					}
					.sub {
						width: 60px;
						font-size: 10px;
						margin-top: 20px;
						background:rgba(255,255,255,0.4);
						border-radius:5px;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.image {
					margin-top: 35px;
					width: 80px;
					height: 80px;
				}

				.free {
					background: rgba(11, 147, 252, 1);
					border-radius: 0px 0px 22px 22px;
					width: 25px;
					height: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #FFFFFF;
					font-size: 14px;
				}
			}
		}
	}
	
	.footer{
		display: flex;
		justify-content: center;
		background-color: #fff;
		font-size: 9pt;
		color: #888;
		padding: 15px;
	}
	// .page_edu{
	// 	
	// 	background-color: #fff;
	// }
</style>
