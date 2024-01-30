module.exports = async function analysis(mClient) {
  try {
    const thisCollection = mClient.collection(process.env.DB_COLLECTION_NAME);
    let data = thisCollection.find({}).sort({ _id: -1 }).limit(100);
    let allValues = await data.toArray();
    // console.info(JSON.stringify(allValues[99], null, 2));
    // require('fs').writeFileSync('./test.json', JSON.stringify(allValues[99], null, 2), { encoding: 'utf-8' });
    console.log('analysis complete!');
  } catch (error) {
    throw error;
  }
}