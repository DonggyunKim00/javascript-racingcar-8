import { SYMBOL } from '../constant';

export const formatRoundResult = (infos) =>
  infos
    .map((info) => `${info.name} : ${SYMBOL.DISTANCE.repeat(info.distance)}`)
    .join('\n');
