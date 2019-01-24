<template>
  <div class="cart">
    <el-tag type="info" style="width:100%">我的购物车</el-tag>
    <div class="cart-content">
      <!-- 左边显示购物车列表 -->
      <div class="cart-left">
        <ul>
          <li>
            <div class="product-name">产品名称</div>
            <div class="product-sum">数量</div>
            <div class="product-price">合计价格</div>
            <div class="product-opt"></div>
          </li>
          <li v-for="(item,index) of cartList" :key="index">
            <div class="product-name">
              <img :src="item.img">
              <p>{{item.title}}</p>
            </div>
            <div class="product-sum">
              <el-input-number v-model="item.sum" controls-position="right" :min="1" :max="10"></el-input-number>
              <i>X</i>
              <strong>￥{{item.price}}</strong>
            </div>
            <div class="product-price">
              <strong>￥{{item.sum * item.price}}</strong>
            </div>
            <div class="product-opt">
              <el-button type="primary" icon="el-icon-delete" @click="handerShopRemove(index)"></el-button>
            </div>
          </li>
        </ul>
        <div class="cart-btn">
          <el-button type="danger" @click="handerShopRemoveAll()">清空购物车</el-button>
          <el-button type="success">清空购物车</el-button>
        </div>
      </div>
      <div class="cart-right">
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
        <div class="shop-pay-btn">
          <el-button type="success" @click="goCalcBalancePage()">立即支付</el-button>
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
      cartList: []
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
  },
  methods: {
    // 跳转到结算页面
    goCalcBalancePage() {
      this.$router.push({
        path: "/calcBalacne"
      });
    },
    // 移除商品
    handerShopRemove(index) {
      this.cartList.splice(index, 1);
      console.log(this.cartList);
    },
    // 清空购物车
    handerShopRemoveAll(index) {
      this.cartList = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  margin: 20px;

  .cart-content {
    display: flex;
  }
}
.cart-left {
  // 商品列表占80%
  flex: 8;

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

  .product-opt {
    width: 80px;
  }

  .cart-btn {
    margin-top: 15px;
    text-align: right;
  }
}

.cart-right {
  // 商品结算占20%
  flex: 2;
  padding: 15px;
  .shop-price,
  .shop-postage {
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
    border-bottom: 1px solid #e2e2e2;
  }
  .shop-pay-btn {
    text-align: right;
    margin-top: 30px;
  }
}
</style>

