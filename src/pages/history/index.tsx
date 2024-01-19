import { Container, Box } from "@mui/material"
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from "./index.module.css"

const columns: GridColDef[] = [
    {
        field: 'document',
        headerName: 'รายชื่อเอกสาร',
        width: 1100,
        editable: false,
        renderCell: (params) => (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src="/img/doc.png" alt="Doc" style={{ height: 30, width: 30 }} />
                {params.value}
            </Box>
        ),
    },
    
];

const rows = [
    { id: 1, document: 'เอกสารบันทึกข้อความ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 2, document: 'เอกสารสําคัญ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 3, document: 'เอกสารด่วน และสําคัญมหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 4, document: 'เอกสารขอความอนุเคราะห์ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 5, document: 'เอกสารราชการ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 6, document: 'เอกสารเพื่อใช้สําหรับยืมอุปกรณ์ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 7, document: 'เอกสารขอใช้ยานพาหนะออกนอกสถานที่ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 8, document: 'เอกสารบันทึกข้อความ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 9, document: 'เอกสารสําคัญ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 10, document: 'เอกสารด่วน และสําคัญมหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 11, document: 'เอกสารขอความอนุเคราะห์ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 12, document: 'เอกสารราชการ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 13, document: 'เอกสารเพื่อใช้สําหรับยืนอุปกรณ์ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 14, document: 'เอกสารขอใช้ยานพาหนะออกนอกสถานที่ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 15, document: 'เอกสารสําคัญ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 16, document: 'เอกสารสําคัญ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { id: 17, document: 'เอกสารสําคัญ มหาวิทยาลัยเทคโนโลยีสุรนารี' },
];


const index = () => {
    return (
        <Container className={styles.font}>
            <Box sx={{ marginTop: "px" }} >
                <h1 className={styles.font}>ประวัติการสั่งซื้อ</h1>
            </Box>
            <Box sx={{ height: 600, width: '100%' }} >
                <DataGrid className={styles.font}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 100,
                            },
                        },
                    }}
                    pageSizeOptions={[20]}
        
                />
            </Box>
        </Container>
    )

}

export default index