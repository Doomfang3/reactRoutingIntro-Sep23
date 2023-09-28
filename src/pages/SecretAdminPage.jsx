import { Navigate } from 'react-router-dom'

const isAdmin = false

const SecretAdminPage = () => {
  if (!isAdmin) {
    return <Navigate to='/' />
  } else {
    return (
      <>
        <h1>All my secrets</h1>
        <p>I hate cheese</p>
        <p>I love tech</p>
      </>
    )
  }
}

export default SecretAdminPage
