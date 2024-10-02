import { useState } from "react";
import './Header.css'
import './App.css'
import './Description.css'
function TodoList() {

/*
Toteuta todolist sovellus materiaalin mukaisesti siten, että taulukossa käytetään ag-grid komponenttia.

Tutustu ag-grid komponentin dokumentaatioon ja kytke seuraavat kaksi ominaisuutta päälle:

    floating filter - Suodatus kentät on pysyvästi näkyvissä taulukon yläosassa
    row animation - Kun järjestät taulukon rivejä, ne siirtyvät oikeille paikoille animoidusti. 
    Tämä vaatii useampia rivejä, jotta sen vaikutus näkyy.

*/

const [info, setInfo] =useState({desc:"", date: ""});
const [todos, setTodos] = useState([]);

const handleDescription = (event) => {
    setInfo({...info, desc: event.target.value});
};

const handleDate = (event) => {
    setInfo({...info, date: event.target.value});
};

const deleteTodo = (index) => {
  setTodos(todos.filter((todo, i) => i !== index));
}

const addTodo = () => {
  
  if (!info.desc || !info.date){
    alert("Write a description and a date")
  }

  else {
    setTodos([...todos, {...info}]);
    setInfo({desc:"", date: ""});
  }

};

    return(
        //Note to self: using deleteTodo(index) without arrow function will invoke the function when page renders
        //fieldset & ledend from article: https://css-tricks.com/how-to-add-text-in-borders-using-basic-html-elements/
        <>
         <header className='header'>
          <h2>Simple TodoList</h2>
          </header>
        <fieldset>
          <legend>Add todo:</legend>
            Description: <input onChange={handleDescription} value={info.desc} />
            Date: <input onChange={handleDate} value={info.date} />
            <button onClick={addTodo}>Add</button>   
        </fieldset>
        <table className='App'>
          <thead>
            <tr><th>Date</th><th>Description</th><th>&nbsp;</th></tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
            <tr>
              <td>{todo.date}</td><td>{todo.desc} </td><td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>

      </>

    )

}
  
export default TodoList;
