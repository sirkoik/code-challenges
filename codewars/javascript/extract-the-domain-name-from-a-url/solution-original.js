function domainName(url) {
  let name = url;
  const prefix = name.match(/(https?:\/\/)*(www\.)*/g);
  if (prefix) name = name.substr(prefix[0].length).split('.')[0];
  return name;
}
