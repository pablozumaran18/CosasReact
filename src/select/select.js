import "./select.css"

function Select (props){
    return(

        <div>

            <h3>{props.titulo}</h3>
              <select>
                    <option>Seleccione {props.titulo}</option>
                    {props.items?.map(items =>{
                        return(
                        <option>
                            {items}
                        </option>)
                    })}

              </select>
            
        </div>

    )
}

export default Select