import axios from 'axios';

const radios = async province => {
  const { data } = await axios.get(
    `http://blooming-forest-86922.herokuapp.com/api/radios/${province}`
  );

  return data;
};

export default radios;
