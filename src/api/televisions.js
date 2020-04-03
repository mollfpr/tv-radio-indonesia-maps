import axios from 'axios';

const televisions = async province => {
  const { data } = await axios.get(
    `http://blooming-forest-86922.herokuapp.com/api/televisions/${province}`
  );

  return data;
};

export default televisions;
