const getTruncatedAddress = (address, charCount) => {
  return `${address.substring(0, charCount)}...${address.substring(address.length - charCount, address.length)}`
};

export { getTruncatedAddress };