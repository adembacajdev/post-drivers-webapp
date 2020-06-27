import * as yup from 'yup';
const phoneRegExp = /^\d{9}$/
export const OrderSchema = yup.object().shape({
  product_id: yup.number().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  description: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
  country: yup.string().required(),
  city: yup.string().required(),
  address: yup.string().required(),
  building: yup.string().required(),
});