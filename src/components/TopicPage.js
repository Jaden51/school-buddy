import {
  useParams,
} from 'react-router-dom'
import CommentsFeed from "./CommentsFeed";
import schoolData from "./schoolData"

function TopicPage() {
  const { schoolId, topicId } = useParams();

  const filteredSchools = schoolData.filter((item) => {
    return item.name === schoolId
  });

  const comments = filteredSchools.length > 0 ? filteredSchools[0][topicId] : [];

  return (
    <CommentsFeed comments={comments} />
  );
}

export default TopicPage;
