<template>
    <div class="Login">
        <div class="bg">
            <img src="../assets/bg.jpg" alt="" />
        </div>
        <div :class="isLogin == false ? 'Logintitle' : 'Logintit'">
            <h1>WUHANJIAYOU</h1>
        </div>
        <div class="cenbox">
            <ul>
                <li class="reg"></li>
                <li v-if="isLogin">
                    <i class="el-icon-location-outline"></i>
                    <el-select
                        v-model="statLogin.Loginarea"
                        style="width: 250px;"
                    >
                        <el-option
                            style="width: 250px"
                            v-for="item in cityList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <p v-if="isreg.isarea">请选择所在地</p>
                </li>
                <li v-if="isLogin">
                    <el-date-picker
                        :clearable="false"
                        @blur="loseFocus(4)"
                        v-model="statLogin.Logindate"
                        type="date"
                        size="mini"
                        placeholder="选择日期"
                        style="width: 250px;"
                    >
                    </el-date-picker>
                    <p v-if="isreg.isdate">请选择日期</p>
                </li>
                <li>
                    <el-input
                        @blur="loseFocus(1)"
                        maxlength="16"
                        minlength="4"
                        prefix-icon="el-icon-s-custom"
                        v-model="statLogin.Loginname"
                        placeholder="请输入用户名"
                        style="width: 250px;"
                    ></el-input>
                    <p v-if="isreg.isname">请填写用户名</p>
                </li>
                <li v-if="isLogin">
                    <el-input
                        @blur="loseFocus(5)"
                        prefix-icon="el-icon-mobile-phone"
                        v-model="statLogin.Loginmobile"
                        maxlength="11"
                        minlength="11"
                        onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"
                        placeholder="请输入手机号"
                        style="width: 250px;"
                    ></el-input>
                    <p v-if="isreg.ismobile">请输入手机号</p>
                </li>
                <li v-if="isLogin">
                    <el-input
                        @blur="loseFocus(6)"
                        prefix-icon="el-icon-mobile-phone"
                        v-model="statLogin.Logincode"
                        placeholder="请输入验证码"
                        style="width: 150px"
                    ></el-input>
                    <el-button
                        class="vercode"
                        :disabled="disabled"
                        :plain="true"
                        @click.native="getVercode()"
                        >{{ vercode }}</el-button
                    >
                    <p v-if="isreg.iscode">请输入验证码</p>
                </li>
                <li>
                    <el-input
                        @blur="loseFocus(2)"
                        prefix-icon="el-icon-unlock"
                        v-model="statLogin.Loginpwd"
                        @keyup.enter.native="jumpHome"
                        show-password
                        maxlength="20"
                        minlength="6"
                        placeholder="请输入6-20位密码"
                        style="width: 250px;"
                    ></el-input>
                    <p v-if="isreg.ispwd">请输入密码</p>
                </li>
                <li v-if="isLogin">
                    <el-input
                        @blur="loseFocus(3)"
                        prefix-icon="el-icon-lock"
                        v-model="statLogin.Loginconf"
                        maxlength="20"
                        minlength="6"
                        show-password
                        placeholder="请输入6-20位密码"
                        style="width: 250px;"
                    ></el-input>
                    <p v-if="isreg.isconf">
                        请确认密码
                    </p>
                </li>

                <li>
                    <el-button
                        type="primary"
                        style="width: 250px"
                        @click.native="jumpHome"
                    >
                        {{ isLogin == false ? "登录" : "注册" }}</el-button
                    >
                </li>
                <li class="reg" @click="switchState()">
                    <p>
                        {{
                            isLogin == false
                                ? "没有账号？注册"
                                : "已有账号？登录"
                        }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            cityList: [
                {
                    value: "北京",
                    label: "北京",
                },
                {
                    value: "上海",
                    label: "上海",
                },
                {
                    value: "武汉",
                    label: "武汉",
                },
                {
                    value: "长沙",
                    label: "长沙",
                },
                {
                    value: "南京",
                    label: "南京",
                },
                {
                    value: "四川",
                    label: "四川",
                },
            ],
            isLogin: false,
            vercode: "获取验证码",
            disabled: false,
            statLogin: {
                Loginarea: "武汉",
                Loginname: "",
                Loginpwd: "",
                Logindate: "",
                Loginmobile: "",
                Loginconf: "",
                Logincode: "",
            },
            isreg: {
                isname: false,
                ispwd: false,
                isdate: false,
                ismobile: false,
                isconf: false,
                iscode: false,
            },
        };
    },
    mounted() {
        // console.log(this.$store);
    },
    methods: {
        // 失去焦点事件
        loseFocus(index) {
            switch (index) {
                case 1:
                    this.isreg.isname =
                        this.statLogin.Loginname == "" ? true : false;
                    break;
                case 2:
                    this.regPwd(this.statLogin.Loginpwd);
                    this.isreg.ispwd =
                        this.statLogin.Loginpwd == "" ? true : false;
                    if (this.statLogin.Loginconf !== "") {
                        this.isreg.isconf =
                            this.statLogin.Loginpwd == this.statLogin.Loginconf
                                ? false
                                : true;
                    }
                    break;
                // 确认密码
                case 3:
                    this.regPwd(this.statLogin.Loginconf);
                    if (this.statLogin.Loginconf == "") {
                        this.isreg.isconf = true;
                    } else {
                        this.isreg.isconf =
                            this.statLogin.Loginpwd == this.statLogin.Loginconf
                                ? false
                                : true;
                    }
                    break;
                case 4:
                    this.isreg.isdate =
                        this.statLogin.Logindate == "" ||
                        this.statLogin.Logindate == null
                            ? true
                            : false;
                    break;
                case 5:
                    this.regPhone(this.statLogin.Loginmobile);
                    this.isreg.ismobile =
                        this.statLogin.Loginmobile == "" ? true : false;
                    break;
                case 6:
                    this.isreg.iscode =
                        this.statLogin.Logincode == "" ? true : false;
                    break;
            }
        },
        // 切换登录注册
        switchState() {
            if (this.isLogin == false) {
                this.isLogin = true;
                this.cleanData();
            } else {
                this.isLogin = false;
                this.cleanData();
            }
        },
        // 清除数据
        cleanData() {
            this.statLogin.Loginarea = "武汉";
            this.statLogin.Loginname = "";
            this.statLogin.Loginpwd = "";
            this.statLogin.Logindate = "";
            this.statLogin.Loginmobile = "";
            this.statLogin.Loginconf = "";
            this.statLogin.Logincode = "";
            this.isreg.isname = false;
            this.isreg.ispwd = false;
            this.isreg.isdate = false;
            this.isreg.ismobile = false;
            this.isreg.isconf = false;
            this.isreg.iscode = false;
        },
        // 验证手机号密码
        regPhone(phone) {
            let reg = /^1[3-9]\d{9}$/;
            if (reg.test(phone) !== true && phone !== "") {
                this.$message.error("验证手机号有问题,请重新输入！");
            }
        },
        regPwd(password) {
            let reg = /^[0-9a-zA-Z]{6,20}$/;
            if (reg.test(password) !== true && password !== "") {
                this.$message.error("密码格式有问题,请重新输入！");
            }
        },
        // 获取验证码且倒计时
        getVercode() {
            let num = 60;
            this.disabled = true;
            let countdown = setInterval(() => {
                num--;
                this.vercode = "倒计时 " + num + "秒";
                if (num == 0) {
                    this.disabled = false;
                    clearInterval(countdown);
                    this.vercode = "获取验证码";
                }
            }, 1000);
        },
        // 跳转到主页
        jumpHome() {
            if (this.isLogin == false) {
                this.isreg.isname =
                    this.statLogin.Loginname == "" ? true : false;
                // this.regPwd(this.statLogin.Loginpwd);
                this.isreg.ispwd = this.statLogin.Loginpwd == "" ? true : false;
                this.getLogin();
            }
        },
        getLogin() {
            this.axios
                .post("/api/Users/login", {
                    account: this.statLogin.Loginname,
                    password: this.$md5(this.statLogin.Loginpwd),
                })
                .then((res) => {
                    if (res.data.status == 200) {
                        this.$message({
                            showClose: true,
                            message: "登录成功！",
                            type: "success",
                        });
                        const token = res.data.result.token;
                        window.localStorage.setItem("login_token", token);
                        this.$router.push("/Home");
                    } else {
                        this.$message({
                            showClose: true,
                            message: res.data.result,
                            type: "error",
                        });
                    }
                });
        },
    },
};
</script>
<style scoped lang="less">
/deep/ .el-input .el-input__inner {
    position: relative;
    padding-left: 30px;
    height: 35px !important;
}
/deep/.el-input__icon {
    line-height: 35px !important;
}

