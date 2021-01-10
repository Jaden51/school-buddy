import { Form, Input, Button } from 'antd';

export default function NewCommentForm({onSubmit}) {

  return (
    <Form onFinish={(values) => onSubmit({
      ...values,
      timestamp: Date.now()
    })}>
      <Form.Item label="Commenter" name="commenter">
        <Input />
      </Form.Item>
      <Form.Item label="Comment" name="comment">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
