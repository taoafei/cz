Page({
  onTap:function(){
    // wx.navigateTo({
    //   url: '../posts/post',//从父页面跳转到子页面
    //    success: function(res){

     //   }
    // });
    wx.switchTab({
      url: '../posts/post',
    });
    },
    
    onUnload:function(){
      //页面被关闭或卸载执行这个函数
    },
    onHide:function(){
      //页面被影藏执行
    }

  })
