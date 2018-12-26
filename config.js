const domain = process.env.SPRK_SERVER_URL;
const apiKey = process.env.SPRK_API_KEY;

if (!domain) {
  console.error(
    'Server URL not available, Please set SPRK_SERVER_URL env variable.'
  );
  process.exit(1);
}

if (!apiKey) {
  console.error('Server API key not available, set SPRK_API_KEY env variable.');
  process.exit(1);
}

module.exports = {
  domain,
  apiKey,
};
