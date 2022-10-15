const { Spot, LambdaSigner } = require("@danswar/binance-connector-node");

exports.handler = async event => {
  if (!event.apiKey) return console.log("no valid event");
  if (!event.asset) return console.log("no valid asset");

  const signer = new LambdaSigner(event.apiKey, process.env.KEY_MANAGER_ARN);
  const client = new Spot(signer);

  const { data: [position] } = await client.savingsFlexibleProductPosition({
    asset: event.asset
  });

  if (position) {
    const { productId, amount } = position;
    await client.savingsFlexibleRedeem(
      productId,
      event.amount || amount,
      event.type || "FAST"
    );
    console.log("succeeded");
  }
};
