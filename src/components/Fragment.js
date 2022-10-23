import Item from "./props";


function ListaFragment(){
    return(
    
        <>

        <h1> Minha Lista</h1>
        <ul>
            <Item marca = "Ferrari" ano_lançamento={1985}/>
            <Item marca = "BMW" ano_lançamento={1964}/>
            <Item marca = "Renalta"/>
            <Item marca = "Chevrolet" ano_lançamento={35}/>
            <Item />
        </ul>
        </>
    )
        
    };
    

    export default ListaFragment

    
    






/*  

MANEIRA CONVENCIONAL

function list(){
return(

    <div>
         <h1> Minha Lista</h1>

         <ul>
            <li>Item 1</li>
            <li>Item 2</li>
         </ul>
    </div>
);
    
};
export default list; */


//======================================

//MANEIRA COM O FRAGMENT

