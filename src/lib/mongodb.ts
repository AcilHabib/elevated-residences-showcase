import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getUri(): string {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    throw new Error("DATABASE_URL is not set in environment variables.");
  }
  return uri;
}

export function getMongoClient(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(getUri()).connect();
  }
  return global._mongoClientPromise;
}

export async function getDb() {
  const client = await getMongoClient();
  return client.db();
}
