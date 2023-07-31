import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserList from './Components/UserList'
import UsersForm from './Components/UsersForm'
import MsgBox from './Components/MsgBox'
import OnLoad from './Components/OnLoad'

function App() {

  const [formAdd, setFormAdd] = useState(false)

  const [userList, setUserList] = useState([])

  const [userSelection, setUserSelection] = useState(null)

  const [ msgboxWindow, setMsgBoxWindow ] = useState(false)

  const [locateUserDelete, setLocateUserDelete] = useState(null)

  const [onLoad, setOnLoad] = useState(true)

  
  useEffect(() => {
    showUsers()
  },[])

  const showUsers = () => {
    axios
    .get(`https://users-crud.academlo.tech/users/`)
    .then(res => {
      setUserList(res.data)
      setOnLoad(false)
    })
    .catch((error) => console.error(error)); 

  }

  const userData = (user) => {
    setFormAdd(true)
    setUserSelection(user)
  }

  const notChanges = () => {
    setMsgBoxWindow(false)
    setLocateUserDelete(null)
  }
  
  const sendMsgBoxWindow = (user) => {
    setMsgBoxWindow(true)
    setLocateUserDelete(user)
  }

  const eraseUser = (locateUserDelete) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${locateUserDelete?.id}/`)
      .then(() => {
        showUsers()
        setMsgBoxWindow(false)
        setLocateUserDelete(null)
      })
  } 

  return (
    <main> { onLoad && <OnLoad />}
      <div className='app__main'>
          { formAdd === true && 
            <UsersForm 
              setFormAdd={setFormAdd}
              showUsers={showUsers}
              userSelection = {userSelection}
              setUserSelection={setUserSelection}
            
            />
          }

        <div className='container__card'>
          <UserList 
            userList= {userList}
            setFormAdd={setFormAdd}
            userData={userData}
            showUsers = {showUsers}
            sendMsgBoxWindow={sendMsgBoxWindow}
          />
          
          {
            msgboxWindow &&
            <MsgBox 
            
            locateUserDelete={locateUserDelete}
            notChanges = {notChanges}
            eraseUser = {eraseUser}
            />
          }
        </div>      

      </div>
    </main>
  )
}

export default App