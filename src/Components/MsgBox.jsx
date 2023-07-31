
const MsgBox = ({locateUserDelete, notChanges, eraseUser}) => {
    
    return(
        <div className="container__box">
            <div className="box">
                <div className="box__title">
                    Eliminar usuarios
                </div>

                <div className="box__message">
                    ¿Deseas eliminar el suario <strong> {locateUserDelete?.first_name}</strong>?
                </div>
                <div className="box__name">
                    {locateUserDelete?.first_name} {locateUserDelete?.last_name}
                </div>

                <div className="box__buttons">
                    <button onClick={() => eraseUser(locateUserDelete)}>Eliminar</button>
                    <button onClick={notChanges}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
export default MsgBox