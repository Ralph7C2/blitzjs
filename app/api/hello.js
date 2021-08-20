const handler = async (req, res) => {
  res.setHeader("Content-Type", "application/json")
  try {
    const timeout = parseInt(req.query.timeout)
    if (isNaN(timeout)) {
      handleError(res, "not a number")
      return
    }
    console.log(timeout)
    await sleep(timeout * 1000)
    console.log("done sleeping")
    res.statusCode = 200
    res.end(JSON.stringify({ name: "John Doe", timeout }))
  } catch (e) {
    handleError(res, e)
    return
  }
}

const handleError = (res, e) => {
  console.log(e)
  res.statusCode = 400
  res.end(JSON.stringify({ err: e }))
}
const sleep = (waitTimeInMs) => new Promise((resolve) => setTimeout(resolve, waitTimeInMs))

export default handler
