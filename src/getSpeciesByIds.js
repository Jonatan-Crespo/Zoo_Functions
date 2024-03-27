const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  ids.find((specie) => {
    if(ids.includes(specie.id))
    return specie;
    // console.log(specie);
  });
  console.log(ids);
};

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae');


module.exports = getSpeciesByIds;
