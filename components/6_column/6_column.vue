<template>
	<view class="content">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">全区各地市资助金费图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			 @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts"  @touchstart="touchMix" @touchmove="moveMix"
			 @touchend="touchEndMix"></canvas>
			 <!-- disable-scroll=true -->
			<!--#endif-->
		</view>
	</view>
</template>

<script>

	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;
	var canvaLineA = null;
	var canvaLineB = null;
	var canvaArea = null;
	var canvaGauge = null;
	var canvaCandle = null;
	var canvaMix = null;
	var canvaColumnMeter = null;

	export default {
		props:{
			text:{
				type:String,
				default :()=>{
					return "321"
				},
			},
			type:{
				type:String,
				default :"pre",
			},
		},
		data() {
            return {
				
				cWidth: '',
				cHeight: '',
				cWidth2: '', //横屏图表
				cHeight2: '', //横屏图表
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 20, //x轴单屏数据密度
				sliderMax: 50,
				
			}
		},
		
		created(){
			
			_self = this
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.cWidth2 = uni.upx2px(700);
			this.cHeight2 = uni.upx2px(1100);
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(24);
			this.gaugeWidth = uni.upx2px(30);
			
			
			this.onInit();			
			// this.getServerData();
		},
		methods:{
			onInit(){
				let Mix = {
					categories: [],
					series: []
				};
				Mix.categories = [  '南宁', '市辖区', '桂林','柳州', '贺州', 
					'河池','百色','崇左',
					// '来宾','钦州' ,'防城港','贵港',
					'北海','玉林','梧州',
				]
				Mix.series = [
					{
						color: "#1890ff",
						name: "数量（项）",
						type: "column",
						data:[40,1,21,18,4,
							1, 1 ,1.3,
							3, 2,1,	
						],
					},
					{
						color: "red",
						name: "资助金费（亿元）",
						type: "column",
						data:[4.86,0.12,2.058, 2.429, 0.335,  
							0.15,0.1,0.245,
							0.265,0.853,0.11		
										// 100,45,87,23,161,78,34,98,23,54,67,89
						],
					},
				]
				this.showMix("canvasMix", Mix);
			},
			
			
			
			
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					data: {},
					success: function(res) {
						_self.fillData(res.data);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			fillData(data) {
				this.serverData = data;
				this.tips = data.tips;
				this.sliderMax = data.Candle.categories.length;
				let Column = {
					categories: [],
					series: []
				};
				let ColumnMeter = {
					categories: [],
					series: []
				};
				let LineA = {
					categories: [],
					series: []
				};
				let LineB = {
					categories: [],
					series: []
				};
				let Area = {
					categories: [],
					series: []
				};
				let Pie = {
					series: []
				};
				let Ring = {
					series: []
				};
				let Radar = {
					categories: [],
					series: []
				};
				let Arcbar1 = {
					series: []
				};
				let Arcbar2 = {
					series: []
				};
				let Arcbar3 = {
					series: []
				};
				let Gauge = {
					categories: [],
					series: []
				};
				let Candle = {
					categories: [],
					series: []
				};
				let Mix = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				
				// console.log( data.Column)
				
				Column.categories = data.Column.categories;
				//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
				Column.series = data.Column.series;
				
			
				
				
				
				
				ColumnMeter.categories = data.ColumnMeter.categories;
				//这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
				ColumnMeter.series = data.ColumnMeter.series;
				LineA.categories = data.LineA.categories;
				LineA.series = data.LineA.series;
				LineB.categories = data.LineB.categories;
				LineB.series = data.LineB.series;
				Area.categories = data.Area.categories;
				Area.series = data.Area.series;
				Pie.series = data.Pie.series;
				
				// Ring.series = data.Ring.series;
				Ring.series = [
					{name: "进行中", data: 50},
					{name: "已完成", data: 30},
					{name: "未开始", data: 20},
				]
				 
				//自定义文案示例，需设置format字段
				for (let i = 0; i < Ring.series.length; i++) {
					Ring.series[i].format = () => {
						return Ring.series[i].name + Ring.series[i].data
					};
				}
				Radar.categories = data.Radar.categories;
				Radar.series = data.Radar.series;
				Arcbar1.series = data.Arcbar1.series;
				Arcbar2.series = data.Arcbar2.series;
				Arcbar3.series = data.Arcbar3.series;
				Gauge.categories = data.Gauge.categories;
				Gauge.series = data.Gauge.series;
				Candle.categories = data.Candle.categories;
				Candle.series = data.Candle.series;
				
				
				// console.log( data.Mix)
				
				// Mix.categories = data.Mix.categories;
				// Mix.series = data.Mix.series;
				
				// 地市	数量（单位：个）	资助经费（单位亿元）
				// 	百色市	
				// 	北海市	3	0.265
				// 	崇左市	3	0.245
				// 	桂林市	21	2.058
				// 	河池市	
				// 	贺州市	4	0.335
				// 	柳州市	18	2.429
				// 	南宁市	40	4.86
				// 	市辖区	1	0.12
				// 	梧州市	2	0.11
				// 	新城区	3	0.46
				// 	玉林市   2  0.853
				// 	总计	99	11.985

			
				Mix.categories = [  '南宁', '市辖区', '桂林','柳州', '贺州', 
					'河池','百色','崇左',
					// '来宾','钦州' ,'防城港','贵港',
					'北海','玉林','梧州',
				]
				Mix.series = [
					{
						color: "#1890ff",
						name: "数量（项）",
						type: "column",
						data:[40,1,21,18,4,
							1, 1 ,1.3,
							3, 2,1,	
						],
					},
					{
						color: "red",
						name: "资助金费（亿元）",
						type: "column",
						data:[4.86,0.12,2.058, 2.429, 0.335,  
							0.15,0.1,0.245,
							0.265,0.853,0.11
							
										
										// 100,45,87,23,161,78,34,98,23,54,67,89
						],
					},
				]
				
				
				
				// this.showColumn("canvasColumn", Column);
				// this.showColumnMeter("canvasColumnMeter", ColumnMeter);
				// this.showLineA("canvasLineA", LineA);
				// this.showLineB("canvasLineB", LineB);
				// this.showArea("canvasArea", Area);
				// this.showPie("canvasPie", Pie);
				// this.showRing("canvasRing", Ring);
				// this.showRadar("canvasRadar", Radar);
				// this.showArcbar("canvasArcbar1", Arcbar1);
				// this.showArcbar2("canvasArcbar2", Arcbar2);
				// this.showArcbar3("canvasArcbar3", Arcbar3);
				// this.showGauge("canvasGauge", Gauge);
				// this.showCandle("canvasCandle", Candle);
				this.showMix("canvasMix", Mix);
				
				
				
			},
			showMix(canvasId, chartData) {
				canvaMix = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'mix',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4,
						scrollShow: true,
						scrollAlign: 'left',
					},
					yAxis: {
						gridType: 'dash',
						splitNumber: 5,
						min: 0,
						max: 50
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'straight'
					},
				});
			},
						touchMix(e) {
				canvaMix.scrollStart(e);
			},
			moveMix(e) {
				canvaMix.scroll(e);
			},
			touchEndMix(e) {
				canvaMix.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaMix.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.content{
		// padding:0 15px ;
		// background-color: #fff;
		// display: flex;
		// justify-content: space-around;
		// align-items: center;
		// text-align: center;
		// padding: 10px 0; 
		// font-display: 11pt;
	}
	
	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	
	.qiun-bg-white {
		background: #FFFFFF;
	}
	
	.qiun-title-bar {
		width: 96%;
		padding: 10px 15px;
		flex-wrap: nowrap;
	}
	
	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}
		
</style>
