<template>
    <div id="app">
        <div class="wrapper">
            <div class="top-nav">
                {{ loginType[option] }}
            </div>
            <div class="bottom">
                <div class="container">
                    <a-form :form="form" @submit="handleSubmit">
                        <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol"
                            :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
                            <label for="用户名">用户名:</label>
                            <a-input v-decorator="[
                                'userName',
                                { rules: [{ required: true, message: '请输入用户名!' }] },
                            ]" placeholder="请输入用户名">
                                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-item>
                        <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol"
                            :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
                            <label for="密码">密码:</label>
                            <a-input v-decorator="[
                                'password',
                                { rules: [{ required: true, message: '请输入密码!' }] },
                            ]" type="password" placeholder="请输入密码">
                                <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-button class="login-btn" type="primary" html-type="submit">
                                Log in
                            </a-button>
                        </a-form-item>
                        <div class="btn-wrapper">
                            <a-button :class="{ active: option === 0 }" @click="changeBtn(0)">教师</a-button>
                            <a-button :class="{ active: option === 1 }" @click="changeBtn(1)">管理员</a-button>
                        </div>
                    </a-form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { post } from '../utils/request'
import { setLocalStorage } from '@/utils/Obj.js';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};
export default {
    name: 'App',
    data() {
        return {
            loginType: ['教师', '辅导员'],
            option: 0,
            formItemLayout,
            formTailLayout,
            form: this.$form.createForm(this, { name: 'horizontal_login' }),
        }
    },
    methods: {
        // Only show error after a field is touched.
        userNameError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('userName') && getFieldError('userName');
        },
        // Only show error after a field is touched.
        passwordError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('password') && getFieldError('password');
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    post('/office-service/login/instructor', {
                        id: values.userName,
                        password: values.password,
                        type: this.option
                    }).then((res) => {
                        if (res.data.accessToken) {
                            setLocalStorage('token', res.data.accessToken)
                            setLocalStorage('instructorId', values.userName)
                            this.$message.success('登录成功!')
                            this.$router.push('/Home/HomeUser')
                        } else {
                            Promise.reject()
                        }
                    }).catch((e) => {
                        this.$message.error(e)
                    })
                }
            });
        },
        changeBtn(val) {
            this.option = val;
        }
    },
}
</script>
  
<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.wrapper {
    width: 100vw;
    height: 100vh;
}

.bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 93%;
    border: 1px solid #e2e2e2;
}

.menu {
    width: 15%;
    height: 100%;
    border-right: 1px solid #e2e2e2;
}

.top-nav {
    display: flex;
    align-items: center;
    min-height: 7%;
    width: 100%;
    left: 292px;
    top: 265px;
    color: rgba(0, 20, 183, 1);
    font-size: 30px;
    text-align: left;
    font-family: OPPOSans-regular;
    padding-left: 100px;
}

.container {
    width: 25%;
    min-height: 40%;
    border: 1px solid #e2e2e2;
    border-radius: 20px;
    padding: 60px 30px;
    margin-top: -80px;

    .ant-form {
        width: 100%;
    }

    label {
        margin-top: -4px;
        width: 30%;
        color: rgba(0, 20, 183, 1);
        font-size: 18px;
        font-family: OPPOSans-regular;
    }

    .btn-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-around;

        .active {
            line-height: 20px;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 1);
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            text-align: center;
            font-family: Roboto;
            border: 1px solid #4a43e6;
            color: #4a43e6;
        }
    }
}

.login-btn {
    margin-top: 30px;
    width: 83%;
    background-color: #4a43e6;
    border-color: #4a43e6;
    color: #fff;
    margin-left: 9.5%;
}

.login-btn:hover {
    color: #fff !important;
}
</style>

<style scoped>
>>>.ant-form-item-children {
    display: flex;
}
>>> .ant-btn:hover {
    border-color: #4a43e6;
    color: #4a43e6;
}
>>> .ant-input-prefix {
    margin-top: -3px;
}
</style>
  