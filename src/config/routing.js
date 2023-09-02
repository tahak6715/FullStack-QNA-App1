import { BrowserRouter, Route, Routes } from "react-router-dom";


import Admin from "../dashboardsss/admin";
import Userss from "../dashboardsss/user";


const { Box } = require("@mui/material");

function Routing(){

return(

    <Box>
<BrowserRouter>

<Routes>

    <Route path="/admin/*" element={<Admin/>} />
    <Route path="/user/*" element={<Userss/>}/>


</Routes>
</BrowserRouter>
    </Box>
)

}

export default Routing;