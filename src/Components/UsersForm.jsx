import axios from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

const UsersForm = ({setFormAdd, showUsers, userSelection, setUserSelection}) => {
    
    const {handleSubmit, reset, register} = useForm()

    const noneInput = 
        {fist_name: "",
        last_name: "", 
        email: "", 
        password: "", 
        birtday :""}

    useEffect(() => {
        if(userSelection) {
            reset(userSelection)
        } else {
            reset(noneInput)
        }

    },[userSelection])

    const submit = (allData) => {
        if(userSelection){
            //? Aquí se actualiza un usuario
            axios
                .put(`https://users-crud.academlo.tech/users/${userSelection.id}/`, allData)
                .then(() => {
                    showUsers()
                    formDataClose()
                })
        } else {
            //? Aquí se crea un usuario
            axios
                .post(`https://users-crud.academlo.tech/users/`, allData)
                .then(() => {
                    showUsers()
                    formDataClose()
                })
        }       
    }

    const formDataClose = () => {
        setFormAdd(false)
        setUserSelection(null)
        
    }


    return(
        <div className="container__register">
            <div className="register__form">
                <i onClick={() => formDataClose()} className="fa-solid fa-circle-xmark"></i>
                
                <h2>Nuevo usuario</h2>
                
                <form onSubmit={handleSubmit(submit)}>
                    <p>Nombre</p>
                    <input
                        className="inputs" 
                        type="text" 
                        id="first_name" {...register("first_name")}
                    />
                    <p>Apellidos</p>
                    <input 
                        className="inputs"
                        type="text" 
                        id="last_name" {...register("last_name")}
                    />
                    <p>Correo</p>
                    <input 
                        className="inputs"
                        type="email" 
                        id="email" {...register("email")}
                    />
                    <p>Contraseña</p>
                    <input 
                        className="inputs"
                        type="password" 
                        id="password" {...register("password")}
                    />
                    <p>Cumpleaños</p>
                    <input
                        className="birthday" 
                        type="date" 
                        id="birthday" {...register("birthday")}
                    />
                    <div className="div__button">
                        <button className="button__submit" type="submit">{userSelection ? "Actualiza usuario" : "Agregar usuario"}</button>
                    </div>

                </form>
                
            </div>
        </div>
    )
}
export default UsersForm