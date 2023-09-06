import './App.css';
import {useState} from "react"

function VennForm(){
  const [data, setData] = useState(null)

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
  
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const alt = Object.fromEntries(formData);
    // You can pass formData as a fetch body directly:
    fetch('http://localhost:5000', { method: form.method, body: JSON.stringify(alt), headers: { 'Content-Type': 'application/json' }}).then(
      response => response.json()
    ).then(json => setData(json));
  }
  if (!data){
  return(
    
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <textarea placeholder="Set A" name="seta" id="seta"></textarea>
      </div>
      <div>
        <textarea placeholder="Set B" name="setb" id="setb"></textarea>
      </div>
      <button type="submit">Gerar Diagrama</button>
    </form>
  );
  }
  return(
    <>
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <textarea placeholder="Set A" name="seta" id="seta"></textarea>
      </div>
      <div>
        <textarea placeholder="Set B" name="setb" id="setb"></textarea>
      </div>
      <button type="submit">Gerar Diagrama</button>
    </form>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );

  }

export default VennForm;
