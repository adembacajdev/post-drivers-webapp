import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    size: yup.string().required()
  });