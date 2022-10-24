import { useState } from "react";

function IfRenderizazao (){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function enviaremail(e){
        e.preventDefault() //Para não enviar o o evento    
        setUserEmail(email)
        

    }

    function limparEmail(e){
        setUserEmail("") 
    }

    return(
     <div>
        <h2>Cadastre seu e-mail:</h2>    

        <form>
            <input type="email" placeholder="Digite seu e-mail" 
            onChange={(e) =>setEmail(e.target.value)}
            />
                <button onClick={enviaremail}>Enviar e-mail</button>
            {userEmail && (                                          //{userEmail && é uma forma de dizer ao javaScript ("Se tem o userEmail execute o código abaixo")
                <div> 
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>limpar E-mail</button>
                </div>
            )}                                       
        </form>
     </div>   
    )
}

export default IfRenderizazao