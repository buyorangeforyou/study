<template>
  <div class="login">
    <div class="login-content">
      <img src="../assets/images/login-logo.png">
      <div class="login-form">
        <el-form ref="form" :rules="rules" :model="form">
          <el-form-item prop="phone">
            <el-input placeholder="手机号码" maxlength="11" v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入手机验证码" v-model="form.phoneCode"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="确认密码" v-model="form.rePassword"></el-input>
          </el-form-item>
        </el-form>
        <div class="login-btn">
          <el-button type="primary" class="login-btn-send">发送手机验证码</el-button>
          <el-button type="danger" class="login-btn-reg" @click="handlerReg()">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var checkPhone = (rule, value, callback) => {
      // 验证手机号
      if (/^1[34578]\d{9}$/.test(value)) {
        callback();
      } else {
        callback(new Error("手机号码错误"));
      }
    };
    return {
      form: {
        phone: "",
        phoneCode: "",
        password: "",
        rePassword: ""
      },
      // 定义表单验证规则
      rules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          // 调用自定义验证
          { validator: checkPhone, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度要求6-12位字符",
            trigger: "blur"
          }
        ],
        rePassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度要求6-12位字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 处理注册
    handlerReg() {
      this.$refs["form"].validate(valid => {
        console.log(valid);
        if (valid) {
          alert("submit");
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 200px;
}
.login-content {
  width: 950px;
  margin: 0 auto;
}
/* 清除浮动 */
.login::after,
.login-btn::after,
.login-content::after {
  clear: both;
  display: block;
  content: " ";
  height: 0;
  visibility: hidden;
}
.login .login-form {
  width: 400px;
  float: left;
}
.login img {
  width: 450px;
  height: 250px;
  margin: 0 100px 0 0;
  float: left;
}
/* btn */
.login-btn-send {
  float: left;
}
.login-btn-reg {
  float: right;
}
</style>
