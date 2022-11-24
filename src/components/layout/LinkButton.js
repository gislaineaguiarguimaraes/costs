import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'
//Nesta função é passado como props o to, que é para onde o cliente vi ser redirecionado e o text que é o texto que sera baseado na pagina que estiver o botão. Quando se passa varios parametros se coloca dentro de {}
function linkButton({to, text}) {
    return (
        <Link className={styles.btn} to={to}> 
            {text}
        </Link>
    )
}

export default linkButton