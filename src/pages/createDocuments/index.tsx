import { Container } from "@mui/material"
import CreatePages from "./pages/messageRecord"
import Approvalrequest from "./pages/approvalrequest"

const index = () => {
  return (
      <Container>
        <CreatePages></CreatePages>
        <Approvalrequest></Approvalrequest>
      </Container>
  )

}

export default index