import Cookies from 'js-cookie';

const getCookieAll = () => Cookies.getJSON();

const getCookieByName = name => Cookies.getJSON(name);

const setCookieByName = (name, json) => {
  try {
    JSON.parse(json);
    Cookies.set(name, json);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

const removeCookieByName = (name) => {
  Cookies.remove(name);
};

export {
  getCookieAll,
  getCookieByName,
  setCookieByName,
  removeCookieByName,
};

export default {
  getCookieAll,
  getCookieByName,
  setCookieByName,
  removeCookieByName,
};
