import express from "express"
import schema from "./schema";
//dummy data
const books = [
    { title: "디지털 유목민", author: "짐 캐리" },
    { title: "디지털 유목민2", author: "짐 캐리" },
    { title: "디지털 유목민3", author: "짐 캐리" },
    { title: "몽정기", author: "원 재호" },
];

const app = express();

schema.applyMiddleware({app});

app.listen(3000, () => {
    console.log("Server is ON");
});