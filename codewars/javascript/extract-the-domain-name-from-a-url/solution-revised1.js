function domainName(url) {
  const prefixMatch = url.match(/(https?:\/\/)*(www\.)*/g);
  return prefixMatch ? url.substr(prefixMatch[0].length).split('.')[0] : url;
}
