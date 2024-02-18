

const LoginForm = ({ username, password, setUsername, setPassword, handleClick }) => {
    return (
        <div>
            <h2>Login to application</h2>
            <form>
                <div>
                    <input
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <br></br>
                    <input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>

                <div>
                    <button type="submit" onClick={handleClick}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm