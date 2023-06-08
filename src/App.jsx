import { TwitterCard } from './TwitterCard';

import './App.css';

export function App() {
    return (
        <main className='App-container'>
            <TwitterCard userName='midudev'>Miguél Ángel Durán</TwitterCard>
            <TwitterCard userName='goncy'>goncy.tsx</TwitterCard>
            <TwitterCard userName='platzi'>Platzi</TwitterCard>
        </main>
    );
}
