const db =wx.cloud.database();
const todos =db.collection("todos");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //提交事件
  onSubmit:function(event){
    
    todos.add({
      data:{
        title:event.detail.value.title,
        image:this.data.image

      }
    }).then(res =>{
      wx.showToast({
        title:"成功",
        icon:"success"
      })
    })
  },

  //选择图片
  selectImage:function(e){
    wx.chooseImage({
      success:res =>{
        console.log(res.tempFilePaths[0]),
        wx.cloud.uploadFile({
          cloudPath:`${Math.floor(Math.random()*1000000)}.png`,
          filePath: res.tempFilePaths[0]
        }).then(res=>{
          console.log(res.fileID);
          this.setData({
            image:res.fileID
          })

        }).catch(err=>{
          console.error(err)
        })
      }
      
    })
    
  }

 
})