import { db } from "../../firebase/config";

import React from "react";
import styles from "./Register.module.css";
import { useState,useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";




const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading} = useAuthentication();

  const handleSubmit= async(e)=>{
    e.preventDefault();
  
  setError("")
  
  const user = {
    displayName,
    email,
    password
  }
  if (password !== confirmPassword) {
    setError("As senhas precisam ser iguais.");
    return;
  }

  
 const res = await createUser(user);
 
 console.log(res)
 };
 useEffect(() => {
  if (authError) {
    setError(authError);
  }
}, [authError]);


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu Usuário e Compartilhe Sua ideia</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do Usuário"
            value={displayName}
            onChange={(e)=> setDisplayName(e.target.value)}
            
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email do Usuário"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
          
             autoComplete="Senha"
            name="password"
            required
            placeholder="Insira a sua senha"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
           autoComplete="Confirmação de senha"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Registrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
