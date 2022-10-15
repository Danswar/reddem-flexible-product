const { Spot, LambdaSigner } = require("@danswar/binance-connector-node");

exports.handler = async event => {
  if (!event.apiKey) return console.log("no valid event");

  const signer = new LambdaSigner(event.apiKey, process.env.KEY_MANAGER_ARN);
  const client = new Spot(signer);

  const {
    data: flexibleProducts
  } = await client.savingsFlexibleProductPosition();

  return flexibleProducts;
};