/deep/input::-webkit-input-placeholder {
    font-size: 12px;
}
/deep/input::-moz-input-placeholder {
    font-size: 12px;
}
/deep/input::-ms-input-placeholder {
    font-size: 12px;
}
.Login {
    width: 100%;
    height: 100%;
}
.Login li {
    list-style: none;
    height: 55px;
}
.Logintitle {
    -webkit-text-stroke: 1px #666;
    color: #ffffff;
    position: fixed;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
}
.Logintit {
    -webkit-text-stroke: 1px #666;
    color: #ffffff;
    position: fixed;
    left: 50%;
    top: 3%;
    transform: translateX(-50%);
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
}
.Login .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
.Login .bg img {
    width: 100%;
    height: 100%;
}
.cenbox {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 20px 100px;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
.cenbox ul {
    z-index: 1;
}

.cenbox ul li p {
    color: red;
    font-size: 12px;
}
.vercode {
    display: inline-block;
    height: 35px;
    // line-height: 35px;
    width: 100px;
    background-color: #fff;
    border-radius: 4px;
    color: #409eff;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #409eff;
    vertical-align: top;
}
.Login ul .reg {
    height: 20px;
    text-align: right;
}
.Login ul .reg p {
    color: #ddd;
    cursor: pointer;
}
.el-icon-location-outline {
    width: 30px;
    position: absolute;
    z-index: 1;
    color: #606266;
    text-align: center;
    line-height: 35px;
}
</style>
