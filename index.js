import express from "express"
import schema from "./schema";

const app = express();
schema.applyMiddleware({app});
app.listen(3000, () => {
    console.log("Server is ON");
});