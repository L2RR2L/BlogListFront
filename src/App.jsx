import { useState, useEffect } from 'react'

import Blog from './components/Blog'
import LoginForm from './components/LoginForm'

import loginSerivce from './services/login'
import blogService from './services/blogs'



const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleClick = async (event) => {
    event.preventDefault()

    try {
      const user = await loginSerivce.login({ username, password })
      // window.localStorage.seItem('loggedUser', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong Credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)

    }
  })


  if (user === null) {
    return <LoginForm username={username} password={password} handleClick={handleClick} setUsername={setUsername} setPassword={setPassword} />
  }

  return (
    <h1>Hello</h1>
  )

}

export default App