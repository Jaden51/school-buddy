import {useParams} from 'react-router-dom'

function Schools() {
  const {schoolId} = useParams();
  if (schoolId != null) {
    return (
      <div>
        School page for {schoolId}
      </div>
    )
  }
}

export default Schools;
