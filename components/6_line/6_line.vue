<template>
	<view class="content">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">2017-2019项目数量表</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			  @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA" ></canvas>
			  <!-- disable-scroll=true -->
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts"  @touchstart="touchLineA"
			 @touchmove="moveLineA" @touchend="touchEndLineA" ></canvas>
			<!-- disable-scroll=true -->
			 
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
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
			
			this.onInit()
			// this.getServerData();
		},
		methods:{
			onInit(){
				
				let LineA = {
					categories: [],
					series: []
				};
				LineA.categories = ["2017","2018","2019"]
				LineA.series = [
					{
						color: "#1890ff",
						name: "总投资（亿元）",
						type: "line",
						data:[32.24808,   38.59617 , 2.2557]
					},
					{
						color: "red",
						name: "在研数量（个）",
						type: "line",
						data:[51,93,98]
					},
					{
						color: "yellow",
						name: "完成数量（个）",
						type: "line",
						data:[2,2,2,]
					},
				]
				this.showLineA("canvasLineA", LineA);
				
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
				
				// console.log(data.LineA)
				// LineA.categories = data.LineA.categories;
				// LineA.series = data.LineA.series;
				
				
				LineA.categories = ["2017","2018","2019"]
				LineA.series = [
					{
						color: "#1890ff",
						name: "总投资（亿元）",
						type: "line",
						data:[32.24808,   38.59617 , 2.2557]
					},
					{
						color: "red",
						name: "在研数量（个）",
						type: "line",
						data:[51,93,98]
					},
					{
						color: "yellow",
						name: "完成数量（个）",
						type: "line",
						data:[2,2,2,]
					},
				]
				
	
				
				
				
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
				Mix.categories = data.Mix.categories;
				Mix.series = data.Mix.series;
				// this.showColumn("canvasColumn", Column);
				// this.showColumnMeter("canvasColumnMeter", ColumnMeter);
				this.showLineA("canvasLineA", LineA);
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
				// this.showMix("canvasMix", Mix);
			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
						scrollShow: true, //新增是否显示滚动条，默认false
						scrollAlign: 'left',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						min: 10,
						max: 180,
						format: (val) => {
							// return val.toFixed(0) + '元'
							return val.toFixed(0) 
						} //如不写此方法，Y轴刻度默认保留两位小数
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
			
			touchLineA(e) {
				canvaLineA.scrollStart(e);
			},
			moveLineA(e) {
				canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				canvaLineA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaLineA.showToolTip(e, {
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
