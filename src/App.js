import './App.css';

//1. Create a component named "Person" that takes two props - "name" and "age". The component should
//display the person's name and age in a paragraph element
function App() {
  const name = "Lovejot";
  const age = 20;
  return (
    <div>
      <p style={{textAlign:"center"}}>Hello there. My name is {name}. I am {age} years old. Currently, I am learning React JS.</p>
    </div>
  );
}

export default App;
