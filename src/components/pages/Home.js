//Todo arquivo de estilo eu importo dando a ele o nome de styles, depois dentro desse styles eu chamo o estilo da classe que eu preciso EX:({styles.home_container})
import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <a href='/'>Criar Projeto</a>
            <img src={savings} alt="Costs"></img>
        </section>
    )
}

export default Home