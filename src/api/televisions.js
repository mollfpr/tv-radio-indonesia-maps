import axios from 'axios';

const televisions = async province => {
  const { data } = await axios.get(
    `https://map.gampangngiklan.com/admin/api/televisions/${province}`
  );

  return data;
};

export default televisions;
