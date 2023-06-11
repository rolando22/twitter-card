import { useState } from 'react';

import './TwitterCard.css';

export function TwitterCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo': 'Seguir';
    const buttonClassName = isFollowing ? 'TwitterCard-button is-following' : 'TwitterCard-button';

    const handlerClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className='TwitterCard-container'>
            <section className='TwitterCard-user'>
                <img 
                    className='TwitterCard-user-avatar' 
                    src={`https://unavatar.io/${userName}`} 
                    alt={`El avatar de ${userName}`} 
                />
                <div className='TwitterCard-user-info'>
                    <strong className='TwitterCard-user-name'>
                        {children}
                    </strong>
                    <span className='TwitterCard-user-nick'>
                        @{userName}
                    </span>
                </div>
            </section>
            <aside>
                <button 
                    className={buttonClassName}
                    onClick={handlerClick}
                >
                    <span className='TwitterCard-text-follow'>{text}</span>
                    <span className='TwitterCard-text-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}