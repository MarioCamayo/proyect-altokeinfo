import "../components/pageUseReducer.css";
import NavBar from "./../components/NavBar";
import img1 from "../img/img-use-reducer.png";
import img2 from "../img/img6.png";
import Footer from "../components/Footer";

const PageUseReduscer = () => {
  return (
    <>
      <NavBar />
      <h1 className="title-container">Aprendiendo el Hook useReducer</h1>
      <div className="contenedor-usereducer">
        <p className="content">
          ¡Qué bien que estés aprendiendo useReducer! Este hook es muy útil
          cuando tienes que manejar estados complejos en React o cuando la
          lógica de actualización del estado es más complicada que con
          useState.Aquí te doy una explicación básica y un ejemplo para empezar.
        </p>

        <h2>¿Qué es useReducer?</h2>
        <p className="content">
          useReducer es un hook que se usa para manejar el estado en un
          componente React. Es similar a useState, pero es más adecuado para
          estados que dependen de múltiples acciones o tienen una lógica más
          compleja. Funciona como un patrón de reducción en programación
          funcional.
        </p>

        <h2>Sintaxis Básica</h2>
        <div>
          <img src={img1} alt="imagen de sintaxis de useReduce" />
        </div>

        <ul className="content">
          <li>state: El estado actual.</li>
          <li>
            dispatch: Función que utilizas para enviar acciones al reducer.
          </li>
          <li>
            reducer: Una función que define cómo cambia el estado basado en las
            acciones.
          </li>
          <li>initialState: El valor inicial del estado.</li>
        </ul>
        <img className="img2" src={img2} alt="ejemplo de contador" />
        <h2>Explicación del Ejemplo:</h2>

        <ol className="content">
          <li>
            Reducer Function: La función reducer toma dos argumentos: el estado
            actual y una acción. Dependiendo del tipo de acción (increment o
            decrement), devuelve el nuevo estado.
          </li>
          <li>
            useReducer: Inicializas useReducer con tu función reducer y un
            initialState. En este caso, el estado inicial es un objeto con una
            propiedad count igual a 0.
          </li>
          <li>
            Dispatching Actions: Para actualizar el estado, usas la función
            dispatch, pasando un objeto que describe la acción.{" "}
          </li>
          <li>
            Renderizado: Cada vez que se despacha una acción, el estado se
            actualiza y el componente se vuelve a renderizar con el nuevo
            estado.
          </li>
        </ol>

        <h2>¿Cuándo usar useReducer?</h2>
        <ul className="content">
          <li>
            Cuando el estado tiene una estructura más compleja (por ejemplo,
            múltiples propiedades).
          </li>
          <li>
            Estado Complejo: El estado tiene múltiples valores o propiedades,
            como objetos o arrays.
          </li>
          <li>
            Lógica Compleja: Las actualizaciones del estado requieren lógica
            condicional, múltiples tipos de acciones, o cuando la actualización
            del estado depende de su valor anterior.
          </li>
          <li>
            Escalabilidad: (useReducer): Si planeas agregar más lógica, como
            diferentes tipos de acciones (por ejemplo, un botón de reinicio,
            acciones asincrónicas, etc.), o si el estado tiene más propiedades,
            useReducer se vuelve más adecuado.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PageUseReduscer;
