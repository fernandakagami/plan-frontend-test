export function getContinentImage(continent: string) {
  switch (continent) {
    case 'Asia':
      return {name: 'Ásia', image: '/img/continents/asia.png', width: 36, height: 38}
    case 'Africa':
      return {name: 'África', image: '/img/continents/africa.png', width: 28, height: 36}
    case 'Europe':
      return {name: 'Europa', image: '/img/continents/europe.png', width: 29, height: 38}
    case 'Oceania':
      return {name: 'Oceania', image: '/img/continents/oceania.png', width: 41, height: 35}
    case 'North America':
      return {name: 'América do Norte', image: '/img/continents/northamerica.png', width: 32, height: 35}
    case 'South America':
      return {name: 'América do Sul', image: '/img/continents/southamerica.png', width: 32, height: 40}
    default:
      return {
        name: continent,
        image: null,
      }
  }
}
