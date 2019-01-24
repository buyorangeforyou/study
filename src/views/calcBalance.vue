<template>
  <div class="balance">
    <div class="balance-content">
      <div class="content-left">
        <div class="shop">
          <ul>
            <li>
              <div class="product-name">产品名称</div>
              <div class="product-sum">数量</div>
              <div class="product-price">合计价格</div>
            </li>
            <li v-for="(item,index) of cartList" :key="index">
              <div class="product-name">
                <img :src="item.img">
                <p>{{item.title}}</p>
              </div>
              <div class="product-sum">
                {{item.sum}}
                <i>X</i>
                <strong>￥{{item.price}}</strong>
              </div>
              <div class="product-price">
                <strong>￥{{item.sum * item.price}}</strong>
              </div>
            </li>
          </ul>
        </div>
        <h2>选择常用联系人</h2>
        <div class="contact">
          <ul>
            <li>
              <el-radio v-model="chooseSite" label="1">
                姓名:
                <i>张三</i> 电话:
                <i>13113113111</i>地址:
                <i>扬州市华阳西路</i>
              </el-radio>
            </li>
          </ul>
        </div>
        <h2>选择支付方式</h2>
        <div>
          <el-radio v-model="choosePay" label="wx">
            <img src="../assets/images/pay_wx.png" alt>
          </el-radio>
          <el-radio v-model="choosePay" label="zfb">
            <img src="../assets/images/pay_zfb.png" alt>
          </el-radio>
          <el-radio v-model="choosePay" label="other">
            <img src="../assets/images/pay_other.png" alt>
          </el-radio>
        </div>
      </div>
      <div class="content-right">
        <!-- 结算部分 -->
        <div class="shop-price">
          商品总价：
          <strong>￥{{calcShopAllPrice}}</strong>
        </div>
        <div class="shop-postage">
          邮费价格：
          <strong>包邮</strong>
        </div>
        <div class="shop-price-all">
          合计金额：
          <strong>￥{{calcShopAllPrice}}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 购物车列表
      cartList: [],
      // 绑定收获地址
      chooseSite: "",
      // 绑定支付方式
      choosePay:""
    };
  },
  mounted() {
    // 向购物车添加模拟数据
    for (let i = 0; i < 3; i++) {
      this.cartList.push({
        // 动态加载商品图片
        img: require(`../assets/images/shop_m_0${i + 1}.jpg`),
        // 商品标题
        title: "联想(Lenovo)拯救者Y7000 15.6英寸游戏笔记本电脑",
        // 商品数量
        sum: 1,
        // 商品单价
        price: 122
      });
    }
  },
  // 计算属性
  computed: {
    // 计算商品总价
    calcShopAllPrice: function() {
      let sum = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        sum += this.cartList[i].sum * this.cartList[i].price;
      }
      return sum;
    }
  }
};
</script>

<style lang="scss" scoped>
.balance-content {
  margin: 20px;
  display: flex;
  .content-left {
    flex: 8;
  }
  .content-right {
    flex: 2;
  }
}

.content-left {
  .shop {
    ul {
      border: 1px solid #e2e2e2;
    }
    li {
      display: flex;
      border-bottom: 1px solid #e2e2e2;
      padding: 15px 0 10px 15px;
    }

    .product-name {
      flex: 1;
      display: flex;
      img {
        height: 80px;
        width: 80px;
      }
      p {
        flex: 1;
        padding: 0 10px;
        color: red;
      }
    }

    .product-sum {
      width: 250px;
      text-align: center;
      .el-input-number {
        width: 100px;
      }
      i {
        font-style: normal;
        margin: 0 10px;
      }
    }

    .product-price {
      width: 150px;
      text-align: center;
      strong {
        display: inline-block;
        margin-top: 8px;
      }
    }
  }
  h2{
    margin: 20px 0 10px 0;
    font-weight: 400;
  }
  i{
    font-style: normal;
    margin:0 20px 0 0;
  }

  .contact{
    margin-bottom: 30px;
  }
}

.content-right {
  padding: 15px;
  background-color: rgba(144, 147, 153, 0.1);
  margin: 10px 0 0 20px;
  .shop-price,
  .shop-postage,
  .shop-price-all {
    margin: 5px 0;

    strong {
      float: right;
      width: 60px;
    }
  }
  .shop-price-all {
    margin: 10px 0;
    padding: 20px 0;
    border-top: 1px solid #e2e2e2;
    strong {
      font-size: 20px;
    }
  }
}
</style>
