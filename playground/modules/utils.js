const last = 'bos';
const middle = 'slam dunk';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

const first = 'WWESS';

// named exports - as many as you want
export { last, middle };

// default exports
export default first;
