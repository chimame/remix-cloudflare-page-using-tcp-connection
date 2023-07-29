import { LoaderArgs } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { connection } from "~/lib/db.server"

export const loader = async ({ context }: LoaderArgs) => {
  // @ts-expect-error
  const client = await connection(context.env['DATABASE_URL'])
  const result = await client.query({
    text: 'SELECT * FROM "tablename"'
  })

  return { result: JSON.stringify(result.rows[0]) }
}

export default function Test() {
  const { result } = useLoaderData<typeof loader>()

  return (
    <>
      test: {result}
    </>
  )
}
