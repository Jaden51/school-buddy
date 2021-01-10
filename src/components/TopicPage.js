import {
  useParams,
} from 'react-router-dom'
import schoolData from "./schoolData"
import TopicPost from "./TopicPost";

function TopicPage() {
  const { schoolId, topicId } = useParams();

  const filteredSchools = schoolData.filter((item) => {
    return item.name === schoolId
  });

  let schoolTopic = filteredSchools.length > 0 ? filteredSchools[0][topicId] : [];

  return (
    <div>
      {/* <h3>{`${topicId} at ${schoolId} is great!`}</h3> */}
      {schoolTopic?.length > 0 &&
        schoolTopic.map(({commenter, comment, timestamp}) => (
          <TopicPost key={`${commenter}_${comment}`} commenter={commenter} comment={comment} timestamp={timestamp}/>
        ))}
    </div>
  );
}

export default TopicPage;
