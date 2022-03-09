const Join = () => {
    return (
        <div className='wrapper'>
            <div className="Join">
                <div className='inner'>
                    <div>
                        <h2>Welcome</h2>
                    </div>
                    <div className='welcome-helper'>
                        sign up with your email address to receive exclusive news and updates.
                    </div>

                    <div className='welcome-form'>
                        <form action={import.meta.env.VITE_DOMAIN} method='GET'>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder='Email Address'
                                required 
                            />
                            <button type='submit'>Join</button>
                        </form>
                    </div>

                    <div className='welcome-footer'>
                        We respect your privacy.
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Join