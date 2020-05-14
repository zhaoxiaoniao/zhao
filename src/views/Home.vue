<template>
    <div class="home">
        <div class="heade" ref="sol">
            <Menu
                mode="horizontal"
                active-name="1"
                @on-select="select"
                width="auto"
            >
                <MenuItem name="about">
                    <Icon type="ios-paper" />
                    内容管理
                </MenuItem>
                <MenuItem name="pable">
                    <Icon type="ios-people" />
                    用户管理
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="about">
                    <Icon type="ios-paper" />
                    内容管理
                </MenuItem>
                <MenuItem name="about">
                    <Icon type="ios-paper" />
                    内容管理
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-construct" />
                    综合设置
                </MenuItem>
                <ul class="heilon">
                    <li class="heade-login">
                        <Dropdown>
                            <img src="../assets/xiaoren.png" alt="" />
                            <i>
                                登录
                                <!-- <Icon type="ios-arrow-down"></Icon> -->
                            </i>
                            <DropdownMenu slot="list" v-if="true">
                                <DropdownItem>个人信息</DropdownItem>
                                <DropdownItem>退出</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>

                    <li class="heade-right">
                        <Input search placeholder="Enter something..." />
                    </li>
                </ul>
            </Menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// base64 加密解密
// let Base64 = require("js-base64").Base64;
export default {
    name: "Home",
    components: {},
    created() {
        // console.log(process.env.VUE_APP_ADMIN)
        // console.log(Base64.encode('我是猪'))
    },
    methods: {
        select(data) {
            if (data === "about") {
                this.$router.push({ path: "/about" });
            } else if (data === "pable") {
                this.$router.push({ path: "/pable" });
            }
        },
    },
};
</script>
<style scoped>
li,
i {
    list-style: none;
    font-style: normal;
}
.home {
    width: 80%;
    margin: 0 auto;
}
.heade {
    /* position: relative; */
    width: 100%;
}
.heade ul li {
    font-size: 16px;
}
.ivu-input-with-suffix {
    width: 150px;
}
.heilon {
    display: flex;
    justify-content: flex-end;
    /* color: #ffffff; */
}
.heade-login {
    white-space: nowrap;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
}
.heade-login img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
    border-radius: 50%;
    transform: translateY(15%);
}
.heade-right {
    margin-left: 10px;
    height: 100%;
}
.content {
    /* height: 500px; */
    width: 100%;
    /* background-color: pink; */
}
</style>
