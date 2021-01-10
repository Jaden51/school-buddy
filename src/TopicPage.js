import {
  useParams,
} from 'react-router-dom'

function TopicPage() {
  const { schoolId, topicId } = useParams();
  return (
    <div>
      <h3>{`${topicId} at ${schoolId} is great!`}</h3>
    </div>
  );
}

export default TopicPage;
