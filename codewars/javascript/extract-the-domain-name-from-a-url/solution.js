function domainName(url) {
  return url.replace(/(https?:\/\/)|(www\.)/g, '').split('.')[0];
}
