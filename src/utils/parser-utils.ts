export const capitalizeText = (text = "", separator = "") => {
  try {
    const capitalizedText = text.split(separator).map((mutableText) => {
      const firstLetter = mutableText.charAt(0).toUpperCase();
      const remainingLetter = mutableText.substring(1);
      return `${firstLetter}${remainingLetter.toLowerCase()}`;
    });
    return capitalizedText.join(separator);
  } catch (error) {
    throw new Error("Something went wrong while capitalize text");
  }
};

export const replaceHyphens = (text = "") => {
  try {
    return text.replace("-", " ");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while replace hyphens");
  }
};
