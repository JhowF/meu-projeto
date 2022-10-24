function Evento({numero}){
function meuEvento(){
    console.log(`Fui ativado ${numero}`)
    
}

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            {/* <button onMouseOver={meuEvento}>Ativar!</button> */}
            {/* <button onMouseOut={meuEvento}>Ativar!</button> */}
            {/* <button onClick={meuEvento}>Ativar!</button> */}
            <button onDoubleClick={meuEvento}>Ativar!</button>
            {/* <button onFocus={meuEvento}>Ativar!</button> */}
            {/* <button onBlur={meuEvento}>Ativar!</button>   _Quando perde o foco */}

        </div>

    )
}

export default Evento