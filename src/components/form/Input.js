import styles from './Input.module.css'
//O input recebera todas as propriedades dinamicamente
//placeholder é o texto de ajuda do input, e handleOnChange serve para poder manusear os dados do input
function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            {/*label é a etiqueta  */}
            <label htmlFor={name}>{text}: </label>
            <input 
                type={type} 
                name={name} 
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    ) 
}

export default Input