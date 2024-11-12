import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableContainer,
  TablePagination,
  Paper,
  Button,
  styled,
  Typography,
  Tooltip,
} from "@mui/material";

const Tabela = ({ data, calcularPrecoSugerido }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Paper style={{ padding: "30px", boxShadow: "none" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCellCabecalhoStyled>Código</TableCellCabecalhoStyled>
              <TableCellCabecalhoStyled>Descricao</TableCellCabecalhoStyled>
              <TableCellCabecalhoStyled>Usado</TableCellCabecalhoStyled>
              <TableCellCabecalhoStyled>Preço Custo</TableCellCabecalhoStyled>
              <TableCellCabecalhoStyled>
                Preço Sugerido
              </TableCellCabecalhoStyled>
              <TableCellCabecalhoStyled>Ação</TableCellCabecalhoStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCellLinhaStyled>
                    <TextNoWrap>{item.id}</TextNoWrap>
                  </TableCellLinhaStyled>
                  <TableCellLinhaStyled>
                    <Tooltip title={item.descricao} placement="bottom-start">
                      <TextNoWrap>{item.descricao}</TextNoWrap>
                    </Tooltip>
                  </TableCellLinhaStyled>
                  <TableCellLinhaStyled>
                    <Typography>{item.usado === 1 ? "Sim" : "Não"}</Typography>
                  </TableCellLinhaStyled>
                  <TableCellLinhaStyled>
                    <TextNoWrap>{item.precoCusto}</TextNoWrap>
                  </TableCellLinhaStyled>
                  <TableCellLinhaStyled>
                    <TextNoWrap>{item.precoSugerido ?? "-"}</TextNoWrap>
                  </TableCellLinhaStyled>
                  <TableCellLinhaStyled>
                    <Botao
                      onClick={() =>
                        calcularPrecoSugerido(item.id, item.descricao)
                      }
                    >
                      Calcular
                    </Botao>
                  </TableCellLinhaStyled>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Linhas por página"
      />
    </Paper>
  );
};

const Botao = styled(Button)({
  backgroundColor: "#5483fb",
  color: "#fff",
});

const TableCellCabecalhoStyled = styled(TableCell)({
  padding: "10px",
  backgroundColor: "#e9e9e9",
  minWidth: "120px",
  maxWidth: "200px",
});

const TableCellLinhaStyled = styled(TableCell)({
  padding: "8px",
  minWidth: "120px",
  maxWidth: "200px",
});

const TextNoWrap = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default Tabela;
