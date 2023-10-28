import styled from './Bienvenida.module.css'
import { motion } from "framer-motion";

const Bienvenida = () => {
  return (
    <div className={styled.pantalla}>
        <motion.div className={styled.container} 
                    initial={{ y: -500}}
                    transition={{ duration: 0.5 }}
                    animate={{ y: 0}}>
            <div>
                <h3 className={styled.titulo}>Bienvenido a !OE!</h3>

            </div>
            <div>
                <p className={styled.text}>Recuerda iniciar sesion para conectarte a las salas de voz</p>
            </div>
        </motion.div>
      
    </div>
  )
}

export default Bienvenida
