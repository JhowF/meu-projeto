import styles from './Pessoa.module.css';



//Melhor maneira quando se for usar varios props

function Pessoa ({nome, idade, profissao, foto}){

    return(
    <div className={styles.PessoaCotainer}>
        <img src={foto} alt={nome} />
        <h2 className={styles.PessoaContent}>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
    </div>
    )
};


/* function Pessoa (props){

    return(
    <div>
        <img src={props.foto} alt={props.nome} />
        <h2>Nome: {props.nome}</h2>
        <p>Idade: {props.idade}</p>
        <p>Profissao: {props.profissao}</p>
    </div>
    )
};
*/





export default Pessoa;