import { Card, Comment, Avatar } from "antd";


function TopicPost({ commenter, comment }) {
  return (
    <Card className='topic-post'>
    <Comment
      author={commenter}
      content={
        <p>{comment}</p>
      }
      avatar={
        <Avatar
          src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/f0fizqoph7jt1bhmq3iy"
        />
      }
    />
    </Card>
  )
}

export default TopicPost;
