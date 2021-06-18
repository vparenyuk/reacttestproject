type UserResponseDataType = ResponseDataType<UserResponseType[]>;

type ResponseDataType<T> = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T
  support: {
    url: string
    text: string
  }
};

type UserResponseType = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
};

type CamelCaseResponseDataType = ResponseCamelCaseDataType<CamelCaseResponseUserType[]>;

type ResponseCamelCaseDataType<T> = {
  page: number
  perPage: number
  total: number
  totalPages: number
  data: T
  support: {
    url: string
    text: string
  }
};

type CamelCaseResponseUserType = {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar: string
};
