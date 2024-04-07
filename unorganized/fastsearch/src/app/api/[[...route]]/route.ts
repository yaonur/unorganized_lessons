import { Redis } from "@upstash/redis/cloudflare";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");
type EnvConfig = {
  UPSTASH_REDIS_REST_URL: string;
  UPSTASH_REDIS_REST_TOKEN: string;
  NEXT_PUBLIC_IS_LOCAL: boolean;
};
app.use('/*',cors())
app.get("/search", async (c) => {
	try {
		const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } =
		env<EnvConfig>(c);
	//   console.log("UPSTASH_REDIS_REST_URL:", UPSTASH_REDIS_REST_URL);
	//   console.log("UPSTASH_REDIS_REST_TOKEN:", UPSTASH_REDIS_REST_TOKEN);
	  const redis = new Redis({
		url: UPSTASH_REDIS_REST_URL,
		token: UPSTASH_REDIS_REST_TOKEN,
	  });
	
	  const query = c.req.query("q");
	  if (!query) {
		return c.json({ message: "Invalid search query" }, { status: 400 });
	  }
	
	  const start = Date.now();
	  const res = [];
	  const rank = await redis.zrank("terms", query.toUpperCase());
	//   console.log("rank:", rank);
	  if (rank !== null && rank !== undefined) {
		const temp = await redis.zrange<string[]>("terms", rank, rank + 100);
		for (const el of temp) {
			// console.log("element",el)
		  if (!el.startsWith(query.toUpperCase())) {
			// console.log("-----------------not starts with query-------------",el)
			break;
		  }
		  if (el.endsWith("*")) {
			// console.log("-----------------ends with *-------------",el)
			res.push(el.substring(0, el.length - 1));
		  }
		}
		// res.push({
		//   term: query,
		//   rank,
		// });
	  }
	//   console.log("res",res)
	  const duration = Date.now() - start;
	  return c.json({
		results: res,
		duration,
	  });

	} catch (error) {
		console.error(error);
		return c.json({ message: "Internal server error" }, { status: 500 });
	} 
});

export const GET = handle(app);
export default app as never;
