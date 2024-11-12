import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid2, Typography } from "@mui/material";
import Modal from "./components/Modal";
import Tabela from "./components/Tabela";

function App() {
  const [data, setData] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [calculado, setCalculado] = useState(false);
  const [mensagem, setMensagem] = useState();

  useEffect(() => {
    const listarEstoque = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/getProducts"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Erro ao chamar o backend:", error);
      }
    };

    listarEstoque();
  }, []);

  const inserirPrecoSugerido = async (id, descricao) => {
    console.log(descricao, "descricao");
    const primeiraPalavra = descricao.split(" ")[0];

    await axios
      .get(
        `http://localhost:8081/api/getSugestPrice?descricao=${primeiraPalavra}`,
        {
          timeout: 5000,
        }
      )
      .then(async (res) => {
        setTimeout(() => {
          setCalculado(true);
        }, 4000);

        const valorSugerido = res?.data.preco;
        await axios.post("http://localhost:8081/api/insertSugestPrice", {
          id,
          valorSugerido,
        });
      })
      .catch(() => {
        setMensagem("Não foi possível calcular o preço sugerido.");
        console.log("deu certo");
      });
  };

  const calcularPrecoSugerido = (idItem, descricao) => {
    setModalAberto(true);
    inserirPrecoSugerido(idItem, descricao);
  };

  const fecharModal = () => {
    if (calculado || !!mensagem) {
      window.location.reload();
    }
  };

  return (
    <>
      <Grid2 style={{ backgroundColor: "#5483fb", padding: "30px" }}>
        <Typography
          style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}
        >
          Sugestão de preços
        </Typography>
      </Grid2>
      <Grid2>
        <Typography
          style={{
            padding: "30px 30px 0px 30px",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Produtos em estoque
        </Typography>
      </Grid2>
      <Tabela
        data={data}
        calcularPrecoSugerido={calcularPrecoSugerido}
        inserirPrecoSugerido={inserirPrecoSugerido}
      />
      <Modal
        modalAberto={modalAberto}
        fecharModal={fecharModal}
        calculado={calculado}
        mensagem={mensagem}
      />
    </>
  );
}

export default App;
