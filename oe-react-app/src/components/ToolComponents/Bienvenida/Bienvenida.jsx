import styled from './Bienvenida.module.css'

const Bienvenida = () => {
  return (
    <div className={styled.pantalla}>
        <div className={styled.container}>
            <div>
                <h3 className={styled.titulo}>Bienvenido a !OE!</h3>

            </div>
            <div>
                <p className={styled.text}>Recuerda iniciar sesion para conectarte a las salas de voz</p>
            </div>
        </div>
      
    </div>
  )
}

export default Bienvenida
