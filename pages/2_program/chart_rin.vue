<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">饼图右侧图例</view>
		</view>
		<view class="qiun-charts qiun-rows" >
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts-pie" @touchstart="touchPie">234反对法</canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	console.log(uCharts)
	var _self;
	var canvaPie=null;
   
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				piearr:[]
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData(){
				var Pie = {
				  "series": [{
					"name": "一班",
					"data": 50
				  }, {
					"name": "二班",
					"data": 30
				  }, {
					"name": "三班",
					"data": 20
				  }, {
					"name": "四班",
					"data": 18
				  }, {
					"name": "五班",
					"data": 8
				  }]
				}
				_self.showPie("canvasPie",Pie);
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
		}
	}
</script>

<style>
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
</style>