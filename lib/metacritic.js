import mockData from "../mock/mockData.json";

export async function getLatestGames() {
  const json = mockData.latestGames;
  const {
    data: { items },
  } = json;

  return items.map((item) => {
    const { description, slug, releaseDate, image, criticScoreSummary, title } =
      item;
    const { score } = criticScoreSummary;

    // crea la imagen
    // const { bucketType, bucketPath } = image;
    // const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image,
    };
  });
}

export async function getGameDetails(slug) {
  // const rawData = await fetch(GAME_DETAILS);
  // const json = await rawData.json();
  const json = mockData.gameDetails[slug];

  const { components } = json;
  const { title, description, criticScoreSummary, image } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  // const cardImage = images.find((image) => image.typeName === "cardImage");
  // const { bucketType, bucketPath } = cardImage;
  // const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    image,
    title,
    slug,
    description,
    score,
    reviews,
  };
}
