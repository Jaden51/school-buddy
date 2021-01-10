import { List } from 'antd/lib/form/Form';
import {
  useParams,
} from 'react-router-dom'
import schoolData from "./schoolData"

function TopicPage() {
  const { schoolId, topicId } = useParams();
  let school = null
  for (let i = 0; i < schoolData.length; i++) {
    if (schoolData[i].name == schoolId) {
      school = schoolData[i]
    }
  }
  console.log(school)
  console.log(school[topicId].length)
  console.log(school[topicId][0])
  let schoolTopic = school[topicId]
  console.log(schoolTopic)
  return (
    <div>
      <h3>{`${topicId} at ${schoolId} is great!`}</h3>
      {schoolTopic.map((result) => (
        <p key={`${result.commenter}_{result.comment}`}>
          {result.commenter} - {result.comment}
        </p>
      ))}
    </div>
  );
}

export default TopicPage;
