import {useState} from "react"


function EventoParaFomr(){
    
    function cadastraUsuario(event){
        event.preventDefault()
        console.log("Usúario cadastrado com sucesso!")

        console.log(name)
        console.log(senha)
        
    }

const [name, setName] = useState()

const [senha, setSenha] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                <input type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                
                onChange={(nomeQualquer) =>setName(nomeQualquer.target.value)}/>
                
                </div>

                <div>
                <label htmlFor="senha">Senha:</label>
                <input type="password" 
                id="senha"
                name="senha"
                placeholder="Digite sua senha" 
                onChange={(nomeQueEuQuiser) => setSenha(nomeQueEuQuiser.target.value)}/>
                
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>

            </form>
        </div>
    )
}
export default EventoParaFomr