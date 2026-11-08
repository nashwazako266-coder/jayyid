
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      ready: false,
      error: "Method not allowed"
    });
  }

  return res.status(200).json({
    ready: true,
    status: "ok"
  });
}
