const handler = async (req, res) => {
  res.setHeader("Content-Type", "application/json")
  const timeout = parseInt(req.query.timeout)
  if (isNaN(timeout)) {
    return
  }
  console.log(timeout)
  await sleep(timeout * 1000)
  console.log("done sleeping")
  res.statusCode = 200
  res.end(JSON.stringify({ name: "John Doe", timeout }))
}

const handleError = (res, e) => {
  console.log(e)
  res.statusCode = 400
  res.end(JSON.stringify({ err: e }))
}
const sleep = (waitTimeInMs) => new Promise((resolve) => setTimeout(resolve, waitTimeInMs))

export default handler
