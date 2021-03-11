import './App.css';
import Display from './components/Display.jsx';
import WhenTruthy from "./components/WhenTruthy";
import WhenFalsy from "./components/WhenFalsy";

const age = 22;

const App = () => {
    return (
        <Display ifTruthy={age >= 21}>
            <WhenTruthy>
                <h1>You can Enter</h1>
            </WhenTruthy>
            <WhenFalsy>
                <h1>Beat it Kid</h1>
            </WhenFalsy>
        </Display>
    )
}

export default App;
