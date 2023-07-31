

const UserList = ({userList, setFormAdd, userData, sendMsgBoxWindow}) => {

    const alphabeticalList = userList.sort((a, b) => a.first_name.localeCompare(b.first_name))

       

    return(
        <main className="card__info">
            
            <div className="card__head">
                <p>Cantidad de clientes: {userList.length}</p>
                <button onClick={() => setFormAdd(true)}>Crear usaurio</button>
            </div>
            <div className="card__container">
                {/* //! ########### use map ########### */}
                { 
                    alphabeticalList.map((user) => (
                        <div className="card__user" key={user.id}>
                            <h3 className="card__fullname">{user.first_name} {user.last_name}</h3>
                            <div className="card__all">
                                <div className="card__data">
                                    <p className="card__p">CORREO:</p>
                                    <p className="card__p2">{user.email}</p>
                                    <p className="card__p">CUMPLEAÑOS:</p>
                                    <p className="card__p2">{user.birthday}</p>
                                </div>
                                <div className="buttons">
                                    <i onClick={() => sendMsgBoxWindow(user)} className="fa-regular fa-trash-can"></i>
                                    <i onClick={() => userData(user)} className="fa-regular fa-pen-to-square"></i>
                                </div>
                            </div>
                        </div>
                    ))
                } 
                {/* //! ########### end map ########### */}
            </div>
        </main>
        
    )
}
export default UserList