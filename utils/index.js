export const checkImageURL = (url) => {
    return url && /\.(png|jpe?g|bmp|gif|webp)$/i.test(url);
  };
  