import Button from "./EventPropsButton"


function Evento(){
function meuEvento(){
    alert("Evento acionado")
    
}

function segundoEvento(){
    console.log("Segundo acionado")
    
}
 

    return(
        <div>
            <p>Clique para disparar um evento:</p>

            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
            {/* <button onDoubleClick={meuEvento}>Ativar!</button> */}
            
            
            
            
            
            
            {/* <button onMouseOver={meuEvento}>Ativar!</button> */}
            {/* <button onMouseOut={meuEvento}>Ativar!</button> */}
            {/* <button onClick={meuEvento}>Ativar!</button> */}    
            {/* <button onFocus={meuEvento}>Ativar!</button> */}
            {/* <button onBlur={meuEvento}>Ativar!</button>   _Quando perde o foco */}

        </div>

    )
}

export default Evento