import React from 'react'
import { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { connect } from "react-redux"
import AuthStore from '../store'
import logo from '../../../logo.png'

import { Row, Col, Card, Skeleton, Input, Tooltip, Form, Checkbox, Button, Image } from 'antd'
import { MailOutlined, InfoCircleOutlined, KeyOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'

const { Meta } = Card

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

function Login() {

  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Row style={{ height: '100%', padding: '4% 30% 0 30%' }}>
        <Col span={24} >
          <Card
            style={{ margin: '0% 10% 0 10%' }}
            bordered={true}
            hoverable={true}
          // actions={[
          //   <SettingOutlined key="setting" />,
          //   <EditOutlined key="edit" />,
          //   <EllipsisOutlined key="ellipsis" />,
          // ]}
          >
            <Row type="flex" align="center">
              <Col>
                <Image
                  src={logo}
                  preview={false}
                  style={{ height: 170, width: 170 }}
                ></Image>
              </Col>
            </Row>
            <Skeleton loading={loading} card active>
              <Meta
                title="Welcome To Kisomo Kenya"
                align="center"
                description="Login into your account"
              />
              <Form
                name="login"
                style={{ padding: '5% 0 0 0' }}
              // initialValues={}
              // onFinish={}
              // onFinishFailed={}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Email is required' },
                    { type: "email", message: 'must be a valid email address' }
                  ]}
                >
                  <Input
                    placeholder="Enter Email Address"
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    suffix={
                      <Tooltip title="Must be a valid email address">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    { min: 8, message: 'Password too short' }
                  ]}
                >
                  <Input.Password
                    prefix={<KeyOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>

                <Form.Item name="remember">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    block
                    htmlType="submit"
                    icon={<LoginOutlined />}
                    loading={loading2}
                    onClick={() => setLoading2(true)}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Skeleton>
            <Skeleton loading={loading} card active>
              <Meta
                title=""
                style={{ textAlign: 'center' }}
                description="Dont have an account ?"
              />
              <Button
                style={{ margin: '2% 0 0 0' }}
                type="primary"
                block
                icon={<UserOutlined />}
              >
                Create an account
              </Button>
            </Skeleton>
            <div align="center" style={{ margin: '1% 0 0 0' }}>
              <i>Revolutionizing Education for<br/> the African Child.</i>
            </div>
          </Card>
          {/* <div>Count: {props.count}</div>

            <button onClick={() => props.increaseCounter()}>Increase Count</button>

            <button onClick={() => props.decreaseCounter()}>Decrease Count</button> */}
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(AuthStore.actions.increaseCounter()),
    decreaseCounter: () => dispatch(AuthStore.actions.decreaseCounter()),
  }
}

Login.propTypes = {
  count: propTypes.number,
  increaseCounter: propTypes.func,
  decreaseCounter: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
