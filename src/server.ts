import * as express from "express";
import * as expressGraphQL from "express-graphql";
import schema from "./schema/schema";

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log(`App listening on port: 3000`);
});
