export const capitalizeLetter1 = (word: string, capitalize = false) => {
  const restOfTheWordPart = word.split("/")[2] || word.split("/")[1];

  if (capitalize)
    return restOfTheWordPart
      .at(0)
      ?.toUpperCase()
      ?.concat(restOfTheWordPart.slice(1));
  return restOfTheWordPart;
};
