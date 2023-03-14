import React from 'react'
import { Card, CardContent } from '@mui/material';
import { Container, Box } from '@mui/system';
import TableToolbar from 'components/table-toolbar';
import AppRoutes from 'navigation/appRoutes';
import { useNavigate } from 'react-router-dom';

function Units() {
    const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
    <Card>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          buttonText="New"
          handleClick={() => {
            navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="CATALOG"
          title="Units"
        />
        <Box sx={{ mt: 3 }}>
        unit item
        </Box>
      </CardContent>
    </Card>
  </Container>  )
}

export default Units