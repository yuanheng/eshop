// pages/detail/goodsDetail.js

var imageUtil = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://m.360buyimg.com/n12/jfs/t7729/23/2139222381/189582/56bb6cc1/59a8d2b6N695f5086.jpg!q70.jpg',
      'https://m.360buyimg.com/n12/jfs/t7642/346/2129103137/188324/584400b3/59a8d2b9N9d87a779.jpg!q70.jpg',
      'https://m.360buyimg.com/n12/jfs/t7642/346/2129103137/188324/584400b3/59a8d2b9N9d87a779.jpg!q70.jpg',
      'https://m.360buyimg.com/n12/jfs/t9433/336/454703785/147094/7b50ea96/59a8d2c1N68f14cb6.jpg!q70.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imageWidth:0,
    show:false,
    imageDetailUrl:'https://img11.360buyimg.com/cms/jfs/t8722/164/2090952664/243199/990b2f3a/59c33876N9b62e25a.jpg',
    imageDetailUrl2:'https://img30.360buyimg.com/sku/jfs/t3127/93/5842864429/191147/92ecd9d8/58845d8fN64a42a28.jpg',
    imageDetailUrl3:'https://img12.360buyimg.com/cms/jfs/t8953/349/2056257457/160160/a48713a0/59c33874N1a715e54.jpg',
    imageDetailUrl4:'https://img13.360buyimg.com/cms/jfs/t9379/132/2042408945/263309/da8ccd38/59c33885N78289c89.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //动态获取手机的宽度设置图片浏览的高宽
    wx.getSystemInfo({
      success:function(result){
        var screenWidth = result.windowWidth;
        that.setData({
          imageWidth:screenWidth
        });
      }
    });
  },
  imageLoad: function (e) {
    var targetData = e.target.dataset;
    var id = targetData.id;
    var imageSize = imageUtil.imageUtil(e)
    switch(id){
      case "1":
        this.setData({
          imagewidth1: imageSize.imageWidth,
          imageheight1: imageSize.imageHeight
        });
      break;
      case "2":
        this.setData({
          imagewidth2: imageSize.imageWidth,
          imageheight2: imageSize.imageHeight
        });
      break;
      case "3":
        this.setData({
          imagewidth3: imageSize.imageWidth,
          imageheight3: imageSize.imageHeight
        });
      break;
      case "4":
        this.setData({
          imagewidth4: imageSize.imageWidth,
          imageheight4: imageSize.imageHeight
        });
      break;
    }
    
  },
  showHide:function(e){
    var flag = this.data.show;
    this.setData({show:!flag});
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '京东购物',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})