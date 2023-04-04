import { heroes } from "../data/heroes";

const getHeroByName = (name = "") => {
  name = name?.toLowerCase().trim();
  if (!name?.length) return [];
  return heroes.filter((hero) => {
    return hero.superhero.toLowerCase().includes(name);
  });
};
export default getHeroByName;
