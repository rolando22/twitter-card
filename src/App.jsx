import { TwitterCard } from './TwitterCard';

import './App.css';

const users = [
    {
        userName: 'midudev',
        name: 'Miguél Ángel Durán',
        isFollowing: true,
    },
    {
        userName: 'platzi',
        name: 'Platzi',
        isFollowing: false,
    },
    {
        userName: 'goncy',
        name: 'goncy.tsx',
        isFollowing: true,
    },
];

export function App() {
    return (
        <main className='App-container'>
            {users.map(user => 
                <TwitterCard 
                    key={user.userName} 
                    userName={user.userName}
                    initialIsFollowing={user.isFollowing}
                >
                    {user.name}
                </TwitterCard>
            )}
        </main>
    );
}
