import axios from 'axios';

const radios = async province => {
  const { data } = await axios.get(
    `https://map.gampangngiklan.com/admin/api/radios/${province}`
  );

  return data;
};

export default radios;
