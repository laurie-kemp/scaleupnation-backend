import { createConnection } from "typeorm";
import { DefaultNamingStrategy } from "typeorm/naming-strategy/DefaultNamingStrategy";
import { NamingStrategyInterface } from "typeorm/naming-strategy/NamingStrategyInterface";
import { snakeCase } from "typeorm/util/StringUtils";
import User from "./users/entity";
import Database from "./database/entity";
import Update from "./updates/entity";

class CustomNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  tableName(targetName: string, userSpecifiedName: string): string {
    return userSpecifiedName ? userSpecifiedName : snakeCase(targetName) + "s";
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[]
  ): string {
    return snakeCase(
      embeddedPrefixes.concat(customName ? customName : propertyName).join("_")
    );
  }

  columnNameCustomized(customName: string): string {
    return customName;
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }
}

export default () =>
  createConnection({
    type: "postgres",
    url:
      process.env.DATABASE_URL ||
      "postgres://qfdcjbbxykxbkm:9fe4c28b3a5d5c8741681e106974364c7f1aad431367b338fce38eafd4ae7348@ec2-54-83-60-13.compute-1.amazonaws.com:5432/d58pd6p13uf1ku",
    entities: [User, Database, Update],
    ssl: true,
    synchronize: true, // careful with this in production!
    logging: true,
    namingStrategy: new CustomNamingStrategy()
  }).then(_ => console.log("Connected to Postgres with TypeORM"));
