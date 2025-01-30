import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import api from '../utils/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await api.login({ email, password });
            localStorage.setItem('token', data.token); 
            alert('Logged in successfully');
            navigate('/home'); 
        } catch (error) {
            alert('Login failed');
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
            textAlign: "center",
            color: "black",
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
            color: "black",
        },
        link: {
            color: "#e50914",
            textDecoration: "none",
            fontWeight: "bold",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
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
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <div style={styles.linkText}>
                    <span>Don't have an account? </span>
                    <a href="/sign-up" style={styles.link}>Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
