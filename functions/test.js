export default (req, res) => {
  res.status(200).send(JSON.stringify(req)+JSON.stringify(res))
}
