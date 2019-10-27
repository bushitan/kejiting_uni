<template>
   <view class="page">
		<view class="uni-triplex-row">
			<view class="uni-triplex-left">
				<!-- <text class=" uni-ellipsis" >
					<view v-if="status == PRE" class="status pre">{{title}}</view>
					<view v-else-if="status == ING" class="status ing">{{title}}</view>
					<view v-else-if="status == COMPLETE" class="status complete">{{title}}</view>
					<view v-else class="status close">{{title}}</view>
				</text> -->
				
				<text class='uni-text program_title'>项目名称:{{title}}</text>
				<text class='uni-text'><label>公司名称</label>:{{companyName}}</text>
				<text class='uni-text'><label>负责人</label>:{{leader}}</text>
				<text class='uni-text' v-show="jingji!=''"><label>经济指标</label>:{{jingji}}</text>
				<text class='uni-text' v-show="jishu!=''"><label>技术指标</label>:{{jishu}}</text>
				<text class='uni-text' v-show="des!=''"><label>描述</label>:{{des}}</text>
				
				<view class="uni-text-small uni-ellipsis  ">
					<view class="date dpre">项目申报时间:{{date}}</view>
				</view>
				
			</view>
			<view class="uni-triplex-right">
				<text class="uni-h5 name">{{sn}}</text>
			</view>
		</view>
    </view>
</template>
<script>
	 export default {
        data() {
            return {
				/**
				 * 卡片状态
				 * 0、未开始
				 * 1、进行中
				 * 2、已完成
				 * 3、已关闭
				 */
				// status:0, 
				PRE:0,
				ING:1,
				COMPLETE:2,
				CLOSE:3,
            }
        },
		props: {			 
			
			status:{
			 	type: [String,Number],
				default:0
			},
			title:{
				type:[Number,String],
				default:"标题"
			},
			companyName:{
				type:[Number,String],
				default:"内容"
			},
			leader:{
				type:[Number,String],
				default:""
			},
			sn:{
				type:[Number,String],
				default:""
			},
			date:{
				type:[Number,String],
				default:""
			},
			jingji:{
				type:[Number,String],
				default:""
			},
			jishu:{
				type:[Number,String],
				default:""
			},			
			des:{
				type:[Number,String],
				default:""
			},
			
			
			
			
			
			
			
			username:{
				type:String,
				default:"用户名称"
			},
			planStartTime:{
				type:[Number,String],
				default:"2019-06-15"
			},
			planEndTime:{
				type:[Number,String],
				default:"2019-06-15"
			},
			realStartTime:{
				type:[Number,String],
				default:"2019-06-15"
			},
			realEndTime:{
				type:[Number,String],
				defualt:"2019-06-15"
			},
		},
    }
</script>

<style>
	.uni-triplex-row{
		padding: 0;
	}
	label{
		font-weight: bold;
	}
	.program_title{
		font-size: 11pt;
		font-weight: bold;
	}
	
	.delete{
		text-decoration:line-through ;
	}
	
	.uni-text{
		margin: 2px 0;
		font-size: 11pt;
	}
	.tag{
		margin:0 5px 5px 0;
	}
	
	.uni-title{
	}
	.status{
		display: inline-block;
		color: #ffffff;
		padding:2px 10px ;
		font-size: 11pt;
		border-radius: 5px;
	}
	.pre{background-color: #e1e1e1;color: #888;}
	.ing{background-color: #00cc66;}
	.complete{background-color: #3399ff;}
	.close{background-color: #ff6600;}
	
	
	.date{
		display: inline-block;
		color: #888;
		padding:2px 10px ;
		font-size: 9pt;
		border-radius: 5px;
	}	
	.dpre{background-color: rgba(225,225,225,0.6);}
	.ding{background-color: rgba(0,204,102,0.6);color: #fff;}
	.dcomplete{background-color: rgba(51,153,255,0.6);color: #fff;}
	.dclose{background-color: rgba(255,103,0,0.6);color: #fff; }
	
	.name{;
		background-color: #cce6ff;
		margin-top: 2px;
		/* padding:2px 15PX 2px 15px ; */
		text-align: center;
		font-size: 9pt;
		/* padding-right:10px ; */
	}
</style>
