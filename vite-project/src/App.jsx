import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'
import Controls from './Components/Controls'
import Layout from './Components/Layout'
import PrivacyMessage from './Components/PrivacyMessage'
import { useSelector } from 'react-redux'

function App() {

  const privacy = useSelector(store=>store.privacy)

    return <center className="px-4 py-5 my-5 ">
      <Layout>
   <Header></Header>
    <div className="col-lg-6 mx-auto">
      {privacy?<PrivacyMessage></PrivacyMessage>:<Display></Display>}
      <Controls></Controls>
    </div>
    </Layout>
  </center>
}

export default App
