import { Client } from 'pg'

export async function connection(databaseUrl: string) {
  const client = new Client(databaseUrl)
  await client.connect()
  return client
}
