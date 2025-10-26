export const formatRoundResult = (infos) =>
  infos.map((info) => `${info.name} : ${'-'.repeat(info.distance)}`).join('\n');
