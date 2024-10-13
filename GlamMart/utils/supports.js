//Backend fetched query//
export const fetchQuery = `*[_type == 'products'] | order(_createdAt desc){
    _id,
    title,
    productsType,
    mainImage {
      asset -> {
        url
      }
    },
    bgImgae{
      asset -> {
        url
      }
    },
    shortDescription,
    description,
    price,
    categories[] -> {
      _id,
      title,
      mainImage {
        asset -> {
          url
        }
      },
    }
}`;
