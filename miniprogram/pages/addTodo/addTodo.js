const db =wx.cloud.database();
const todos =db.collection("todos");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 事件监听
   */
  onSubmit:function(event){
    
    todos.add({
      data:{
        title:event.detail.value.title
      }
    }).then(res =>{
      wx.showToast({
        title:"成功",
        icon:"success"
      })
    })
  }

 
})