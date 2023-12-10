import { Container } from "@mui/material"
import CreatePages from "./pages/messageRecord"
import Approvalrequest from "./pages/approvalrequest"
import Leaverequest from "./pages/leaverequest"

const index = () => {
  return (
      <Container>
        <CreatePages></CreatePages>
        <Approvalrequest></Approvalrequest>
        <Leaverequest></Leaverequest>
      </Container>
  )

}

export default index