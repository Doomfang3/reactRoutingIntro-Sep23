import { useParams } from 'react-router-dom'

const ReactPage = () => {
  const { version } = useParams()

  return (
    <>
      <h1>{version} React Page</h1>
    </>
  )
}

export default ReactPage
