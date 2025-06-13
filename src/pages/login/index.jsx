import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import { getUserToken } from '@/store/moudules/user'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (data) => {
        await dispatch(getUserToken(data))
        message.success('登录成功！')
        navigate('/')
    }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={handleSubmit}>
          <Form.Item
          validateTrigger="onBlur"
          name="mobile"
          rules={
            [
                {
                     required: true, 
                     message: '请输入手机号!' 
                },
                {
                    pattern: /^1[3-9]\d{9}$/,
                    message: '请输入正确格式的手机号!'
                }
            ]
        }
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
          validateTrigger="onBlur"
          name="code"
          rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login