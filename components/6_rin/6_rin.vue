<template>
	<view class="content">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">完成图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts"></canvas>
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
			
			
			rate:{
				type:Array,
				default:()=>{
					return [30,3,40]
				},
			},
			
			// num:{
			// 	type:Object,
			// 	default :()=>{
			// 		return {					}
			// 	},
			// },
			// 
			// list:{
			// 	type:Array,
			// 	default :()=>{
			// 		return []
			// 	},
			// },
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
				
				rin:{						
					pre:30,
					ing:30,
					complete:40,
				}
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
					
			// debugger
			this.onInit()
			// this.getServerData();
		},
		watch:{		
			
			
			
			
			rate(val){
				console.log(val)
				
				// this.setRate(val)
				
				let Ring = {
					series: []
				};
				Ring.series = [
					{name: "在研数量（个）", data: val[0]},
					{name: "已完成（个）", data: val[1]},
					// {name: "未开始", data: val[2]},
				]
				 
				// //自定义文案示例，需设置format字段
				for (let i = 0; i < Ring.series.length; i++) {
					Ring.series[i].format = () => {
						return Ring.series[i].name + Ring.series[i].data
					};
				}
				
				this.showRing("canvasRing", Ring);
			}
		},
		methods:{
			onInit(){
				
				let Ring = {
					series: []
				};
				Ring.series = [
					{name: "在研数量（个）", data: 98},
					{name: "已完成数量（个）", data: 2},
					// {name: "未开始", data: 40},
				]
				 
				// // 自定义文案示例，需设置format字段
				for (let i = 0; i < Ring.series.length; i++) {
					Ring.series[i].format = () => {
						return Ring.series[i].name + Ring.series[i].data
					};
				}
				this.showRing("canvasRing", Ring);
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
					{name: "在研数量（个）", data: 98},
					{name: "已完成数量（个）", data: 2},
					// {name: "未开始", data: 40},
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
				Mix.categories = data.Mix.categories;
				Mix.series = data.Mix.series;
				// this.showColumn("canvasColumn", Column);
				// this.showColumnMeter("canvasColumnMeter", ColumnMeter);
				// this.showLineA("canvasLineA", LineA);
				// this.showLineB("canvasLineB", LineB);
				// this.showArea("canvasArea", Area);
				// this.showPie("canvasPie", Pie);
				this.showRing("canvasRing", Ring);
				// this.showRadar("canvasRadar", Radar);
				// this.showArcbar("canvasArcbar1", Arcbar1);
				// this.showArcbar2("canvasArcbar2", Arcbar2);
				// this.showArcbar3("canvasArcbar3", Arcbar3);
				// this.showGauge("canvasGauge", Gauge);
				// this.showCandle("canvasCandle", Candle);
				// this.showMix("canvasMix", Mix);
			},
			showRing(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					legend: true,
					// title: {
					// 	name: '70%',
					// 	color: '#7cb5ec',
					// 	fontSize: 25 * _self.pixelRatio,
					// 	offsetY: -20 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					// },
					// subtitle: {
					// 	name: '收益率',
					// 	color: '#666666',
					// 	fontSize: 15 * _self.pixelRatio,
					// 	offsetY: 30 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					// },
					extra: {
						pie: {
							lableWidth: 15,
							ringWidth: 40 * _self.pixelRatio, //圆环的宽度
							offsetAngle: -45 //圆环的角度
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true,
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
