import './App.css'
import {Container} from "./components/container/Container.tsx";
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";
import {Wrapp} from "./components/wrapp/Wrapp.tsx";
import {useState} from "react";

function App() {
    const [isVisible, setIsVisible] = useState(false)
const buttonHandler = () => {
    setIsVisible(!isVisible);
}


    return (
        <div>
            <Container>
                <Wrapp displayOn={isVisible}>
                    <Input placeholder='Set...'/>
                    <Input placeholder='Set...'/>
                </Wrapp>
                <Wrapp>
                    <Button text='Settings' onClickButton={buttonHandler}/>
                </Wrapp>
            </Container>
        </div>
    )
}

export default App
