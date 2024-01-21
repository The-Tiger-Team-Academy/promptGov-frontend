import { Container, Box, Button } from "@mui/material";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styles from "./index.module.css";
import useHistory from "../../module/history/hook/gethis.hook";

const display = 1000;
// TODO : should be move to a separate file
const columns: GridColDef[] = [
  {
    field: "document",
    headerName: "รายชื่อเอกสาร",
    width: display,
    editable: false,
    renderCell: (params) => {
      // Define the handleClick function
      const handleClick = () => {
        const url = params.row.url; // Assuming 'url' is part of your row data
        window.open(url, "_blank"); // Open the URL in a new tab
      };

      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} onClick={handleClick}>
          <img
            src="/img/doc.png"
            alt="Doc"
            style={{ height: 30, width: 30 }}
            onClick={handleClick}
          />
          <span onClick={handleClick}>{params.value}</span>
        </Box>
      );
    },
  },

];

const Index = () => {
  const { data } = useHistory();
  const rows: readonly any[] = data.map((item, index) => ({
    ...(typeof item === 'object' ? item : {}),
    id: index, // Ensure there is an 'id' field for DataGrid to work correctly
  }));

  return (
    <Container className={styles.font}>
      <Box sx={{ marginTop: "px" }}>
        <h1 className={styles.font}>ประวัติการสั่งซื้อ</h1>
      </Box>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          className={styles.font}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 100,
              },
            },
          }}
          pageSizeOptions={[20]}
          rows={rows}
        />
      </Box>
    </Container>
  );
};

export default Index;
