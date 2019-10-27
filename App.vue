<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* page{
		height: 100vh;
	} */
	@import './common/uni.css';
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color:#f9f9f9;
	}
	
	.oa-node{ }	
	.oa-flex_center , .oa-flex_between{
		display: flex;
		align-items: center;		
	}
	.oa-flex_center{ justify-content: center;	}		
	.oa-flex_between{ justify-content: space-between;	}	
	.oa-white{ background-color: #ffffff;	}
	.oa-line_bottom{border-bottom: 1rpx #E1E1E1 solid ;}
	.oa-line_top{border-top: 1rpx #E1E1E1 solid ;}
	.oa-pd15{ padding: 15px;}
	.oa-space_5{margin-bottom: 5px;	}
	.oa-space_10{margin-bottom: 10px;	}
</style>
