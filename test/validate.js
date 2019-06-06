
// Para validar nombre y contraseña
export const validateUser = (name, email,password) => {
        if(name.length === 0 || password.length === 0 || email.length === 0)
           return false
        else
            return true
}