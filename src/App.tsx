import Text from "./components/text";

export default function App() {
  
  return (
    <div className="text-green-base">
       <Text as="div" variant="body-sm-bold" className="text-pink-base">Olá mundo!</Text>
       <Text as="div" className="text-green-base">Olá mundo!</Text>
       <Text as="div" variant="body-md-bold">Olá mundo!</Text>
       <Text>Levar o dog pra passear</Text>
    </div>
  )
}

