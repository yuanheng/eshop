//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goodsInfos:[],
    pageNumber:1

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goodsDetail:function(e){
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    //设置商品信息
    this.setData({
      goodsInfos:this.getGoodsInfo()
    });
  },
  onReachBottom:function(e){
    var pageNumber = this.data.pageNumber;

    pageNumber ++;
    console.info("加载更多"+e);
    var goodsInfo = {
                "id": 6,
                "title": "DW邦顿（Bestdon）手表男机械表全自动镂空大表盘皮带时尚潮2017新款夜光学生男表 黑壳黑面",
                "image": "/images/goods1.jpg",
                "percent": "66",
                "priceNow": "1000.00",
                "priceOld": "2000.50"
      };
    var newDatas=[];
    var that = this;
    var oldGoodsDataInfos = that.data.goodsInfos;
    for (var i = 0; i < this.data.pageNumber; i++){

      oldGoodsDataInfos.push(goodsInfo);
    }  
    
    this.setData({ goodsInfos: oldGoodsDataInfos});
    this.setData({pageNumber:pageNumber});

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getGoodsInfo:function(e){
    var goodsInfos = [
      {
        "id": 1,
        "title": "邦顿（Bestdon）手表男机械表全自动镂空大表盘皮带时尚潮2017新款夜光学生男表 黑壳黑面",
        "image": "/images/goods1.jpg",
        "percent": "66",
        "priceNow": "1000.00",
        "priceOld": "2000.50"
      }, {
        "id": 2,
        "title": "卡罗莱（CALUOLA）全自动机械表男士手表运动男表防水多功能时尚学生真皮带精钢带夜光腕表 全黑钢带",
        "image": "/images/goods2.jpg",
        "percent": "30",
        "priceNow": "40000.00",
        "priceOld": "50000.00"
      }, {
        "id": 3,
        "title": "依波(EBOHR)手表 时代元素系列简约黑面实心钢带防水石英男表36190218",
        "image": "/images/goods3.jpg",
        "percent": "20",
        "priceNow": "100000.00",
        "priceOld": "300000.00"
      }, {
        "id": 4,
        "title": "天王表（TIAN WANG）限量新品 爆款经典 时尚商务机械表 黑色钢带男表GS5876S/D-B",
        "image": "/images/goods4.jpg",
        "percent": "80",
        "priceNow": "400.00",
        "priceOld": "1000.00"
      }
    ];
    return goodsInfos;
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
