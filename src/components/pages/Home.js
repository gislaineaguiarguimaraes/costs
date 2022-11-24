//Todo arquivo de estilo eu importo dando a ele o nome de styles, depois dentro desse styles eu chamo o estilo da classe que eu preciso EX:({styles.home_container})
import styles from './Home.module.css'
//Importar a imagem da home
import savings from '../../img/savings.svg'
//Importar função do botão
import LinkButton from '../layout/LinkButton'


function Home() {
    return(
        //Manter a semantica do Html 
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            {/*Aqui eu chamo a função do botão (LinkButton) e digo no to para onde o cliente vai ser redirecionado e o texto do botão */}
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="Costs"></img>
        </section>
    )
}

export default Home