import {
  createTheme,
  Divider,
  Grid,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4657A1",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});

const theme2 = createTheme({
  typography: {
    allVariants: {
      color: "#bdbdbd",
    },
  },
});

function MyTable() {
  return (
    <Stack>
      <ThemeProvider theme={theme}>
        <Stack
          paddingLeft={{ xs: 3, sm: 7, md: 10 }}
          paddingRight={10}
          paddingBottom={7}
          paddingTop={7}
          bgcolor="primary.main"
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Stack>
            <Typography fontWeight="bold" variant="h4" fontFamily="sans-serif">
              ADVISOR STYLE GUIDE
            </Typography>
            <Typography fontSize="25px">Table</Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={1}
          >
            <Typography fontWeight="bold" variant="h3" fontFamily="Raleway">
              Forbes
            </Typography>
            <Typography
              letterSpacing="1px"
              paddingBottom={0.5}
              variant="h5"
              fontWeight="light"
            >
              ADVISOR
            </Typography>
          </Stack>
        </Stack>
      </ThemeProvider>

      <ThemeProvider theme={theme2}>
        <Stack>
          {/*1st table */}

          <Stack
            paddingLeft={{ xs: 2, sm: 3, md: 5 }}
            paddingTop={5}
            paddingBottom={5}
          >
            <Typography variant="h5">TABLE/SMALL</Typography>

            <Grid container xs={10} sm={6} md={4}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Label</TableCell>
                    <TableCell variant="head" align="right">
                      Value
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Label</TableCell>
                    <TableCell variant="head" align="right">
                      Value
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Label</TableCell>
                    <TableCell variant="head" align="right">
                      Value
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Stack>

          {/*1st table end */}

          {/*2nd table */}

          <Stack
            paddingLeft={{ xs: 2, sm: 3, md: 5 }}
            paddingTop={5}
            paddingBottom={5}
          >
            <Typography variant="h5">TABLE/2 COLUMNS</Typography>

            <Grid container spacing={2}>
              <Grid
                padding={{ xs: 2, sm: 1, md: 0 }}
                item
                xs={10}
                sm={5}
                md={4}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Label</TableCell>
                      <TableCell variant="head" align="right">
                        Value
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Label</TableCell>
                      <TableCell variant="head" align="right">
                        Value
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Label</TableCell>
                      <TableCell variant="head" align="right">
                        Value
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid
                item
                xs={10}
                sm={5}
                md={4}
                padding={{ xs: 2, sm: 1, md: 0 }}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Label</TableCell>
                      <TableCell variant="head" align="right">
                        Value
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Label</TableCell>
                      <TableCell variant="head" align="right">
                        Value
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Label</TableCell>
                      <TableCell variant="head" align="right">
                        Value
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Stack>

          {/*2nd table end */}

          {/*3rd table */}
          <Stack
            paddingLeft={{ xs: 2, sm: 3, md: 5 }}
            paddingTop={5}
            paddingBottom={5}
          >
            <Typography variant="h5">TABLE/BIG</Typography>
            <Grid container>
              <Grid item xs={8}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Header</TableCell>
                      <TableCell>Header</TableCell>
                      <TableCell>Header</TableCell>
                      <TableCell>Header</TableCell>
                      <TableCell>Header</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    <TableRow>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Stack>

          {/*3rd table end */}
        </Stack>
      </ThemeProvider>
    </Stack>
  );
}

export default MyTable;
