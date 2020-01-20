<template>
	<view class="content">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">全区项目完成图</view>
		</view>
		
		<view class="qiun-charts qiun-rows" >
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts-pie" @touchstart="touchPie"></canvas>
		</view>
	</view>
</template>

<script>

	import uCharts from '@/components/u-charts/u-charts.js';
	console.log(uCharts)
	var _self;
	var canvaPie=null;

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
		},
		data() { 
            return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				piearr:[]
			}
		},
		
		
		created(){			
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
					
			// debugger
			// this.onInit()
		},
		watch:{		
			rate(val){
				console.log(val)
				let Ring = {
					series: []
				};
				Ring.series = [
					{name: "在研数量（个）", data: val[0]},
					{name: "已完成（个）", data: val[1]},
					// {name: "未开始", data: val[2]},
				]
				 				
				_self.showPie("canvasRing",Ring);
			}
		},
		methods:{
			getServerData(){				
					let Ring = {
						series: []
					};
					Ring.series = [
						{name: "在研数量（个）", data: 98},
						{name: "已完成数量（个）", data: 2},
					]
					 
				_self.showPie("canvasRing",Ring);
			},
			showPie(canvasId,chartData){
				canvaPie=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'pie',
					fontSize:11,
					legend:{
					  show:true,
					  position:'right',
					  float:'center',
					  itemGap:10,
					  padding:5,
					  lineHeight:26,
					  margin:5,
					  borderWidth :1
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
						  labelWidth:15
						}
					},
				});
				this.piearr=canvaPie.opts.series;
			},
			touchPie(e){
				canvaPie.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			},
			
			// onInit(){
			// 	// debugger
			// 	let Ring = {
			// 		series: []
			// 	};
			// 	Ring.series = [
			// 		{name: "在研数量（个）", data: 98},
			// 		{name: "已完成数量（个）", data: 2},
			// 		// {name: "未开始", data: 40},
			// 	]
				 
			// 	// // 自定义文案示例，需设置format字段
			// 	for (let i = 0; i < Ring.series.length; i++) {
			// 		Ring.series[i].format = () => {
			// 			return Ring.series[i].name + Ring.series[i].data
			// 		};
			// 	}
			// 	this.showRing("canvasRing", Ring);
			// },
			// getServerData() {
			// 	uni.showLoading({
			// 		title: "正在加载数据..."
			// 	})
			// 	uni.request({
			// 		url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
			// 		data: {},
			// 		success: function(res) {
			// 			_self.fillData(res.data);
			// 		},
			// 		fail: () => {
			// 			_self.tips = "网络错误，小程序端请检查合法域名";
			// 		},
			// 		complete() {
			// 			uni.hideLoading();
			// 		}
			// 	});
			// },
			// fillData(data) {
			// 	this.serverData = data;
			// 	this.tips = data.tips;
			// 	this.sliderMax = data.Candle.categories.length;
			// 	let Column = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let ColumnMeter = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let LineA = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let LineB = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let Area = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let Pie = {
			// 		series: []
			// 	};
			// 	let Ring = {
			// 		series: []
			// 	};
			// 	let Radar = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let Arcbar1 = {
			// 		series: []
			// 	};
			// 	let Arcbar2 = {
			// 		series: []
			// 	};
			// 	let Arcbar3 = {
			// 		series: []
			// 	};
			// 	let Gauge = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let Candle = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	let Mix = {
			// 		categories: [],
			// 		series: []
			// 	};
			// 	//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			// 	Column.categories = data.Column.categories;
			// 	//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
			// 	Column.series = data.Column.series;
			// 	ColumnMeter.categories = data.ColumnMeter.categories;
			// 	//这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
			// 	ColumnMeter.series = data.ColumnMeter.series;
			// 	LineA.categories = data.LineA.categories;
			// 	LineA.series = data.LineA.series;
			// 	LineB.categories = data.LineB.categories;
			// 	LineB.series = data.LineB.series;
			// 	Area.categories = data.Area.categories;
			// 	Area.series = data.Area.series;
			// 	Pie.series = data.Pie.series;
				
			// 	// Ring.series = data.Ring.series;
			// 	Ring.series = [
			// 		{name: "在研数量（个）", data: 98},
			// 		{name: "已完成数量（个）", data: 2},
			// 		// {name: "未开始", data: 40},
			// 	]
				 
			// 	//自定义文案示例，需设置format字段
			// 	for (let i = 0; i < Ring.series.length; i++) {
			// 		Ring.series[i].format = () => {
			// 			return Ring.series[i].name + Ring.series[i].data
			// 		};
			// 	}
			// 	Radar.categories = data.Radar.categories;
			// 	Radar.series = data.Radar.series;
			// 	Arcbar1.series = data.Arcbar1.series;
			// 	Arcbar2.series = data.Arcbar2.series;
			// 	Arcbar3.series = data.Arcbar3.series;
			// 	Gauge.categories = data.Gauge.categories;
			// 	Gauge.series = data.Gauge.series;
			// 	Candle.categories = data.Candle.categories;
			// 	Candle.series = data.Candle.series;
			// 	Mix.categories = data.Mix.categories;
			// 	Mix.series = data.Mix.series;
			// 	// this.showColumn("canvasColumn", Column);
			// 	// this.showColumnMeter("canvasColumnMeter", ColumnMeter);
			// 	// this.showLineA("canvasLineA", LineA);
			// 	// this.showLineB("canvasLineB", LineB);
			// 	// this.showArea("canvasArea", Area);
			// 	// this.showPie("canvasPie", Pie);
			// 	this.showRing("canvasRing", Ring);
			// 	// this.showRadar("canvasRadar", Radar);
			// 	// this.showArcbar("canvasArcbar1", Arcbar1);
			// 	// this.showArcbar2("canvasArcbar2", Arcbar2);
			// 	// this.showArcbar3("canvasArcbar3", Arcbar3);
			// 	// this.showGauge("canvasGauge", Gauge);
			// 	// this.showCandle("canvasCandle", Candle);
			// 	// this.showMix("canvasMix", Mix);
			// },
			// showRing(canvasId, chartData) {
			// 	new uCharts({
			// 		$this: _self,
			// 		canvasId: canvasId,
			// 		type: 'ring',
			// 		fontSize: 11,
			// 		legend: true,
			// 		// title: {
			// 		// 	name: '70%',
			// 		// 	color: '#7cb5ec',
			// 		// 	fontSize: 25 * _self.pixelRatio,
			// 		// 	offsetY: -20 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
			// 		// },
			// 		// subtitle: {
			// 		// 	name: '收益率',
			// 		// 	color: '#666666',
			// 		// 	fontSize: 15 * _self.pixelRatio,
			// 		// 	offsetY: 30 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
			// 		// },
			// 		extra: {
			// 			pie: {
			// 				lableWidth: 15,
			// 				ringWidth: 40 * _self.pixelRatio, //圆环的宽度
			// 				offsetAngle: -45 //圆环的角度
			// 			}
			// 		},
			// 		background: '#FFFFFF',
			// 		pixelRatio: _self.pixelRatio,
			// 		series: chartData.series,
			// 		animation: false,
			// 		width: _self.cWidth * _self.pixelRatio,
			// 		height: _self.cHeight * _self.pixelRatio,
			// 		disablePieStroke: true,
			// 		dataLabel: true,
			// 	});
			
			// },
		}
	}
</script>

<style lang="scss">
	page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
	.qiun-padding{padding:2%; width:96%;}
	.qiun-wrap{display:flex; flex-wrap:wrap;}
	.qiun-rows{display:flex; flex-direction:row !important;}
	.qiun-columns{display:flex; flex-direction:column !important;}
	.qiun-common-mt{margin-top:10upx;}
	.qiun-bg-white{background:#FFFFFF;}
	.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
	.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts-pie{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts-right{display:flex;align-items:center;width: 250upx; height:500upx;background-color: #FFFFFF;}
	.legend-itme{width: 200upx; margin-left: 30upx; height:50upx;align-items:center;}
	.legend-itme-point{width: 20upx; height:20upx; margin: 15upx;  border: 1px solid #FFFFFF; border-radius: 20upx;background-color: #000000;}
	.legend-itme-text{height:50upx;line-height: 50upx;color: #666666;font-size: 26upx;}
		
	.page_image{
		width: 100%;;
	}
</style>
