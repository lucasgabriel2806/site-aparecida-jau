import { useState } from "react";
import imagem_ns_aparecida3_login from "./../../src/assets/img/paroquia/presbiterio/imagem_ns_aparecida3_login.jpg";
import Title from "./../Components/Title";

const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // impede reload

    console.log("EMAIL:", email);
    console.log("SENHA:", senha);

    try {
      const response = await fetch("http://localhost:5220/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          senha: senha
        })
      });

      if (!response.ok) {
        alert("Email ou senha inválidos");
        return;
      }

      const data = await response.json();
      console.log("Usuário logado:", data);

      // salva no localStorage
      localStorage.setItem("user", JSON.stringify(data));

      // redirecionamento simples
      if (data.tipo === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }

    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="flex justify-between">

      <div className="w-[800px] flex flex-col justify-center items-center">
        <Title>Login</Title>

        <form onSubmit={handleLogin} className="flex flex-col">

          <label>Email</label>
          <input
            className="w-[500px] h-[35px] p-[10px] mb-[5px] rounded-[5px] border"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            className="w-[500px] h-[35px] p-[10px] mb-[5px] rounded-[5px] border"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            className="w-[500px] h-[35px] rounded-[5px] bg-[#034389] text-[#fff]"
            type="submit"
          >
            Entrar
          </button>

        </form>
      </div>

      <div>
        <img src={imagem_ns_aparecida3_login} alt="" />
      </div>

    </div>
  );
};

export default Login;