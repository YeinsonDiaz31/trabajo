import React from 'react'
export const Formulario = () => {

    const [nombre, setNombre] = React.useState("")
    const [apellido, setApellido] = React.useState("")
    const [lista, setLista] = React.useState([])
    const [op, setOp] = React.useState("")
    const [prin, setprint]=React.useState(true)
    const [reg, setReg]=React.useState(false)
    const [act, setAct]=React.useState(false)
    const [eli, setEli]=React.useState(false)

    const mostrar=()=>{
        if (op === "Seleccione..."){
            setprint(true)
            setReg(false)
            setAct(false)
            setEli(false)

        }
        if (op === "Ingresar"){
            setprint(false)
            setReg(true)
            setAct(false)
            setEli(false)

        }
        if (op === "Eliminar"){
            setprint(false)
            setReg(false)
            setAct(false)
            setEli(true)

        }
        if (op === "Actualizar"){
            setprint(false)
            setReg(false)
            setAct(true)
            setEli(false)

        }
        
    }
    const eliminar = async() => {
       
        if (!nombre.trim()) {
            alert("Es necesario que ingrese el nombre")
            return
        }   
        const aux =lista.filter(item=>item.nombre !== nombre)
        setLista(aux)
        alert("Registro eliminado")
        setNombre("")
        setprint(true)
        setReg(false)
        setAct(false)
        setEli(false)
        setOp("Seleccione...")
    }
    const actualizar = async e => {
        e.preventDefault()
        if (!nombre.trim()) {
            alert("Es necesario que ingrese el nombre")
            return
        }   
        const array =  lista.map(
            item => item.nombre === nombre ? {
            apellido : apellido,
            nombre : nombre
          }: item 
          )

        setLista(array)
        alert("Registro actualizado")

        setNombre("")
        setApellido("")
        setprint(true)
        setReg(false)
        setAct(false)
        setEli(false)
        setOp("Seleccione...")

    }

    const guardar = async(e) => {
        e.preventDefault();
        if (!nombre.trim() || !apellido.trim()) {
            alert("No puede dejar ningún campo vacio")
            return
        }
        
        setLista([
            ...lista,
            {nombre: nombre, apellido: apellido}
        ])
        alert("Registro agregado")
        //limpiar los estados
        
        //limpiar los estados
        setNombre("")
        setApellido("")
        setprint(true)
        setReg(false)
        setAct(false)
        setEli(false)
        setOp("Seleccione...")
    
        

    }

  return (
    <div>
        <h2>Formulario</h2>
        <h5>¿qué desea realizar?</h5>
        <select id="inputState" class="form-control" value={op} onClick={mostrar} onChange={(e)=> setOp(e.target.value)}>
        <option selected>Seleccione...</option>
        <option>Ingresar</option>
        <option>Eliminar</option>
        <option>Actualizar</option>
      </select>
      <br />
    <div>
        {
            prin ? 
            <p>Aquí podrá realizar la operación que desee</p>
            :
            act ? 
            <div>
                <p>Ingrese nombre de la persona que quiere actualizar</p>
                <input onChange={(e)=>setNombre(e.target.value)} type="text"></input>
                <p>Ingrese el nuevo apellido que quiere establecer</p>
                <input onChange={(e)=>setApellido(e.target.value)} type="text" /> 
                <button type='submit' onClick={actualizar}>Actualizar</button>
                  
            </div>


            :
            eli ?
            <div>
            <p>Ingrese nombre de la persona que quiere eliminar</p>
            <input onChange={(e)=>setNombre(e.target.value)} type="text"></input>
            <button type='submit' onClick={eliminar}>Eliminar</button>
              
            </div>
            :
            reg ? 
            <div>
            <p>Ingrese el nombre</p>
            <input onChange={(e)=>setNombre(e.target.value)} type="text"></input>
            <p>Ingrese el apellido</p>
            <input onChange={(e)=>setApellido(e.target.value)} type="text" /> 
            <button type='submit' onClick={guardar}>Guardar</button>
              
            </div>
            :

            alert("Ha ocurrido un problema")
        }

    </div>
            

            <div>
                
                <h3>Lista de usuarios</h3>
                <ol>
                    {
                        lista.map((x, i)=>(
                        <li key={i}>{x.nombre} {x.apellido}</li>
                        ))
                    }
                </ol>

            </div>
     
    </div>
  )
}

