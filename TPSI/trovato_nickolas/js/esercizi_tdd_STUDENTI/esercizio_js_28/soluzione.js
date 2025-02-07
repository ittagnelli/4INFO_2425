export const upper_case = (str) => {
    /export const capitalize_all = (str) => {
  if (!str || typeof str !== "string") return "";

  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
};
}

