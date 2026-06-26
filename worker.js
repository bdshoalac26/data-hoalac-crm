export default {
  async fetch(request, env) {
    return Response.json({
      ok: true,
      message: "CRM API is running",
      database: env.DB ? "Connected" : "Not connected"
    });
  }
}
