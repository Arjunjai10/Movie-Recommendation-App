import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { signUp } from '../utils/api';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();  

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp({ username, email, password });
            console.log('SignUp success:', response);
            alert('SignUp successful! You can now log in.');
            navigate('/login'); 
        } catch (error) {
            console.error('SignUp error:', error);
            setErrorMessage(error.response ? error.response.data.message : 'Something went wrong');
        }
    };

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        card: {
            background: "rgba(40, 40, 40, 0.95)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            borderRadius: "15px",
            padding: "40px",
            width: "400px",
            height: "fit-content",
            textAlign: "center",
            color: "#ffffff",
        },
        title: {
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#e50914",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "black",
        },
        label: {
            fontSize: "14px",
            textAlign: "left",
            fontWeight: "600",
            color: "black",
            marginBottom: "8px",
        },
        input: {
            padding: "12px 0px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "8px",
            width: "100%",
            fontSize: "16px",
            background: "rgba(255, 255, 255, 0.1)",
            color: "black",
            outline: "none",
            transition: "border 0.3s ease",
        },
        button: {
            background: "linear-gradient(135deg, #e50914, #ff9900)",
            padding: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            transition: "transform 0.3s ease, background-color 0.3s ease",
        },
        linkText: {
            marginTop: "10px",
            fontSize: "14px",
            color: "#bbb",
        },
        link: {
            color: "#e50914",
            textDecoration: "none",
            fontWeight: "bold",
        },
        errorMessage: {
            color: "#ff4d4d",
            backgroundColor: "#fff0f0",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "20px",
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Sign Up</h2>
                {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label} htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <label style={styles.label} htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <label style={styles.label} htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Sign Up</button>
                </form>
                <div style={styles.linkText}>
                    <span>Already have an account? </span>
                    <a href="/login" style={styles.link}>Log In</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
