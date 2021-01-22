const getUtcDate = () => Date.parse(new Date().toISOString());
module.exports = getUtcDate;
