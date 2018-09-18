// pages/test1/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"大家好，"

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("在页面空白，加载之前需要先执行我这里面的内容~~");
    setTimeout(() => {
      this.setData({
        msg: "阿里哈撒哟，"
      })
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (opions) {
   

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})