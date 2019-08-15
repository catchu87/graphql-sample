import { gql, ApolloServer } from "apollo-server-express";

//dummy data
const dummyBooks = [
    { title: "디지털 유목민", author: "짐캐리" },
    { title: "디지털 유목민2", author: "짐캐리" },
    { title: "디지털 유목민3", author: "짐캐리" },
    { title: "몽정기", author: "원재호" },
];


const Query = gql`
    type Query {
        books : [Book]
        findbook(author:String) : [Book]
    }    
    type Book { 
        title : String 
        author : String
    }
`;
const resolvers = {
    Query: {
        books: () => dummyBooks,
        findbook: (obj, args)=>{
            return dummyBooks.filter(b => {
                return b.author === args.author 
            });
        }
    }
}

const typeDefs = [Query];
const schema = new ApolloServer({
    typeDefs,
    resolvers, 
    playground: {
        endpoint: '/graphql',
        setting: {
            'editor.theme': 'light'
        }
    }
})

export default schema;