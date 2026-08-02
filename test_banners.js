const { RemoteConnector } = require('@bildit-platform/nextjs-api');

async function testNewKey() {
  const connector = new RemoteConnector({
    key: '592c3334-7356-4876-8ffb-906d67619d67',
    baseURL: 'https://admin.bildit.co',
  });

  try {
    const res = await connector.getWebBanners({
      location: '/',
      mode: 'csr',
      tomorrow: true,
      source: 'live',
    });
    console.log('API KEY TEST SUCCESSFUL! RESPONSE:', JSON.stringify(res, null, 2));
  } catch (err) {
    console.error('ERROR STATUS:', err?.response?.status || err.message);
    console.error('ERROR DATA:', err?.response?.data);
  }
}

testNewKey();
