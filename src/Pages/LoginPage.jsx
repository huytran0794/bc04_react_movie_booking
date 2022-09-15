import React from "react";
import Lottie, { useLottie } from "lottie-react";
import bg_login from "../assets/bg_login.json"
import { Button, Checkbox, Form, Input } from 'antd';
export default function LoginPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
    let {username:taikhoan, password:matkhau} = values;

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const options = {
    animationData: bg_login,
    loop: false
  };
  console.log(options);

  const { LoginView } = useLottie(options);
  return (
    <div className="container flex items-color">
      <div className="w-1/2 h-1/2">
        <Lottie animationData={bg_login}/>        
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
