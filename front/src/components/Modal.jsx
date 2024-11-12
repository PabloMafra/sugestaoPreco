import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid2,
  Typography,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import { CheckCircle, XCircle } from "react-feather";

const Modal = ({ modalAberto, fecharModal, calculado, mensagem }) => {
  let mensagemModal = "Calculando preço sugerido...";
  let Icon = <CircularProgress />;

  if (calculado) {
    mensagemModal = "Preço sugerido calculado com sucesso.";
    Icon = <CheckCircle color="green" />;
  } else if (mensagem) {
    mensagemModal = mensagem;
    Icon = <XCircle color="red" />;
  }

  return (
    <Dialog open={modalAberto} onClose={fecharModal} maxWidth="sm" fullWidth>
      <DialogContent
        sx={{
          height: "calc(100vh - 700px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <ModalContent>
          <MessageContainer>
            <Typography variant="h6" gutterBottom>
              {mensagemModal}
            </Typography>
          </MessageContainer>
          <IconContainer>{Icon}</IconContainer>
        </ModalContent>
      </DialogContent>
    </Dialog>
  );
};

const ModalContent = styled(Grid2)({
  display: "flex",
  flexDirection: "column",
});

const MessageContainer = styled(Grid2)({
  display: "flex",
  justifyContent: "center",
});

const IconContainer = styled(Grid2)({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
});

export default Modal;
