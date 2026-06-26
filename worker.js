export default {
  async fetch(request, env) {
    const result = await env.DB
      .prepare("SELECT datetime('now') as time")
      .first();

    return Response.json({
      ok: true,
      database: result
    });
  }
}
