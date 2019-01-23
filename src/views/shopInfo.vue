<template>
  <div class="shop">
    <div class="shop-container">
      <div class="container-left">
        <!-- 顶部商品信息 -->
        <div class="shop-info">
          <div class="shop-left">
            <img src="../assets/images/shop01.jpg">
          </div>
          <div class="shop-right">
            <h2>
              联想(Lenovo)拯救者Y7000 15.6英寸游戏笔记本电脑
              <strong>￥234 元</strong>
            </h2>
            <p>商品简介</p>
            <div class="buy-number">购买数量：
              <el-input-number
                v-model="buySum"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </div>
            <div class="buy-btn">
              <el-button type="warning">加入购物车</el-button>
              <el-button type="danger">立即购买</el-button>
            </div>
          </div>
        </div>
        <!-- 下面的商品介绍和评论 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="商品详情" name="shop-detail">商品详情</el-tab-pane>
          <el-tab-pane label="商品评论" name="shop-commemt" class="shop-comment">
            <ul>
              <li>
                <h3>
                  131********
                  <i>2018年10月1日</i>
                </h3>
                <p>
                  双旦节买的y7000
                  1.物流非常快 当天就收到了！
                  2.笔记本颜值没让我失望 确实蛮好看的 背光键盘挺酷
                  3.鲁大师硬件检测和跑分 不管准不准 还是挺满意
                </p>
              </li>
              <li>
                <h3>
                  131********
                  <i>2018年10月1日</i>
                </h3>
                <p>
                  双旦节买的y7000
                  1.物流非常快 当天就收到了！
                  2.笔记本颜值没让我失望 确实蛮好看的 背光键盘挺酷
                  3.鲁大师硬件检测和跑分 不管准不准 还是挺满意
                </p>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="container-right">
        <h3>热销商品</h3>
        <ul>
          <li>
            <div class="hot-img">
              <img src="../assets/images/shop_m_01.jpg">
            </div>
            <div class="hot-detail">
              <p>商品标题商品标题商品标题商品标题</p>
              <strong>￥234 元</strong>
              <del>￥250 元</del>
            </div>
          </li>
          <li>
            <div class="hot-img">
              <img src="../assets/images/shop_m_02.jpg">
            </div>
            <div class="hot-detail">
              <p>商品标题商品标题商品标题商品标题</p>
              <strong>￥234 元</strong>
              <del>￥250 元</del>
            </div>
          </li>
          <li>
            <div class="hot-img">
              <img src="../assets/images/shop_m_03.jpg">
            </div>
            <div class="hot-detail">
              <p>商品标题商品标题商品标题商品标题</p>
              <strong>￥234 元</strong>
              <del>￥250 元</del>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buySum: 1,
      activeName: "shop-commemt"
    };
  },
  methods: {
    handleChange() {}
  }
};
</script>

<style lang="scss" scoped>
.shop {
  width: 100%;
  display: flex;
  justify-content: center;
}
.shop-container {
  width: 1000px;
  display: flex;
  margin-top: 50px;
  .container-left {
    flex: 1;
  }
  .container-right {
    width: 300px;
    padding: 10px;
    h3 {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
      font-weight: 600;
      font-size: 16px;
    }
    li {
      display: flex;
      height: 80px;
      padding: 10px 0;
      .hot-img {
        width: 100px;
        img {
          height: 80px;
          width: 100px;
        }
      }
      .hot-detail {
        padding-left: 10px;
        p {
          color: red;
          font-size: 14px;
        }
        del {
          display: block;
          font-size: 13px;
        }
      }
    }
  }
}

.shop-info {
  display: flex;
  .shop-left {
    width: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }
  .shop-right {
    flex: 1;
    padding: 10px;
    // 商品标题
    h2 {
      font-size: 18px;
      font-weight: 600;
      strong {
        font-size: 23px;
      }
    }
    // 商品简介
    p {
      height: 80px;
      padding-top: 10px;
    }
    h2,
    p {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
    }
    // 购买数量
    .buy-number {
      text-align: center;
      padding: 15px 0;
      .el-input-number {
        margin-left: 10px;
        width: 150px;
      }
    }
    // 购买按钮
    .buy-btn {
      text-align: center;
      padding: 10px 0 0 0;
    }
  }
}
// 商品详情和评论
.el-tabs {
  margin-top: 80px;

  .shop-comment {
    padding: 10px;

    i {
      font-style: normal;
    }
    li {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 15px;
      margin-bottom: 15px;
      h3 {
        font-weight: 600;
        font-size: 18px;
        padding-bottom: 10px;
      }
      p {
        font-size: 14px;
        color: #333;
      }
    }
  }
}
</style>

