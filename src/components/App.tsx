import React, {FC, useState} from 'react';
import '../styles/App.scss'
import Home from './Home';
import Main from './Main';

const App: FC = () => {
    const [isMainDisplayed, setIsMainDisplayed] = useState(false);

    const displayMain = () => {
        setIsMainDisplayed(true);
    }

    return (
        <div className={'app'}>
            {isMainDisplayed ? <Main/> : <Home onAction={displayMain}/>}
        </div>
    );
}

export default App;
