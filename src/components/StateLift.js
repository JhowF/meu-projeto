function StateLift({anyName}){


    return(

        <div>
            <p>Digite seu nome: </p>
            <input type="text" placeholder="Qual seu nome?"  onChange={(e) => anyName(e.target.value)}/>
        </div>
    )
}

export default StateLift;


