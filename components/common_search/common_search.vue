<template>
   <view class="page">
	   
		<view class="" style="background-color: #fff;">
			<view class="box" style="padding: 5px 10px;">
				<input type="text" value=""  class="search_input"
					:placeholder="placeholder"	placeholder-class="placeholder"		
					@input="input"
				 style="background-color: #efefef;padding: 5px;" />		
				<view class="searchBtn" @click="btn">搜索</view>
				 <!-- <uni-icon type="search" class="icon" @click="btn"></uni-icon> -->
			</view>
		</view>
    </view>
</template>
<script>
	 export default {
        data() {
            return {
				content:"",
            }
        },
		props: {			 
			placeholder:{
			 	type: String,
				default:"请输入关键字搜索"
			},			
		},
		methods:{
			input(e){
				
				console.log(e.detail)
				this.setData({content:e.detail.value})
			},
			btn(){
				// console.log("r2321")
				this.$emit("search",{value: this.$data.content})
			},
		},
    }
</script>

<style>
	.box{
		display: flex;
		align-items: center;
	}
	.search_input{
		flex :1 0 0
	}
	.search_input,.placeholder{
		font-size: 10pt;
	}
	.searchBtn{
		
		font-size: 10pt;
		color: #888;
	}
		
	.box{
		background-color: #eeeeee;
	}
	.icon{
		width: 23px;
		height: 23px;
	}
</style>
