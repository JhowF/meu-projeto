import style from './Pessoa.module.css';

function SayMyName(props) {
    return(
        <div>
            <p className={style.PessoaContent}>Fala ai {props.nome}, sua idade ainda é {props.idade} anos ?</p>
        </div>

    )
}
export default SayMyName;