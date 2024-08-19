import { useReducer } from "react"

const currentTime = new Date()
const month = currentTime.getMonth()
const year = currentTime.getFullYear()
const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];



const valorInicial = {
    month:month,
    year:year
}

const reducer = (state, action)=>{
  return state

}

const Calendario = () => {
  const  [fecha, dispatch] = useReducer(reducer, valorInicial)

  return (
    <>
      {meses[fecha.month]} {fecha.year}
    </>
  ) 
}

export default Calendario