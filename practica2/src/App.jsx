
import './App.css'
import Table from "./components/table/Table";
function App() {
  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];
  
  const averageIncomes=
  netIncomes.reduce((acumulator, element)=> acumulator+element.income,0)/netIncomes.length;

  return (
    <>
    <Table netIncomes={netIncomes}/>
    <p>Promedio: {averageIncomes}</p>
    </>


  )

}

export default App
