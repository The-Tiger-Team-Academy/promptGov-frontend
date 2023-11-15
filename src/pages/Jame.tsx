import { Grid, Container } from "@mui/material";

const Jame = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Container>
            <Grid container>
              <Grid item xs={3}>
                <img
                  width={150}
                  height={150}
                  src="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/326791395_3296422097354230_177308293207780560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c-Q5Lnbec70AX9BZwNF&_nc_ht=scontent.fnak3-1.fna&oh=00_AfCinmdfduAo5B8h7SZCI0Tg3cmkSmcHvsiyn8LjLUuxrQ&oe=655A0EFE"
                />
              </Grid>
              <Grid item xs={3}>
                <h1>Supadon Kudmo</h1>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <img width={250} height={250} src="https://s359.kapook.com/pagebuilder/95862450-d704-44bf-b9b5-1f2b033f1a22.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img width={250} height={250} src="https://s359.kapook.com/pagebuilder/95862450-d704-44bf-b9b5-1f2b033f1a22.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img width={250} height={250} src="https://s359.kapook.com/pagebuilder/95862450-d704-44bf-b9b5-1f2b033f1a22.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img width={250} height={250} src="https://s359.kapook.com/pagebuilder/95862450-d704-44bf-b9b5-1f2b033f1a22.jpg" alt="" />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Jame;
