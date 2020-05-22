import isServer from './isServer';

export default function urlHelper(path = '') {
  if (!isServer()) {
    return `${BASE_URL}${path}`;
  }

  return `${process.env.HOSTNAME}${path}`;
}
