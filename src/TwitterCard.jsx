import './TwitterCard.css';

export function TwitterCard({ children, userName}) {
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
                <button className='TwitterCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    );
}