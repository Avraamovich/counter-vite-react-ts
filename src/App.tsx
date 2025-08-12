import './App.css'
import {Container} from "./components/container/Container.tsx";
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";
import {Wrapp} from "./components/wrapp/Wrapp.tsx";

function App() {

const buttonHandler = () => {
    alert("Hello!!!")
}

    return (
        <div>
            <Container>
                <Wrapp>
                    <Input placeholder='Set...'/>
                    <Input placeholder='Set...'/>
                </Wrapp>
                <Wrapp>
                    <Button text='Press me...' onClickButton={buttonHandler}/>
                </Wrapp>
            </Container>
        </div>
    )
}

export default App
